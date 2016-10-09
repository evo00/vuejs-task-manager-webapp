// models
import { STATUS_FILTER_TYPE } from 'src/data/models/basic/status-filter.model'

// --------------------------
// actions
// --------------------------

// text filter
export const ACTION_SET_TEXT_FILTER = 'SET_TEXT_FILTER'

// task : make
export const ACTION_MAKE_TASK = 'MAKE_TASK'

// task : editing
export const ACTION_SET_EDITING_TASK = 'SET_EDITING_TASK'
export const ACTION_UNSET_EDITING_TASK = 'UNSET_EDITING_TASK'

// task : HTTP
export const ACTION_REQUEST_TASKS = 'ACTION_REQUEST_TASKS'
export const ACTION_RECEIVE_TASKS = 'ACTION_RECEIVE_TASKS'
export const ACTION_FETCH_TASKS = 'ACTION_FETCH_TASKS'

// task : list
export const ACTION_ADD_TASK = 'ADD_TASK'
export const ACTION_REFRESH_TASKS = 'REFRESH_TASKS'
export const ACTION_REMOVE_TASK = 'REMOVE_TASK'
export const ACTION_TOGGLE_TASK_COMPLETE = 'TOGGLE_TASK_COMPLETE'
export const ACTION_UPDATE_TASK = 'UPDATE_TASK'

// visibility filter
export const ACTION_SET_COMPLETE_FILTER = 'SET_COMPLETE_FILTER'

// --------------------------
// default states
// --------------------------

export const DEFAULT_EDITING_TASK_STATE = null
export const DEFAULT_TASK_LIST_STATE = []
export const DEFAULT_COMPLETE_FILTER_STATE = STATUS_FILTER_TYPE.ALL
export const DEFAULT_TEXT_FILTER_STATE = ''
