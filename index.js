function receivesAFunction (callback) {
    callback(); //parameter being called inside a fx
}


function returnsANamedFunction () {
    return function chocoBoy() {
 // returning a fx w/in a fx
    }
}

function returnsAnAnonymousFunction () {
    return function () {
        
    };
}