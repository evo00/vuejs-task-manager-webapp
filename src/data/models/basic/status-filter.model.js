export const StatusFilterType = {
    ALL:            'status-filter-type-all',
    INCOMPLETE:     'status-filter-type-incomplete',
    COMPLETE:       'status-filter-type-complete',
    TRASH:          'status-filter-type-trash'
}

export class StatusFilter {
    constructor (data) {

        // defaults
        this.label
        this.type

        // assignments
        if (data.hasOwnProperty('label')) { this.label = data.label }
        if (data.hasOwnProperty('type')) { this.type = data.type }
    }
}
