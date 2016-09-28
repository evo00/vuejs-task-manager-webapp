import { CRUDModel } from '../crud.model'

export const TASK_STATUS = {
    INCOMPLETE:     1, // 'task-status-incomplete',
    COMPLETE:       2, // 'task-status-complete',
    TRASH:          3 // 'task-status-trash'
}

export class Task extends CRUDModel {

    // -----------------------------
    // constructor
    // -----------------------------

    constructor (data) {
        super(data)

        // defaults
        this.text = ''
        this.status = TASK_STATUS.INCOMPLETE

        // assignments
        if (data.hasOwnProperty('text')) { this.text = data.text }
        if (data.hasOwnProperty('status')) { this.status = data.status }
    }
}
