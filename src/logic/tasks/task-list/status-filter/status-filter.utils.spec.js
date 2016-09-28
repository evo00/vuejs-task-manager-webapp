import deepFreeze from 'deep-freeze'

// constants
import { TASK_STATUS } from 'src/data/models/crud/task.model'

// models
import { StatusFilterType } from 'src/data/models/basic/status-filter.model'
import { Task } from 'src/data/models/crud/task.model'

// SUT
import * as Utils from './status-filter.utils'

describe('complete filter utils', () => {

    describe('filterTasks', () => {

        it('should return a list of completed tasks', () => {

            const _tasks = [
                new Task({ server_id: 111, name: 'DDD', status: TASK_STATUS.COMPLETE }),
                new Task({ server_id: 555, name: 'AAA', status: TASK_STATUS.INCOMPLETE }),
                new Task({ server_id: 222, name: 'BBB', status: TASK_STATUS.COMPLETE })
            ]

            deepFreeze(_tasks)

            const _result = Utils.filterTasks(_tasks, StatusFilterType.COMPLETE)
            const _filtered_task_ids = _result.map((task) => task.server_id)

            expect(_filtered_task_ids).to.include(111)
            expect(_filtered_task_ids).to.not.include(555)
            expect(_filtered_task_ids).to.include(222)
        })
    })
})
