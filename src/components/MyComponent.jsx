import React, { useEffect, useState, useContext, useReducer } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


//PRIME NUMBER GENERATOR
//Prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23, 2
//a funx that checks if a nuber is prime , and returns tru or false;
const isPrimeNum = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true
    if (num % 2 === 0) return false;

    //this loop starts from 3 and increamnets by 2 each time; it runs 
    //until i exceeds the squroot of numbers 
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

const generatePrime = (count, existingPrimes) => {
    const primes = [];
    let num = 2 //start checking frm num 2

    while (primes.length < count) {
        if (isPrimeNum(num) && !existingPrimes.includes(num)) {
            primes.push(num)
        }
        num++;
    }
    return primes;

}
const MyComponent = () => {
    const [primeNumbers, setPrimeNumbers] = useState([]) //Holds the current list of prime numbers to be displayed.
    const [existingPrimes, setExistingPrimes] = useState([]); //holds all the generated numbers so far to ensure no duplicity



    const handleRun = () => {
        const newPrimes = generatePrime(10, existingPrimes);
        setPrimeNumbers(newPrimes);
        setExistingPrimes(existingPrimes.concat(newPrimes));
    };

    return (
        <div className="container">
            <header className="header">
                <h1>Generate Prime Numbers</h1>
            </header>
            <div className="content">
                <button className="btn-add-more" onClick={handleRun}>
                    <FontAwesomeIcon icon={faPlay} /> Run
                </button>
                <div className="prime-list">
                    {primeNumbers.map((prime, index) => (
                        <div key={index} className="prime-number">
                            {prime}
                        </div>
                    ))}
                </div>
            </div>
            <footer className="footer">
                <p>Prime Number Generator by Ozaviz</p>
            </footer>
        </div>
    );


}

export default MyComponent