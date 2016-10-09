export function iteratorToArray (map_keys, result = []) {

    let _next = map_keys.next()

    if (_next.done) {
        return result
    }

    result = [ ...result, _next.value ]

    return iteratorToArray(map_keys, result)
}
