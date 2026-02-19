function hello(callback){
    console.log("Hello");
    callback();
}

function bye(){
    console.log("byee")
}

hello(bye)