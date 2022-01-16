/* 2. Napisati program koji racuna obime kruga, pravougaonika, trougla.
   Voditi racuna o ispravnosti unetih podataka:
   1) Stranice nijedne figure ne smeju biti negativne.
   2) Zbir svake dve stranice trougla je veci od trece stranice.   */

let a = 4;
let b = 5;
let c = 6;
let r = 4;

if(a<=0 || b<=0 || c<=0 || r<=0){
    console.log('Unete stranice moraju biti pozitivne')
}else if(a+b<=c || a+c<=b || b+c<=a){
    console.log('Zbir dve stranice trougla mora biti veci od trece stranice')
}else{
    console.log(`Obim kvadrata iznosi ${4*a}cm.`)
    console.log(`Obim pravougaonika iznosi ${2*a+2*b}cm.`)
    console.log(`Obim kruga iznosi ${2*r*Math.PI}cm.`)
};