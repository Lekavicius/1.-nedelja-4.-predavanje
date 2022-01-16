// Scope je ogranicen prostor na kome moze da se vidi neka promenljiva, tj. prostor na kom je promenljiva dostupna.

let x = 5; // ovo je globalni scope. Ova promenljiva je vidljiva svuda.
var y = 7;
console.log(x,y); // ispisace i x i y.

{
    console.log(x,y);  // opet ce ispisati obe promenljive. Jer ako ih nema u ovom bloku, trazice ih u scope-u iznad.
}

{
    let x = 2;  // lokalni scope.
    var z = 4;
    let c = 9;
    console.log(x,y); // ispisace 2,7...jer prvo trazi u svom lokalnom scope-u.
}

console.log(x,y,z);  // 5,7,4
// console.log(c); // c is not defined. 

{
    var t
}
console.log(t) // undefined. nismo promenljivoj t dodelili nikakvu vrednost.  

{
    let a = 2;
    let b = 5;
    {
        let a = 4;
        let c = 5;
        console.log(a,c); // 4,5
    }
    console.log(a,b); // 2,5
    console.log(a,b,c);  // c is not defined
}