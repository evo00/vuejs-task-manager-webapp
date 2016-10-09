import deepFreeze from 'deep-freeze'

// SUT
import { MapModel } from './map.model'

describe('map model', () => {

    describe('constructor', () => {

        it('should create a new Map instance', () => {

            class TestModel extends MapModel {}

            let _test = new TestModel({})

            expect(_test instanceof Map).to.equal(true)
        })
    })

    describe('constructor: property assignment', () => {

        it('should set all properties in provided data arg', () => {

            class TestModel extends MapModel {}

            let _data = {
                a_string: 'AAA',
                an_int: 123,
                a_bool: true,
                a_float: 0.02
            }

            deepFreeze(_data)

            let _test = new TestModel(_data)

            expect(_test.size).to.equal(4)

            expect(_test.has('a_string')).to.equal(true)
            expect(_test.has('an_int')).to.equal(true)
            expect(_test.has('a_bool')).to.equal(true)
            expect(_test.has('a_float')).to.equal(true)

            expect(typeof _test.get('a_string')).to.equal('string')
            expect(typeof _test.get('an_int')).to.equal('number')
            expect(typeof _test.get('a_bool')).to.equal('boolean')
            expect(typeof _test.get('a_float')).to.equal('number')

            expect(_test.get('a_string')).to.equal('AAA')
            expect(_test.get('an_int')).to.equal(123)
            expect(_test.get('a_bool')).to.equal(true)
            expect(_test.get('a_float')).to.equal(0.02)
        })
    })

    describe('constructor: defaults', () => {

        it('should correctly set defaults', () => {

            class TestModel extends MapModel {}

            TestModel.defaults = {
                a_string: 'AAA',
                an_int: 123,
                a_bool: true,
                a_float: 0.02
            }

            expect(TestModel.defaults.size).to.equal(4)

            expect(TestModel.defaults.has('a_string')).to.equal(true)
            expect(TestModel.defaults.has('an_int')).to.equal(true)
            expect(TestModel.defaults.has('a_bool')).to.equal(true)
            expect(TestModel.defaults.has('a_float')).to.equal(true)

            expect(typeof TestModel.defaults.get('a_string')).to.equal('string')
            expect(typeof TestModel.defaults.get('an_int')).to.equal('number')
            expect(typeof TestModel.defaults.get('a_bool')).to.equal('boolean')
            expect(typeof TestModel.defaults.get('a_float')).to.equal('number')

            expect(TestModel.defaults.get('a_string')).to.equal('AAA')
            expect(TestModel.defaults.get('an_int')).to.equal(123)
            expect(TestModel.defaults.get('a_bool')).to.equal(true)
            expect(TestModel.defaults.get('a_float')).to.equal(0.02)
        })

        it('should set defaults (if available) for all properties that are not provided in data arg', () => {

            class TestModel extends MapModel {}

            let _data = {
                a_string: 'AAA',
                a_bool: true,
                a_float: 0.02
            }

            deepFreeze(_data)

            TestModel.defaults = {
                'an_int': 321,
                'a_string': 'AAA'
            }

            let _test = new TestModel(_data)

            // console.log(_test.keys(true))

            // _aaa.set('AAA', 'BBB')
            //
            // console.log(_aaa.keys())

            // expect(_test.size).to.equal(4)
            //
            // expect(_test.has('a_string')).to.equal(true)
            // expect(_test.has('an_int')).to.equal(true)
            // expect(_test.has('a_bool')).to.equal(true)
            // expect(_test.has('a_float')).to.equal(true)
            //
            // expect(typeof _test.get('a_string')).to.equal('string')
            // expect(typeof _test.get('an_int')).to.equal('number')
            // expect(typeof _test.get('a_bool')).to.equal('boolean')
            // expect(typeof _test.get('a_float')).to.equal('number')
            //
            // expect(_test.get('a_string')).to.equal('AAA')
            // expect(_test.get('an_int')).to.equal(321)
            // expect(_test.get('a_bool')).to.equal(true)
            // expect(_test.get('a_float')).to.equal(0.02)
        })
    })


    describe('properties', () => {

        it('should ...', () => {

            class TestModel extends MapModel {}

            let _data = {
                a: 'A',
                b: true,
                f: 0.02
            }

            let _test = new TestModel(_data)

            expect(_test.get('a')).to.equal('A')

        })
    })

    describe('Map overrides: keys', () => {

        it('should return normal iterator when keys method is called with no args', () => {

            class TestModel extends MapModel {}

            let _data = {
                a: 'A',
                b: true,
                f: 0.02
            }

            let _test = new TestModel(_data)

            let _result = _test.keys()

            expect(typeof _result.next === 'function').to.equal(true)
        })

        it('should return array of model keys when keys method is called with true arg', () => {

            class TestModel extends MapModel {}

            let _data = {
                a: 'A',
                b: true,
                f: 0.02
            }                                                                                                                                                                                                                                                               

            let _test = new TestModel(_data)

            let _result = _test.keys(true)

            expect(_result.hasOwnProperty('length')).to.equal(true)
            expect(_result.length).to.equal(3)

            expect(_result).contains('a')
            expect(_result).contains('b')
            expect(_result).contains('f')
        })
    })

    describe('Map overrides: values', () => {

        it('should return normal iterator when values method is called with no args', () => {

            class TestModel extends MapModel {}

            let _data = {
                a: 'A',
                b: true,
                f: 0.02
            }

            let _test = new TestModel(_data)

            let _result = _test.values()

            expect(typeof _result.next === 'function').to.equal(true)
        })

        it('should return array of model property values when values method is called with true arg', () => {

            class TestModel extends MapModel {}

            let _data = {
                a: 'A',
                b: true,
                f: 0.02
            }

            let _test = new TestModel(_data)

            let _result = _test.values(true)

            expect(_result.hasOwnProperty('length')).to.equal(true)
            expect(_result.length).to.equal(3)

            expect(_result).contains('A')
            expect(_result).contains(true)
            expect(_result).contains(0.02)
        })
    })
})
