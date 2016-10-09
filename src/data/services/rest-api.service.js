// response format follows JSend specs
// https://labs.omniti.com/labs/jsend

// uses fetch API for HTTP requests
// https://www.sitepoint.com/introduction-to-the-fetch-api/

export function index (resource_endpoint, config) {
    // let _url = 'http://localhost:8000/api/' + resource_endpoint
    let _url = 'http://pj.nr6.l5-task-manager-api/api/users/1/tasks'
    // let _url = 'http://localhost:8000/api/' + resource_endpoint
    return this.request('GET', _url)
}

export function request (method, url, config) {

    return new Promise((resolve, reject) => {

        // use when you add auth
        // let _token = '.eyJzdWIiOiIxIiwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0OjgwMDBcL2FwaVwvbG9naW4iLCJpYXQiOjE0NzUwMTI4NTAsImV4cCI6MTQ3NTAxNjQ1MCwibmJmIjoxNDc1MDEyODUwLCJqdGkiOiJiY2I4NzNhZTdkNGEzYTAxZjUxMzc4N2I5OGM5Y2JlYSJ9.PsYO9xEoEcY0agPazQuGRjvgM-GsPagB0j0Gk188xFg'
        // let headers = new window.Headers({
        //     'Content-Type': 'application/json',
        //     'Authorization': 'Bearer ' + _token
        // })
        let headers = new window.Headers({
            'Content-Type': 'application/json'
        })
        let cache = 'reload'

        let _request_config = { method, headers, cache }
        let _request = new window.Request(url, _request_config)

        window.fetch(_request).then(
            (response) => {

                console.log('ok: ' + response.ok)
                console.log('status: ' + response.status)
                console.log('statusText: ' + response.statusText)

                response.json().then(
                    (body) => {

                        // TODO: validate response
                        // TODO: parse response

                        console.log(body)

                        if (!response.ok) {
                            return reject(body.error)
                        }

                        resolve(body.data)
                    },
                    (message) => {
                        reject('JSON response parsing failed')
                    }
                )
            },
            (message) => {
                console.log('DDD')
                reject('Fetch failed')
            }
        )
    })
}
