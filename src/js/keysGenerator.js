function getPrimes(x){
    let ar = [];
    for (let counter = 0; counter <= x; counter++) {
        let notPrime = false;
        for (let i = 2; i <= ar.length && !notPrime; i++) {
            if (counter%ar[i]===0) {
                notPrime = true;
            }
        }
        if (notPrime === false) ar.push(counter);
    }
    return ar;
}
function getPublicExp(num, arr) {
    return arr.find((el)=> {
        if (num%el!=0 && el > 1) return el;
    });
}

f=(a,b,c=!(n=b),d=1)=>a?f(b%a,a,d,c-(b-b%a)/a*d):b<2&&(c+n)%n;

function generateKeys() {
    let primeNumbers = allPrimeNumbers.filter(el => el > 10);
    let randomIndexes = [Math.floor(Math.random() * primeNumbers.length), Math.floor(Math.random() * primeNumbers.length)];
    let p = primeNumbers[randomIndexes[0]];
    let q = primeNumbers[randomIndexes[1]];
    let n = p * q;
    let koefEuler = (p - 1) * (q - 1);
    let e = getPublicExp(koefEuler, allPrimeNumbers);
    let d = f(e, koefEuler);
    console.log("koefEuler:" + koefEuler + " e:" + e + " d:" + d)
    let publicKey = [e, n];
    let secretKey = [d, n];
    return [publicKey, secretKey];
}
var allPrimeNumbers = getPrimes(100);

