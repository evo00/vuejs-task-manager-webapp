// constants
import {
    ACTION_ADD_TASK,
    ACTION_MAKE_TASK,
    ACTION_RECEIVE_TASKS,
    ACTION_REMOVE_TASK,
    ACTION_REQUEST_TASKS,
    ACTION_SET_COMPLETE_FILTER,
    ACTION_SET_EDITING_TASK,
    ACTION_SET_TEXT_FILTER,
    ACTION_TOGGLE_TASK_COMPLETE,
    ACTION_UNSET_EDITING_TASK,
    ACTION_UPDATE_TASK
} from './tasks.settings'

// models
import { Task } from 'src/data/models/crud/task.model'

// --------------------------
// text filter
// --------------------------

export function setTextFilter (value) {
    return {
        type:     ACTION_SET_TEXT_FILTER,
        value:    value
    }
}

// --------------------------
// complete filter
// --------------------------

export function setStatusFilter (value) {
    return {
        type:     ACTION_SET_COMPLETE_FILTER,
        value:    value
    }
}

// --------------------------
// tasks : list
// --------------------------

export function addTask (tasks, data) {
    return {
        type:     ACTION_ADD_TASK,
        tasks:    tasks,
        data:     data
    }
}

export function deleteTask (unique_id) {
    return {
        type:         ACTION_REMOVE_TASK,
        unique_id:    unique_id
    }
}

export function toggleTaskComplete (unique_id) {
    return {
        type:         ACTION_TOGGLE_TASK_COMPLETE,
        unique_id:    unique_id
    }
}

export function updateTask (unique_id, data) {
    return {
        type:         ACTION_UPDATE_TASK,
        unique_id:    unique_id,
        data:         data
    }
}

// --------------------------
// task : make
// --------------------------

export function makeTask () {
    return {
        type:     ACTION_MAKE_TASK
    }
}

// --------------------------
// task : editing
// --------------------------

export function setEditingTask (data) {
    return {
        type:     ACTION_SET_EDITING_TASK,
        data:     data
    }
}

export function unsetEditingTask () {
    return {
        type:     ACTION_UNSET_EDITING_TASK
    }
}

// --------------------------
// tasks : fetch
// --------------------------

export function refreshTasks () {
    return fetchTasks()
}

export function requestTasks () {
    return {
        type:   ACTION_REQUEST_TASKS
    }
}

export function receiveTasks (data) {
    return {
        type:   ACTION_RECEIVE_TASKS,
        data:   data
    }
}

export function fetchTasks () {

    return function (dispatch) {

        dispatch(requestTasks())

        return Task.index().then(
            (tasks) => {
                dispatch(receiveTasks(tasks))
            },
            (message) => {
                // TODO: replace with dispatch
                console.error(message)
            }
        )
    }
}
