"use strict";
let logAndReturn = (value) => {
    return value;
};
const num = logAndReturn(4);
const string = logAndReturn('fsdd');
function addValue(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b; // Assuming T can be a number
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b; // Assuming T can be a string
    }
    else if (typeof a === 'object' && typeof b === 'object') {
        return { ...a, ...b };
    }
    else {
        return { a, b };
    }
}
