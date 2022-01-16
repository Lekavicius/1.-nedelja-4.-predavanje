// 1. Za uneta tri broja ispisati najmanji / najveci.

let x = 9;
let y = 15; 
let z = 15;

/*
if(x>y && x>z){
    console.log(`Najveci broj je broj ${x}.`)
}else if(y>x && y>z){
    console.log(`Najveci broj je broj ${y}.`)
}else if(z>x && z>y){
    console.log(`Najveci broj je broj ${z}.`)
}else{
    console.log('Dva ili vise brojeva su jednaki.')
}   */

function najveciBroj(x,y,z){
    if(x>y && x>z){
        return `Najveci broj je broj ${x}.`
    }else if(y>x && y>z){
        return `Najveci broj je broj ${y}.`
    }else if(z>x && z>y){
        return `Najveci broj je broj ${z}.`
    }else{
        return 'Dva ili vise brojeva su jednaki.'
    }
}

console.log(najveciBroj(x,y,z))
