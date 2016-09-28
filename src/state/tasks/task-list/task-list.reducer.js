// models
import { Task, TASK_STATUS } from 'src/data/models/crud/task.model'

// services
import * as LocalStorageUtils from 'src/logic/local-storage/local-storage.utils'

// local: constants
import {
    ACTION_ADD_TASK,
    ACTION_RECEIVE_TASKS,
    ACTION_REMOVE_TASK,
    ACTION_TOGGLE_TASK_COMPLETE,
    ACTION_UPDATE_TASK,
    DEFAULT_TASK_LIST_STATE
} from '../tasks.settings'

// ---------------------------
// private
// ---------------------------

function taskReducer (task, action) {

    let data

    switch (action.type) {

        case ACTION_ADD_TASK:
            let local_id = LocalStorageUtils.getUniqueLocalId(action.tasks)

            return new Task(Object.assign({}, action.data, { local_id }))

        case ACTION_RECEIVE_TASKS:
            return new Task(task)

        case ACTION_TOGGLE_TASK_COMPLETE:

            if (task.unique_id !== action.unique_id) {
                return task
            }

            if ([ TASK_STATUS.COMPLETE, TASK_STATUS.INCOMPLETE ].indexOf(parseInt(task.status)) === -1) {
                return task
            }

            data = Object.assign({}, task, {
                status: task.status === TASK_STATUS.COMPLETE ? TASK_STATUS.INCOMPLETE : TASK_STATUS.COMPLETE
            })

            return new Task(data)

        case ACTION_UPDATE_TASK:
            if (task.unique_id !== action.unique_id) {
                return task
            }

            data = Object.assign({}, task, action.data)

            return new Task(data)
    }
}

// ---------------------------
// public
// ---------------------------

export function taskListReducer (list = DEFAULT_TASK_LIST_STATE, action) {

    switch (action.type) {

        case ACTION_ADD_TASK:
            return [
                ...list,
                taskReducer({}, action)
            ]

        case ACTION_RECEIVE_TASKS:
            return action.data.map((item, i) => {
                let local_id = i + 1
                return taskReducer(Object.assign({}, item, { local_id }), action)
            })

        case ACTION_REMOVE_TASK:
            let index = list.reduce((val, item, i) => (item.unique_id === action.unique_id) ? i : val, 0)
            return [
                ...list.slice(0, index),
                ...list.slice(index + 1)
            ]

        case ACTION_TOGGLE_TASK_COMPLETE:
        case ACTION_UPDATE_TASK:
            return list.map((item) => taskReducer(item, action))

        default:
            return list
    }
}
