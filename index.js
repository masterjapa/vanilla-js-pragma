'use strict'

function makeElement(type, props, ...children) {
    if(typeof type === 'function'){
        return makeElement(type())
    }
    return {
        type,
        props,
        children
    }
}

export default makeElement