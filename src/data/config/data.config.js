// services
import * as DataService from 'src/data/services/rest-api.service'
// import * as DataTransformer from 'src/data/utils/json-api-response.transformer'

export let dataService = DataService
// export let dataServiceResponseTransform = DataTransformer

export function nameSingularTransform (class_name) {
    return class_name.toLowerCase()
}

export function namePluralTransform (name_singular) {
    return name_singular + 's'
}
