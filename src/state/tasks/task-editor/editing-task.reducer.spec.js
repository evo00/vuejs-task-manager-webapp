import deepFreeze from 'deep-freeze'

// models
import { Task } from 'src/data/models/crud/task.model'

// local: constants
import {
    ACTION_MAKE_TASK,
    ACTION_SET_EDITING_TASK,
    ACTION_UNSET_EDITING_TASK
} from '../tasks.settings'

// SUT
import { editingTaskReducer } from './editing-task.reducer'

describe('editing task id reducer', () => {

    it('should return before state by default', () => {

        const _state_before = null
        const _action = {}

        deepFreeze(_action)

        let _result = editingTaskReducer(_state_before, _action)

        expect(_result).to.be.null
    })

    it('should return new task', () => {

        const _state_before = null
        const _expected = new Task({})
        const _action = {
            type: ACTION_MAKE_TASK
        }

        deepFreeze(_action)

        let _result = editingTaskReducer(_state_before, _action)

        expect(_result).to.include(_expected)
    })

    it('should set editing task', () => {

        const _data = { server_id: 111, text: 'AAA' }

        deepFreeze(_data)

        const _state_before = null
        const _expected = new Task(_data)
        const _action = {
            type: ACTION_SET_EDITING_TASK,
            data: _data
        }

        deepFreeze(_action)

        let _result = editingTaskReducer(_state_before, _action)

        expect(_result).to.include(_expected)
    })

    it('should unset editing task', () => {

        const _data = { server_id: 111, text: 'AAA' }

        deepFreeze(_data)

        const _state_before = new Task(_data)
        const _action = {
            type: ACTION_UNSET_EDITING_TASK
        }

        deepFreeze(_action)

        let _result = editingTaskReducer(_state_before, _action)

        expect(_result).to.be.null
    })
})
