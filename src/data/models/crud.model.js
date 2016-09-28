// local: settings
import {
    DATA_SOURCE_LOCAL,
    DATA_SOURCE_REST_API
} from '../constants/data.constants'
import * as Config from '../config/data.config'

// class: settings
export const UNIQUE_ID_SERVER_KEY = 's'
export const UNIQUE_ID_LOCAL_KEY = 'l'

export const RESPONSE_ERROR_MESSAGE_INVALID_DATA_SOURCE = 'data_source must match either DATA_SOURCE_LOCAL or DATA_SOURCE_SERVER in src/data/settings/app.settings'
export const RESPONSE_ERROR_MESSAGE_NO_DATA_SOURCE = 'data_source must be set before calling CRUD methods'
export const RESPONSE_ERROR_MESSAGE_NO_LOCAL_STORAGE_SERVICE = 'localStorageService must be set before calling CRUD methods with data_source set to local'
export const RESPONSE_ERROR_MESSAGE_NO_REST_API_SERVICE = 'restApiService must be set before calling CRUD methods with data_source set to REST API'

export class CRUDModel {

    // -----------------------------
    // constructor
    // -----------------------------

    constructor (data) {

        // defaults
        this.server_id = null
        this.local_id = null

        // assignments
        if (data.hasOwnProperty('server_id')) {
            this.server_id = data.server_id
        } else if (data.hasOwnProperty('id')) {
            this.server_id = data.id
        }
        if (data.hasOwnProperty('local_id')) {
            this.local_id = data.local_id
        }
    }

    // -----------------------------
    // static get / set
    // -----------------------------

    static get name_singular () {
        if (this.name === 'CRUDModel') {
            return null
        }
        return typeof Config.nameSingularTransform !== 'undefined' ? Config.nameSingularTransform(this.name) : null
    }

    static get name_plural () {
        if (this.name === 'CRUDModel') {
            return null
        }
        return typeof Config.namePluralTransform !== 'undefined' ? Config.namePluralTransform(this.name_singular) : null
    }

    // -----------------------------
    // get / set
    // -----------------------------

    get unique_id () {
        return `${UNIQUE_ID_SERVER_KEY}${this.server_id}${UNIQUE_ID_LOCAL_KEY}${this.local_id}`
    }

    // -----------------------------
    // CRUD
    // -----------------------------

    static index (config = {}) {
        return this.request('index', Object.assign({}, { config }))
    }

    static view (id, config = {}) {
        return this.request('view', Object.assign({}, { id, config }))
    }

    static add (data, config = {}) {
        return this.request('add', Object.assign({}, { data, config }))
    }

    static edit (id, data, config = {}) {
        return this.request('edit', Object.assign({}, { id, data, config }))
    }

    static delete (id, config = {}) {
        return this.request('delete', Object.assign({}, { id, config }))
    }

    // -----------------------------
    // request
    // -----------------------------

    static request (action, options = {}) {
        return new Promise((resolve, reject) => {

            if (typeof Config.data_source === 'undefined') {
                return reject(RESPONSE_ERROR_MESSAGE_NO_DATA_SOURCE)
            }

            let _resource_endpoint = this.name_plural

            switch (Config.data_source) {
                case DATA_SOURCE_LOCAL:

                    if (typeof Config.localStorageService === 'undefined') {
                        return reject(RESPONSE_ERROR_MESSAGE_NO_LOCAL_STORAGE_SERVICE)
                    }

                    return Config.localStorageService[ action ](_resource_endpoint, options)
                        .then(response => resolve(response), reject)

                case DATA_SOURCE_REST_API:

                    if (typeof Config.restApiService === 'undefined') {
                        return reject(RESPONSE_ERROR_MESSAGE_NO_REST_API_SERVICE)
                    }

                    return Config.restApiService[ action ](_resource_endpoint, options)
                        .then(response => resolve(response), reject)

                default:
                    return reject(RESPONSE_ERROR_MESSAGE_INVALID_DATA_SOURCE)
            }
        })
    }
}

