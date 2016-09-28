// models
import { StatusFilterType } from 'src/data/models/basic/status-filter.model'
import { Task, TASK_STATUS } from 'src/data/models/crud/task.model'

// ---------------------------
// public
// ---------------------------

export function filterTasks (tasks, type) {
    return tasks.filter((task) => {
        return (
            (type === StatusFilterType.ALL) ||
            (type === StatusFilterType.INCOMPLETE && task.status === TASK_STATUS.INCOMPLETE) ||
            (type === StatusFilterType.COMPLETE && task.status === TASK_STATUS.COMPLETE) ||
            (type === StatusFilterType.TRASH && task.status === TASK_STATUS.TRASH)
        )
    })
}
