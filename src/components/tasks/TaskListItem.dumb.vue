<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="task-list-item"
         v-bind:class="{ 'selected': isSelected, 'completed': task.status === 2 }">

        <span>{{task.text}}</span>

        <div class="controls">

            <button v-on:click="_onEdit()" :disabled="task.status === 2 || isSelected">
                <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>

            <button v-on:click="_onRemove()" :disabled="task.status === 1 || isSelected">
                <i class="fa fa-remove" aria-hidden="true"></i>
            </button>

            <button v-on:click="_onToggleComplete()" :disabled="isSelected">

                <template v-if="task.status === 2">
                    <i class="fa fa-undo" aria-hidden="true"></i>
                </template>

                <template v-else>
                    <i class="fa fa-check" aria-hidden="true"></i>
                </template>

            </button>
        </div>

    </div>
</template>

<script>
    // dumb component (this means it does not interact with application state, it only emit events and fires callbacks so parent components can interact with state)

    export default {
        data: function () {
            return {
                tasks: [],
                editing_task: null,
                editing_task_unique_id: null,
                has_tasks: false,
                is_list_view: false
            }
        },

        methods: {
            _onEdit: function () {
                if (typeof this.onEdit === 'undefined') {
                    return
                }
                this.onEdit(this.task)
            },

            _onRemove: function () {
                if (typeof this.onRemove === 'undefined') {
                    return
                }
                this.onRemove(this.task)
            },

            _onToggleComplete: function () {
                if (typeof this.onToggleComplete === 'undefined') {
                    return
                }
                this.onToggleComplete(this.task)
            }
        },

        props: {
            isSelected: {
                type: Boolean,
                required: true
            },
            onEdit: {
                type: Function
            },
            onRemove: {
                type: Function
            },
            onToggleComplete: {
                type: Function
            },
            task: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped lang='scss'>
    @import '../../styles/components/tasks/task-list-item.scss';
</style>
