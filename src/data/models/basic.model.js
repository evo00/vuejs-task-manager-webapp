import * as ES6Utils from '../utils/es6-utils'

export class BasicModel {

    // -----------------------------
    // constructor
    // -----------------------------

    constructor (data) {
        console.log(this.defaults)
        BasicModel.assignMany(this, data, this.defaults)

        // for (let prop in data) {
        //     console.log(prop, data)
        // }

        // // assignments
        // let _a = new Map([{'aaa': 'AAA'}])
        // // _a.set('aaa', data.a_string)
        // // console.log(_a.has('aaa'));
        // // console.log(_a.get('aaa'));
        // // console.log(_a.keys());
        // // console.log(_a.size);
        // // console.log(_a.values());
        // _a.forEach((prop, value) => {
        //     console.log(prop + ' : ' + value)
        // })
        // if (data.hasOwnProperty('server_id')) {
        //     this.server_id = data.server_id
        // } else if (data.hasOwnProperty('id')) {
        //     this.server_id = data.id
        // }
        // if (data.hasOwnProperfty('local_id')) {
        //     this.local_id = data.local_id
        // }
    }

    // -----------------------------
    // static get / set
    // -----------------------------

    static get defaults () {

        if (typeof this._defaults === 'undefined') {
            this._defaults = new BasicModel()
        }

        return this._defaults
    }

    static set defaults (value) {

        if (value instanceof BasicModel) {
            this._defaults = value
            return
        }

        if (typeof this._defaults === 'undefined') {
            this._defaults = new BasicModel(value)
            return
        }

        BasicModel.assignMany(this._defaults, value)
    }

    // -----------------------------
    // static methods
    // -----------------------------

    static assignMany (obj, data, defaults = null) {

        if (defaults !== null) {

            if (!(defaults instanceof BasicModel)) {
                throw Error('invalid defaults param')
            }

            Object.keys(defaults).map((key) => {
                obj[ key ] = defaults[ key ]
            })
        }

        Object.keys(data).map((key) => {
            obj[ key ] = data[ key ]
        })
    }

    // -----------------------------
    // methods
    // -----------------------------

    // keys (as_array = false) {
    //     if (as_array) {
    //         return ES6Utils.iteratorToArray(super.keys())
    //     }
    //     return super.keys()
    // }
    //
    // values (as_array = false) {
    //     if (as_array) {
    //         return ES6Utils.iteratorToArray(super.values())
    //     }
    //     return super.values()
    // }
}
