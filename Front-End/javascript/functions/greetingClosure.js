// creating a function with a perset greeting(using clouser)


function greeting( greet){

    return function(name){
        console.log(`${greet},${name}`)
    }

}

let greetHeloo =greeting("heloo")

greetHeloo("arman")
greetHeloo("Adi")
greetHeloo("anil")
