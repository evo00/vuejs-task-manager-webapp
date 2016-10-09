import * as ES6Utils from './es6-utils'

describe('ES6 Utils', () => {

    describe('iteratorToArray', () => {

        it('shouls return values of provided Iterator in an array', () => {

            let _map = new Map()

            _map.set('a', 'A')
            _map.set('b', 'B')

            let _result = ES6Utils.iteratorToArray(_map.keys())

            expect(_result.length).to.equal(2)
            expect(_result).contains('a')
            expect(_result).contains('b')

            _result = ES6Utils.iteratorToArray(_map.values())

            expect(_result.length).to.equal(2)
            expect(_result).contains('A')
            expect(_result).contains('B')
        })
    })
})