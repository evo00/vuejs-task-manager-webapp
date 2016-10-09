import deepFreeze from 'deep-freeze'

// SUT
import { BasicModel } from './basic.model'

describe('basic model', () => {

    describe('constructor: property assignment', () => {

        it('should assign all properties in provided data arg', () => {

            class TestModel extends BasicModel {}

            let _data = {
                a_string: 'AAA',
                an_int: 123,
                a_bool: true,
                a_float: 0.02
            }

            deepFreeze(_data)

            let _test = new TestModel(_data)

            expect(_test.hasOwnProperty('a_string')).to.equal(true)
            expect(_test.hasOwnProperty('an_int')).to.equal(true)
            expect(_test.hasOwnProperty('a_bool')).to.equal(true)
            expect(_test.hasOwnProperty('a_float')).to.equal(true)

            expect(typeof _test.a_string).to.equal('string')
            expect(typeof _test.an_int).to.equal('number')
            expect(typeof _test.a_bool).to.equal('boolean')
            expect(typeof _test.a_float).to.equal('number')

            expect(_test.a_string).to.equal('AAA')
            expect(_test.an_int).to.equal(123)
            expect(_test.a_bool).to.equal(true)
            expect(_test.a_float).to.equal(0.02)
        })
    })

    describe('defaults', () => {

        it('should correctly set defaults', () => {

            class TestModel extends BasicModel {
                get defaults () {
                    return {
                        a_string: 'AAA',
                        an_int: 123,
                        a_bool: true,
                        a_float: 0.02
                    }
                }
            }

            let _defaults = TestModel.defaults

            expect(_defaults.hasOwnProperty('a_string')).to.equal(true)
            expect(_defaults.hasOwnProperty('an_int')).to.equal(true)
            expect(_defaults.hasOwnProperty('a_bool')).to.equal(true)
            expect(_defaults.hasOwnProperty('a_float')).to.equal(true)

            expect(typeof _defaults.a_string).to.equal('string')
            expect(typeof _defaults.an_int).to.equal('number')
            expect(typeof _defaults.a_bool).to.equal('boolean')
            expect(typeof _defaults.a_float).to.equal('number')

            expect(_defaults.a_string).to.equal('AAA')
            expect(_defaults.an_int).to.equal(123)
            expect(_defaults.a_bool).to.equal(true)
            expect(_defaults.a_float).to.equal(0.02)
        })

        it('should assign properties using defaults (if available) for all properties that are not provided in data arg', () => {

            class TestModel extends BasicModel {
                get defaults () {
                    return {
                        an_int: 321,
                        a_string: 'BBB'
                    }
                }
            }

            let _data = {
                a_string: 'AAA',
                a_bool: true,
                a_float: 0.02
            }

            deepFreeze(_data)

            let _test = new TestModel(_data)

            expect(_test.hasOwnProperty('a_string')).to.equal(true)
            expect(_test.hasOwnProperty('an_int')).to.equal(true)
            expect(_test.hasOwnProperty('a_bool')).to.equal(true)
            expect(_test.hasOwnProperty('a_float')).to.equal(true)

            expect(typeof _test.a_string).to.equal('string')
            expect(typeof _test.an_int).to.equal('number')
            expect(typeof _test.a_bool).to.equal('boolean')
            expect(typeof _test.a_float).to.equal('number')

            expect(_test.a_string).to.equal('AAA')
            expect(_test.an_int).to.equal(321)
            expect(_test.a_bool).to.equal(true)
            expect(_test.a_float).to.equal(0.02)

            console.log(Object.keys(_test))
        })
    })
    
    describe('methods', () => {
    
        describe('assignMany', () => {
        
            it('should assign all data provided to specified object', () => {

                class TestModel extends BasicModel {}

                let _data = {
                    a_string: 'AAA',
                    an_int: 123,
                    a_bool: true,
                    a_float: 0.02
                }

                deepFreeze(_data)

                let _obj = {}

                TestModel.assignMany(_obj, _data)

                expect(_obj.hasOwnProperty('a_string')).to.equal(true)
                expect(_obj.hasOwnProperty('an_int')).to.equal(true)
                expect(_obj.hasOwnProperty('a_bool')).to.equal(true)
                expect(_obj.hasOwnProperty('a_float')).to.equal(true)

                expect(typeof _obj.a_string).to.equal('string')
                expect(typeof _obj.an_int).to.equal('number')
                expect(typeof _obj.a_bool).to.equal('boolean')
                expect(typeof _obj.a_float).to.equal('number')

                expect(_obj.a_string).to.equal('AAA')
                expect(_obj.an_int).to.equal(123)
                expect(_obj.a_bool).to.equal(true)
                expect(_obj.a_float).to.equal(0.02)
            })
        })
    })

    describe('keys', () => {

        it('should only create object keys for provided data', () => {

            class TestModel extends BasicModel {}

            let _data = {
                a: 'A',
                b: true,
                f: 0.02
            }

            let _test = new TestModel(_data)

            let _result = Object.keys(_test)

            expect(_result.length).to.equal(3)
        })
    })
})
