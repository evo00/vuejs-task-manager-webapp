// models
import { STATUS_FILTER_TYPE } from 'src/data/models/basic/status-filter.model'

// local: constants
import {
    ACTION_SET_COMPLETE_FILTER,
    DEFAULT_COMPLETE_FILTER_STATE
} from '../../tasks.settings'

export function statusFilterReducer (state = DEFAULT_COMPLETE_FILTER_STATE, action) {

    switch (action.type) {

        case ACTION_SET_COMPLETE_FILTER:
            return action.value

        default:
            return state
    }
}
