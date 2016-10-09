import deepFreeze from 'deep-freeze'

// local: config
import * as Config from '../config/data.config'

// local: models
import {
    UNIQUE_ID_SERVER_KEY,
    UNIQUE_ID_LOCAL_KEY,
    RESPONSE_ERROR_MESSAGE_NO_DATA_SERVICE
} from './crud.model'

// SUT
import { CRUDModel } from './crud.model'

describe('CRUD model', () => {

    beforeEach(() => {
        Config.nameSingularTransform = undefined
        Config.namePluralTransform = undefined
        Config.responseTransformer = undefined
        Config.dataService = undefined
    })

    describe('CRUD', () => {

        describe('index', () => {

            it('should reject with error message if data service is not set in data config', (done) => {

                class TestModel extends CRUDModel {}

                TestModel.index().then(
                    () => {},
                    (message) => {
                        expect(message).to.equal(RESPONSE_ERROR_MESSAGE_NO_DATA_SERVICE)
                        done()
                    }
                )
            })

            it('should call index on data service if set in data config and resolve with result', (done) => {

                class TestModel extends CRUDModel {}

                Config.nameSingularTransform = () => 'test'
                Config.namePluralTransform = () => 'tests'
                Config.dataService = {
                    index: () => Promise.resolve('AAA')
                }

                let _request_config = { a:'A' }

                let _spy = sinon.spy(Config.dataService, 'index')

                TestModel.index(_request_config).then(
                    (response) => {

                        // should call index on REST API service

                        let _args = [ 'tests', { config: _request_config } ]
                        _spy.should.have.been.calledWith(..._args)

                        // should resolve with result

                        expect(response).to.equal('AAA')

                        done()
                    },
                    () => {}
                )
            })
        })
    })

    describe('properties (class)', () => {

        describe('name_singular', () => {

            it('should return null if accessed via CRUD model', () => {
    
                let _result = CRUDModel.name_singular

                expect(_result).to.be.null
            })

            it('should return child model value if explicitly set', () => {

                class TestModel extends CRUDModel {
                    static get name_singular() {
                        return 'AAA'
                    }
                }

                let _result = TestModel.name_singular

                expect(_result).to.equal('AAA')
            })

            describe('should return result of data config transform function', () => {

                it('should return null if no name singular transform function set in Data Config', () => {

                    class TestModel extends CRUDModel {}

                    let _result = TestModel.name_singular

                    expect(_result).to.be.null
                })

                it('should call name singular transform function with class name and return the result, if set in Data Config', () => {

                    Config.nameSingularTransform = (class_name) => {
                        return 'BBB'
                    }

                    let _spy = sinon.spy(Config, 'nameSingularTransform')

                    class TestModel extends CRUDModel {}

                    let _result = TestModel.name_singular

                    expect(_result).to.equal('BBB')

                    let _args = [ 'TestModel' ]
                    _spy.should.have.been.calledWith(..._args)
                })
            })
        })

        describe('name_plural', () => {

            it('should return null if accessed via CRUD model', () => {

                let _result = CRUDModel.name_plural

                expect(_result).to.be.null
            })

            it('should return child model value if explicitly set', () => {

                class TestModel extends CRUDModel {
                    static get name_plural() {
                        return 'AAA'
                    }
                }

                let _result = TestModel.name_plural

                expect(_result).to.equal('AAA')
            })

            describe('should return result of data config transform function', () => {

                it('should return null if no name plural transform function set in Data Config', () => {

                    class TestModel extends CRUDModel {}

                    let _result = TestModel.name_plural

                    expect(_result).to.be.null
                })

                it('should call name plural transform function with class name and return the result, if set in Data Config', () => {

                    Config.nameSingularTransform = (class_name) => {
                        return 'BBB'
                    }
                    Config.namePluralTransform = (name_singular) => {
                        return 'CCC'
                    }

                    let _spy = sinon.spy(Config, 'namePluralTransform')

                    class TestModel extends CRUDModel {}

                    let _result = TestModel.name_plural

                    expect(_result).to.equal('CCC')

                    let _args = [ 'BBB' ]
                    _spy.should.have.been.calledWith(..._args)
                })
            })
        })
    })

    describe('properties (instance)', () => {

        describe('unique_id', () => {

            it('should return a unique id key by combining server and local ids', () => {

                class TestModel extends CRUDModel {
                    static get name_plural() {
                        return 'AAA'
                    }
                }

                let server_id = 111
                let local_id = 222
                let _test_model = new TestModel({ server_id, local_id })

                let _result = _test_model.unique_id

                expect(_result).to.equal(`${UNIQUE_ID_SERVER_KEY}${server_id}${UNIQUE_ID_LOCAL_KEY}${local_id}`)
            })
        })
    })
})
