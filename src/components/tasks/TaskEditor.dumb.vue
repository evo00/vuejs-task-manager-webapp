<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <!--<form class="task-editor" role="form" v-if="task" v-on:submit.prevent="_onSubmit">-->
    <div class="task-editor" v-if="task">

        <input type="text" v-model="task.text" placeholder="text" />
        <input type="text" style="display: none;" />

        <button v-on:click="_onAddOrUpdate()">
            <template v-if="task.local_id">Update</template>
            <template v-else>Add</template>
        </button>

        <button v-on:click="_onCancel()">Cancel</button>

    </div>
    <!--</form>-->
</template>

<script>
    // dumb component (this means it does not interact with application state, it only emit events and fires callbacks so parent components can interact with state)

    // models
    import { Task } from 'src/data/models/crud/task.model'

    export default {
        data: function () {
            return {}
        },

        props: {
            task: {
                type: Object,
                default: {}
            },
            onAddOrUpdate: {
                type: Function
            },
            onCancel: {
                type: Function
            }
        },

        methods: {
            _onSubmit: function (e) {
                e.preventDefault()
            },

            _onAddOrUpdate: function () {
                if (typeof this.onAddOrUpdate === 'undefined') {
                    return
                }
                this.onAddOrUpdate(this.task)
            },

            _onCancel: function () {
                if (typeof this.onCancel === 'undefined') {
                    return
                }
                this.onCancel()
            }
        }
    }
</script>

<style scoped lang='scss'>
    @import '../../styles/components/tasks/task-editor.scss';
</style>
