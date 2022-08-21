function receivesAFunction(callback){
    return callback();
}
// function returnsANamedFunction(){
    
// }
let returnsANamedFunction = () => {
    return function something(){
        return "something else"
    };
}

let returnsAnAnonymousFunction = () => {
    return function(){
        return "something wonderful";
    }
}