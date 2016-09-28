import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import { createStore, combineReducers, applyMiddleware } from 'redux'

// local
import { taskListReducer } from 'src/state/tasks/task-list/task-list.reducer'
import { editingTaskReducer } from 'src/state/tasks/task-editor/editing-task.reducer'
import { statusFilterReducer } from 'src/state/tasks/task-list/status-filter/status-filter.reducer'
import { textFilterReducer } from 'src/state/tasks/task-list/text-filter/text-filter.reducer'

const reducer = combineReducers({
    tasks: taskListReducer,
    editing_task: editingTaskReducer,
    tasks_status_filter: statusFilterReducer,
    tasks_text_filter: textFilterReducer
})

const loggerMiddleware = createLogger()

export class Store {

    static get store () {
        if (typeof Store._store === 'undefined') {
            Store._store = createStore(
                reducer,
                applyMiddleware(
                    thunkMiddleware, // lets us dispatch () functions
                    loggerMiddleware // neat middleware that logs actions
                )
            )
        }
        return Store._store
    }
}
