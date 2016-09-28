// // SUT
// import * as Service from './rest-api.service'
//
// describe('REST API service', () => {
//
//     describe('index', () => {
//
//         it('should return object formatted according to JSend specs', (done) => {
//
//             let _endpoint = "AAA"
//             let _config = {}
//             Service.index(_endpoint, _config).then(
//                 (_result) => {
//                     expect(_result).to.have.any.keys('status', 'tasks')
//                     expect(_result.status).to.equal('success')
//                     done()
//                 },
//                 (message) => {
//                     console.error(message);
//                     done()
//                 }
//             )
//         })
//     })
// })
