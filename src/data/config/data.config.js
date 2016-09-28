// services
import * as RestApiService from 'src/data/services/rest-api.service'

// local: constants
import {
    DATA_SOURCE_LOCAL,
    DATA_SOURCE_REST_API
} from '../constants/data.constants'

export let data_source = DATA_SOURCE_REST_API
export let restApiService = RestApiService

export function nameSingularTransform (class_name) {
    return class_name.toLowerCase()
}

export function namePluralTransform (name_singular) {
    return name_singular + 's'
}
