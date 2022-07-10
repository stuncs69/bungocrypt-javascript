import { generateKeyArray } from "./data/keyData.js";

export function Encrypt(data, key) {
    if (key.constructor !== Array) {
        return console.error("KeyError[1]: Key is supposed to be an array!");
    }
    else if (key.length != 44) {
        return console.error("KeyError[2]: Key is not 44 characters!");
    }
    else if (!data) {
        return console.error("DataError[1]: Data is missing!");
    }

    var data = String(data);
    var encryptedString = "";

    for (var i = 0; i < data.length; i++) {
        var dataChar = data[i].toLowerCase();

        switch (dataChar) {
            case "a":
                encryptedString += key[0];
            case "b":
                encryptedString += key[1];
            case "c":
                encryptedString += key[2];
            case "d":
                encryptedString += key[3];
            case "e":
                encryptedString += key[4];
            case "f":
                encryptedString += key[5];
            case "g":
                encryptedString += key[6];
            case "h":
                encryptedString += key[7];
            case "i":
                encryptedString += key[8];
            case "j":
                encryptedString += key[9];
            case "k":
                encryptedString += key[10];
            case "l":
                encryptedString += key[11];
            case "m":
                encryptedString += key[12];
            case "n":
                encryptedString += key[13];
            case "o":
                encryptedString += key[14];
            case "p":
                encryptedString += key[15];
            case "q":
                encryptedString += key[16];
            case "r":
                encryptedString += key[17];
            case "s":
                encryptedString += key[18];
            case "t":
                encryptedString += key[19];
            case "u":
                encryptedString += key[20];
            case "v":
                encryptedString += key[21];
            case "w":
                encryptedString += key[22];
            case "x":
                encryptedString += key[23];
            case "y":
                encryptedString += key[24];
            case "z":
                encryptedString += key[25];
            case "1":
                encryptedString += key[26];
            case "2":
                encryptedString += key[27];
            case "3":
                encryptedString += key[28];
            case "4":
                encryptedString += key[29];
            case "5":
                encryptedString += key[30];
            case "6":
                encryptedString += key[31];
            case "7":
                encryptedString += key[32];
            case "8":
                encryptedString += key[33];
            case "9":
                encryptedString += key[34];
            case "0":
                encryptedString += key[35];
            case "!":
                encryptedString += key[36];
            case "@":
                encryptedString += key[37];
            case "#":
                encryptedString += key[38];
            case "$":
                encryptedString += key[39];
            case "(":
                encryptedString += key[40];
            case ")":
                encryptedString += key[41];
            case "*":
                encryptedString += key[42];
            case " ":
                encryptedString += key[43];
        }

        return encryptedString;
    }
}

export function Decrypt(data, key) {
    if (key.constructor !== Array) {
        return console.error("KeyError[1]: Key is supposed to be an array!");
    }
    else if (key.length != 44) {
        return console.error("KeyError[2]: Key is not 44 characters!");
    }
    else if (!data) {
        return console.error("DataError[1]: Data is missing!");
    }

    var decryptedString = String("");
    var total = generateKeyArray();

    for (var i = 0; i < data.length; i++) {
        for (var x = 0; x < key.length; x++) {
            if (i == key[x]) {
                decryptedString += total[x];
            }
        }
    }
}