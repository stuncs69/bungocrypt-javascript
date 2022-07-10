import { generateKeyArray } from "./data/keyData.js";

export function generateKey() {
    var total = generateKeyArray();
    var key = [];
    var keyArrOne = [];
    var keyArrTwo = [];

    for (var i = 0; i != 22; i++) {
        var value = total[Math.floor(Math.random() * total.length)];
        keyArrOne.push(value);
        total.splice(total.indexOf(value), 1);
    }
    for (var i = 0; i != 21; i++) {
        var value = total[Math.floor(Math.random() * total.length)];
        keyArrTwo.push(value);
        total.splice(total.indexOf(value), 1);
    }

    keyArrOne.push(".");
    
    for (var i = 0; i < keyArrOne.length; i++) {key.push(keyArrOne[i])};
    for (var i = 0; i < keyArrTwo.length; i++) {key.push(keyArrTwo[i])};

    return key;
}