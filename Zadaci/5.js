// 5. Dopuniti 4. zadatak kolicinom novca i ispisati racun (ako nema dovoljno novca, ispisati poruku).

let kolicina = 1300;
let cena = 200;
let kolicinaNovca = 260;
let cenaArtikla = kolicina/1000*cena


function racun(kolicinaNovca,cenaArtikla){
    if(kolicinaNovca<cenaArtikla){
        return `Nemate dovoljno novca. Fali Vam jos ${cenaArtikla-kolicinaNovca} RSD.`
    }
    else if(kolicinaNovca==cenaArtikla){
        return 'Platili ste tacan iznos.'
    }
    else{
        return `Vas kusur iznosi ${kolicinaNovca-cenaArtikla} RSD.`
    }
}

console.log(racun(kolicinaNovca,cenaArtikla))