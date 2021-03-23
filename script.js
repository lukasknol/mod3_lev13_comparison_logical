const myAge = 18;
const isFemale = true;
const driverStatus = 'bob';
const myName = 'Bram';
const totalAmount = 100;

/*
Test data:
const myAge = 16;
const isFemale = false;
const driverStatus = 'drunk';
const myName = 'Lukas';
const totalAmount = 20;
*/
 
if (myAge >= 18) {
    console.log('Come inside and have a drink!');
} else {
    console.log('Sorry, you are too young to enter');
}

if (isFemale) {
   console.log('You can purchase a ticket');
} else {
    console.log('Sorry, but tonight is ladies night');
}

if (driverStatus === 'bob') {
    console.log('You can drive');
} else {
    console.log('You had too much to drink. Let us call a taxi');
}

if (myAge >= 18 && myAge <= 25) {
    console.log('You get a 50% discount');
} else {
    console.log('You have to pay the full amount');
}

if (myName === 'Bram' || myName === 'Sarah') {
    console.log('You get a free beer');
} else {
    console.log('That will be EUR 2.50, please');
}

if (totalAmount >= 25 && totalAmount < 50) {
    console.log('You get a free portion of bitterballen');
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log('You get a free portion of nachos');
} else if (totalAmount >= 100) {
    console.log('You get a free bottle of champagne');
}