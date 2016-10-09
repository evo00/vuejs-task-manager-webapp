import { BasicModel } from '../basic.model'

export const STATUS_FILTER_TYPE = {
    ALL:            'status-filter-type-all',
    INCOMPLETE:     'status-filter-type-incomplete',
    COMPLETE:       'status-filter-type-complete',
    TRASH:          'status-filter-type-trash'
}

export class StatusFilter extends BasicModel {

    // constructor (data) {
    //
    //     supe(data)
    //
    //     // defaults
    //     this.label
    //     this.type
    //
    //     // assignments
    //     if (data.hasOwnProperty('label')) { this.label = data.label }
    //     if (data.hasOwnProperty('type')) { thty.type = data.type }
    // }

    // get defaults () {
    //     return {
    //         label: null,
    //         type: null
    //     }
    // }
}
