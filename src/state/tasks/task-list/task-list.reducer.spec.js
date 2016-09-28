import deepFreeze from 'deep-freeze'

// constants
import { TASK_STATUS } from 'src/data/models/crud/task.model'

// models
import { Task } from 'src/data/models/crud/task.model'

// local: constants
import {
    ACTION_ADD_TASK,
    ACTION_RECEIVE_TASKS,
    ACTION_REMOVE_TASK,
    ACTION_UPDATE_TASK,
    ACTION_TOGGLE_TASK_COMPLETE
} from '../tasks.settings'

// SUT
import { taskListReducer } from './task-list.reducer'

describe('task list reducer', () => {

    it('should return before state by default', () => {

        const _state_before = null
        const _action = {}

        deepFreeze(_action)

        let _result = taskListReducer(_state_before, _action)

        expect(_result).to.be.null
    })

    describe('add task', () => {

        it('should add a task to the list', () => {

            const _state_before = []
            const _action = {
                type: ACTION_ADD_TASK, tasks: [], data: { text: 'AAAA' }
            }

            deepFreeze(_state_before)
            deepFreeze(_action)

            let _result = taskListReducer(_state_before, _action)

            expect(_result.length).to.equal(1)

        })
    })

    describe('receive tasks', () => {

        it('should transform received data to task list', () => {

            const _state_before = []
            const _action = {
                type: ACTION_RECEIVE_TASKS, data: [
                    { id: 1, text: 'AAA' },
                    { id: 2, text: 'BBB' }
                ]
            }

            deepFreeze(_state_before)
            deepFreeze(_action)

            let _result = taskListReducer(_state_before, _action)

            expect(_result.length).to.equal(2)
            expect(_result[0] instanceof Task).to.equal(true)
            expect(_result[1] instanceof Task).to.equal(true)

        })

        it('should assign a local_id for each item in received data', () => {

            const _state_before = []
            const _action = {
                type: ACTION_RECEIVE_TASKS, data: [
                    {id: 34, text: 'AAA'},
                    {id: 35, text: 'BBB'}
                ]
            }

            deepFreeze(_state_before)
            deepFreeze(_action)

            let _result = taskListReducer(_state_before, _action)

            expect(_result[0].local_id).to.equal(1)
            expect(_result[1].local_id).to.equal(2)

        })
    })

    describe('remove task', () => {

        it('should remove task from the list using provided unique_id', () => {

            let _task1 = new Task({ server_id: 1, local_id: 1, text: 'AAAA', status: TASK_STATUS.INCOMPLETE })
            let _task2 = new Task({ server_id: 2, local_id: 2, text: 'BBBB', status: TASK_STATUS.INCOMPLETE })
            let _task3 = new Task({ server_id: 3, local_id: 3, text: 'CCCC', status: TASK_STATUS.INCOMPLETE })

            const _state_before = [ _task1, _task2, _task3 ]
            const _expected = [ _task1, _task3 ]
            const _action = {
                type: ACTION_REMOVE_TASK, unique_id: _task2.unique_id
            }

            deepFreeze(_state_before)
            deepFreeze(_action)

            let _result = taskListReducer(_state_before, _action)

            expect(_result).to.deep.equal(_expected)

        })
    })

    describe('update task', () => {

        it('should update task data using provided unique_id and data', () => {

            let _task1 = new Task({ server_id: 1, local_id: 1, text: 'AAAA', status: TASK_STATUS.INCOMPLETE })
            let _task2 = new Task({ server_id: 2, local_id: 2, text: 'BBBB', status: TASK_STATUS.INCOMPLETE })

            const _state_before = [ _task1, _task2 ]
            const _action = {
                type: ACTION_UPDATE_TASK, unique_id: _task2.unique_id, data: {text: 'XXXX'}
            }

            deepFreeze(_state_before)
            deepFreeze(_action)
            deepFreeze(_action.data)

            let _result = taskListReducer(_state_before, _action)

            expect(_result[1].text).to.equal('XXXX')

        })
    })

    describe('toggle task complete', () => {

        it('should toggle task complete in the list using provided server_id', () => {

            let _task1 = new Task({ server_id: 1, local_id: 1, text: 'AAAA', status: TASK_STATUS.INCOMPLETE })
            let _task2 = new Task({ server_id: 2, local_id: 2, text: 'BBBB', status: TASK_STATUS.INCOMPLETE })

            const _state_before = [ _task1, _task2 ]
            const _action = {
                type: ACTION_TOGGLE_TASK_COMPLETE, unique_id: _task2.unique_id
            }

            deepFreeze(_state_before)
            deepFreeze(_action)

            let _result = taskListReducer(_state_before, _action)

            expect(_result[1].status).to.equal(TASK_STATUS.COMPLETE)

        })
    })
})
