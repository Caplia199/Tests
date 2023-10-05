const { womanName, manName, foreignName } = require('./randomName.js');
const { womanMiddleName, manMiddleName, foreignMiddleName } = require('./randomMiddleName.js');
const { womanLastName, manLastName, foreignLastName } = require('./randomLastName.js');

// Привер выноса в отдельные функции заполнения трех полей

function getRandomInt(max) {
        return Math.floor(Math.random() * max);
};

let mLastName = manLastName[getRandomInt(99)];
let mName = manName[getRandomInt(99)];
let mMiddleName = manMiddleName[getRandomInt(99)];

const manFullName = [
        mLastName,
        mName,
        mMiddleName,
];


let wLastName = womanLastName[getRandomInt(99)];
let wName = womanName[getRandomInt(99)];
let wMiddleName = womanMiddleName[getRandomInt(99)];

const womanFullName = [
        wLastName,
        wName,
        wMiddleName,
];

let fLastName = foreignLastName[getRandomInt(90)];
let fName = foreignName[getRandomInt(90)];
let fMiddleName = foreignMiddleName[getRandomInt(90)];

const foreignFullName = [
        fLastName,
        fName,
        fMiddleName,
];

module.exports = { manFullName, womanFullName, foreignFullName };