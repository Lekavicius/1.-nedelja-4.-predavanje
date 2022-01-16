// I'm a broken string

//console.log('I'm a broken string')

// 1. resenje: 
console.log("I'm a broken string")   // ali ovo nije idealno resenje, jer bi se pojavila greska ako npr. imamo neki citat unutar stringa ""

// 2.resenje je sa obrnutom kosom crtom
console.log('I\'m a "asbab". I\'m')

// Spajanje stringova

let ulica = 'Nemanjina'
let broj = 'ulica'
// 1. nacin:
let adresa = ulica + ' ' + broj
console.log(adresa.toUpperCase())

// 2.nacin:
console.log(`${ulica} ${broj}`)

console.log(adresa.length)

console.log('Nemanjina' + ' ' + '30')

console.log('Nemanjina' + ' ' + 30) // isto ce da ispise jer string uvek nadjaca broj

// FUNKCIJE SA STRINGOVIMA:

// toUppercase(), toLowercase() - pretvara string u velika/mala slova

let nasMonitor = 'monitor'
let unos = 'Monitor'
unos.toLowerCase() == nasMonitor.toLowerCase()  // ovako smo sigurni da je isti unos (da je true)

// repeat - ponavlja neki string koliko puta hocemo

console.log('Zvezda '.repeat(2))

// trim

console.log('    Zvezda je sampion     '.trim())  // Trim brise sve razmake sa strane (sa pocetka i kraja)

// includes 

console.log('Zvezda'.includes('vez'))  // vraca true ili false. Case sensitive je (bitno je da li su velika ili mala slova)
console.log('ZvEzda'.toLowerCase().includes('zve'))

// indexOf - trazi poziciju na kojoj se nalazi neki karakter

// substring

console.log('abba'.substring(1,3)) // bb (Od prvog do treceg, ukljucujuci prvi i ne ukljucujuci treci) (krece od nule)

console.log('Zvezda' + 5) // Zvezda5
console.log(5 + 'Zvezda') // 5Zvezda
console.log(5+9+'Zvezda') // 14Zvezda
console.log('Zvezda' + 5 + 9) // Zvezda59

console.log(3-'2')  // 1...minus ne zna sta da radi sa stringovima i pokusava da ih pretvori u broj
console.log(3-'Zvezda')  // NaN...kada ne moze da pretvori sting u broj, dobicemo NaN