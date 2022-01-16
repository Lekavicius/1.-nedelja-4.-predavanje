// 3. Na osnovu dana u nedelji (zadat brojem od 1 do 7) napisati da li je vikend. Ako se zada broj 6 ili 7, ispisati true (subota, nedelja), u suprotnom false.

let dan = 4

function vikend(dan){
    if(dan===6 || dan===7){
        return true
    }
    else{
        return false
    }
}

console.log(vikend(dan))