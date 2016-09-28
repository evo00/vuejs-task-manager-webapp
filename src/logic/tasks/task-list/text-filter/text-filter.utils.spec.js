import deepFreeze from 'deep-freeze'

// models
import { Task } from 'src/data/models/crud/task.model'

// SUT
import * as Utils from './text-filter.utils'

describe('complete filter utils', () => {

    describe('filterTasks', () => {

        it('should return tasks whose text contain text term', () => {

            const _tasks = [
                new Task({ server_id: 11, text: 'aaa' }),
                new Task({ server_id: 22, text: 'aaab' }),
                new Task({ server_id: 33, text: 'baaa' }),
                new Task({ server_id: 44, text: 'bbbb' })
            ]
            const _text_term = 'aa'

                deepFreeze(_tasks)

            let _result = Utils.filterTasks(_tasks, _text_term)
            let _ids = _result.map((item) => item.server_id )

            expect(_ids).to.include(11)
            expect(_ids).to.include(22)
            expect(_ids).to.include(33)
        })

        it('should be case insensitive', () => {

            const _tasks = [
                new Task({ server_id: 11, text: 'AAA' }),
                new Task({ server_id: 22, text: 'aaa' })
            ]
            const _text_term = 'aa'

            deepFreeze(_tasks)

            let _result = Utils.filterTasks(_tasks, _text_term)
            let _ids = _result.map((item) => item.server_id )

            expect(_ids).to.include(11)
            expect(_ids).to.include(22)
        })
    })
})
