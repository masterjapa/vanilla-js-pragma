'use strict'

function makeElement(type, props, ...children) {
    return {
        type,
        props,
        children
    }
}

export default makeElement