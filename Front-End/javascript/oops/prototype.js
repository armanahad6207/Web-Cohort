//  create constructor function

function Tofee( name , rs , flavor ,  type){


    this.name = name
    this.rupes = rs
    this.flavor = flavor
    this.type =type
}
// crete a prototype
Tofee.prototype.Desc = function(){
    console.log(`${this.name} is a ${this.type} with flavor ${this.flavor} avilable only and only  $${this.rupes}.`)
}

let t1 = new Tofee("pulse" , 1 ,"mangoZira", "sweet")

console.log(t1.Desc())