import deepFreeze from 'deep-freeze'

// models
import { StatusFilterType } from 'src/data/models/basic/status-filter.model'

// local: constants
import { ACTION_SET_COMPLETE_FILTER } from '../../tasks.settings'

// SUT
import { statusFilterReducer } from './status-filter.reducer'

describe('complete filter reducer', () => {

    it('should return before state by default', () => {

        const _state_before = null
        const _action = {}

        deepFreeze(_action)

        let _result = statusFilterReducer(_state_before, _action)

        expect(_result).to.be.null
    })

    it('should set complete filter', () => {

        const _state_before = StatusFilterType.ALL
        const _expected = StatusFilterType.COMPLETE
        const _action = {
            type: ACTION_SET_COMPLETE_FILTER,
            value: StatusFilterType.COMPLETE
        }

        deepFreeze(_action)

        let _result = statusFilterReducer(_state_before, _action)

        expect(_result).to.equal(_expected)
    })
})
