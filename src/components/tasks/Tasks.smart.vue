<template>
    <div class="app-container task-app">

        <task-list></task-list>

        <br/>

        <div class="{{ show_editor ? '' : 'hidden' }}">
            <task-editor :task="editing_task"
                         :on-add-or-update="_onEditorAddOrUpdate"
                         :on-cancel="_onEditorCancel"
            ></task-editor>
        </div>

    </div>
</template>

<script>
    // smart component (this means it interacts with application state)

    // actions
    import * as Actions from 'src/state/tasks/tasks.actions'

    // components
    import TaskList from './TaskList.smart'
    import TaskEditor from './TaskEditor.dumb'

    // store
    import { Store } from 'src/state/store'

    export default {

        components: {
            TaskList,
            TaskEditor
        },

        data: function () {
            return {
                show_editor: false,
                editing_task: null,
                tasks: []
            }
        },

        methods: {

            // ------------------------------------
            // handlers: task-editor
            // ------------------------------------

            _onEditorAddOrUpdate: function () {
                if (this.editing_task.local_id === null) {
                    Store.store.dispatch(Actions.addTask(this.tasks, this.editing_task))
                } else {
                    Store.store.dispatch(Actions.updateTask(this.editing_task.unique_id, this.editing_task))
                }
                Store.store.dispatch(Actions.unsetEditingTask())
            },

            _onEditorCancel: function () {
                Store.store.dispatch(Actions.unsetEditingTask())
            },

            // ------------------------------------
            // utils
            // ------------------------------------

            _updateView: function () {

                const _state = Store.store.getState()

                // state data
                this.editing_task   = _state.editing_task
                this.tasks          = _state.tasks

                // computed data
                this.show_editor    = _state.editing_task !== null
            }
        },

        ready: function () {
            Store.store.subscribe(this._updateView.bind(this))
            this._updateView()
        }
    }
</script>

<style scoped lang='scss'>
    @import '../../styles/components/tasks/tasks.scss';
</style>
