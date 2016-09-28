// response format follows JSend specs
// https://labs.omniti.com/labs/jsend

export function index (endpoint, config) {
    return new Promise((resolve) => {

        let _data = [
            { id: 1, text: 'AAA' },
            { id: 2, text: 'BBB' }
        ]

        let _response = {
            status: 'success',
            data: {
                tasks: _data
            }
        }

        resolve(_response)
    })
}
