import * as ES6Utils from '../utils/es6-utils'

export class MapModel extends Map {

    // -----------------------------
    // constructor
    // -----------------------------

    constructor (data) {

        super()

        MapModel.setMany(this, data, this.constructor._defaults)
    }

    // -----------------------------
    // static get / set
    // -----------------------------

    static get defaults () {

        if (typeof this._defaults === 'undefined') {
            this._defaults = new MapModel()
        }

        return this._defaults
    }

    static set defaults (value) {

        if (value instanceof MapModel) {
            this._defaults = value
            return
        }

        if (typeof this._defaults === 'undefined') {
            this._defaults = new MapModel(value)
            return
        }

        MapModel.setMany(this._defaults, value)
    }

    // -----------------------------
    // static methods
    // -----------------------------

    static setMany (obj, data, defaults = null) {

        if (defaults !== null) {

            if (!(defaults instanceof MapModel)) {
                throw Error('invalid defaults param')
            }

            defaults.forEach((key, value) => {
                obj.set(key, value)
            })
        }

        Object.keys(data).map((key) => {
            obj.set(key, data[ key ])
        })
    }

    // -----------------------------
    // methods
    // -----------------------------

    keys (as_array = false) {
        if (as_array) {
            return ES6Utils.iteratorToArray(super.keys())
        }
        return super.keys()
    }

    values (as_array = false) {
        if (as_array) {
            return ES6Utils.iteratorToArray(super.values())
        }
        return super.values()
    }
}
