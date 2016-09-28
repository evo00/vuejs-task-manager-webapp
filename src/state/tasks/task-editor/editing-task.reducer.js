// models
import { Task } from 'src/data/models/crud/task.model'

// local: constants
import {
    ACTION_MAKE_TASK,
    ACTION_SET_EDITING_TASK,
    ACTION_UNSET_EDITING_TASK,
    DEFAULT_EDITING_TASK_STATE
} from '../tasks.settings'

export function editingTaskReducer (state = DEFAULT_EDITING_TASK_STATE, action) {

    switch (action.type) {

        case ACTION_MAKE_TASK:
            return new Task({})

        case ACTION_SET_EDITING_TASK:
            return new Task(action.data)

        case ACTION_UNSET_EDITING_TASK:
            return DEFAULT_EDITING_TASK_STATE

        default:
            return state
    }
}
