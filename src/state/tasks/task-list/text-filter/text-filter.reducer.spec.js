import deepFreeze from 'deep-freeze'

// local: constants
import { ACTION_SET_TEXT_FILTER } from '../../tasks.settings'

// SUT
import { textFilterReducer } from './text-filter.reducer'

describe('text filter reducer', () => {

    it('should return before state by default', () => {

        const _state_before = null
        const _action = {}

        deepFreeze(_action)

        let _result = textFilterReducer(_state_before, _action)

        expect(_result).to.be.null
    })

    it('should set text filter value', () => {

        const _state_before = ''
        const _expected = 'AAA'
        const _action = {
            type: ACTION_SET_TEXT_FILTER,
            value: 'AAA'
        }

        deepFreeze(_action)

        let _result = textFilterReducer(_state_before, _action)

        expect(_result).to.equal(_expected)
    })
})
