<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="task-controls">
        <div class="task-control-group">
            <div class="task-control">

                <text-filter :on-change="_onTextFilterUpdate"></text-filter>

            </div>
            <div class="task-control right">

                <status-filter class="status-filter"
                               :selected-status-filter="status_filter"
                               :on-select="_onStatusFilterSelection"
                ></status-filter>

            </div>
        </div>
        <div class="task-control-group">
            <div class="task-control">

                <button class="add-task-button" v-on:click="_onNewTask">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </button>

            </div>
            <div class="task-control right">

                <button v-on:click="_onRefreshTasks()">
                    <i class="fa fa-refresh" aria-hidden="true"></i>
                </button>

                <button v-on:click="_onToggleView()">

                    <template v-if="is_list_view">
                        <i class="fa fa-align-justify" aria-hidden="true"></i>
                    </template>

                    <template v-else>
                        <i class="fa fa-th" aria-hidden="true"></i>
                    </template>

                </button>

            </div>
        </div>
    </div>

    <div class="task-list">

        <template v-if="has_tasks">

            <task-list-item
                    v-for="task in tasks | text text_filter | complete status_filter"
                    :task.once="task"
                    :is-selected="task.unique_id === editing_task_unique_id"
                    :on-edit="_onEditTask"
                    :on-remove="_onRemoveTask"
                    :on-toggle-complete="_onToggleTaskComplete"
            ></task-list-item>

        </template>

        <template v-else>
            <div class="no-results">no results</div>
        </template>

    </div>
</template>

<script>
    // smart component (this means it interacts with application state)

    // actions
    import * as Actions from 'src/state/tasks/tasks.actions'

    // components
    import StatusFilter from './status-filter/StatusFilter.dumb'
    import TextFilter from './text-filter/TextFilter.dumb'
    import TaskListItem from './TaskListItem.dumb'

    // store
    import { Store } from 'src/state/store'

    export default {

        components: {
            StatusFilter,
            TextFilter,
            TaskListItem
        },

        data: function () {
            return {
                status_filter: '',
                editing_task: null,
                editing_task_unique_id: null,
                has_tasks: false,
                is_list_view: false,
                tasks: [],
                text_filter: ''
            }
        },

        methods: {

            // ------------------------------------
            // handlers
            // ------------------------------------

            _onNewTask: function () {
                Store.store.dispatch(Actions.makeTask())
            },

            _onRefreshTasks: function () {
                Store.store.dispatch(Actions.refreshTasks())
            },

            _onToggleView: function () {
                this.is_list_view = !this.is_list_view
            },

            // ------------------------------------
            // handlers : task-list-item
            // ------------------------------------

            _onEditTask: function (task) {
                const data = Object.assign({}, task)
                Store.store.dispatch(Actions.setEditingTask(data))
            },

            _onRemoveTask: function (task) {
                Store.store.dispatch(Actions.deleteTask(task.unique_id))
            },

            _onToggleTaskComplete: function (task) {
                Store.store.dispatch(Actions.toggleTaskComplete(task.unique_id))
            },

            // ------------------------------------
            // handlers : text-filter
            // ------------------------------------

            _onTextFilterUpdate: function (term) {
                Store.store.dispatch(Actions.setTextFilter(term))
            },

            // ------------------------------------
            // handlers : status-filter
            // ------------------------------------

            _onStatusFilterSelection: function (filter_type) {
                Store.store.dispatch(Actions.setStatusFilter(filter_type))
            },

            // ----------------------
            // utils
            // ----------------------

            _updateView: function () {

                const _state            = Store.store.getState()

                // state data
                this.status_filter    = _state.tasks_status_filter
                this.tasks              = _state.tasks
                this.text_filter        = _state.tasks_text_filter
                this.editing_task       = _state.editing_task

                // computed data
                this.has_tasks          = this.tasks.length > 0
                this.editing_task_unique_id = this.editing_task !== null ? this.editing_task.unique_id : null
            }
        },

        ready: function () {
            Store.store.subscribe(this._updateView.bind(this))
            this._updateView()
        }
    }
</script>

<style scoped lang='scss'>
    @import '../../styles/components/tasks/task-list.scss';
</style>
