// models
import { Task } from 'src/data/models/crud/task.model'

// ---------------------------
// public
// ---------------------------

export function filterTasks (tasks, value) {
    return tasks.filter((task) => {
        return task.text.toLowerCase().indexOf(value.toLowerCase()) > -1 // TODO: replace with Array.prototype.includes
    })
}
