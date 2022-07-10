function generateKeyArray() {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var symbols = ["!", "@", "#", "$", "(", ")", "*", " "];

    var total = [];
    for (var i = 0; i < alphabet.length; i++) {total.push(alphabet[i])};
    for (var i = 0; i < numbers.length; i++) {total.push(numbers[i])};
    for (var i = 0; i < symbols.length; i++) {total.push(symbols[i])};

    return total;
}

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
    var dataChar;

    for (var i = 0; i < data.length; i++) {
        dataChar = data[i].toLowerCase();

        if (dataChar == "a") {
            encryptedString += key[0]
        }
        else if (dataChar == "b") {
            encryptedString += key[1]
        }
        else if (dataChar == "c") {
            encryptedString += key[2]
        }
        else if (dataChar == "d") {
            encryptedString += key[3]
        }
        else if (dataChar == "e") {
            encryptedString += key[4]
        }
        else if (dataChar == "f") {
            encryptedString += key[5]
        }
        else if (dataChar == "g") {
            encryptedString += key[6]
        }
        else if (dataChar == "h") {
            encryptedString += key[7]
        }
        else if (dataChar == "i") {
            encryptedString += key[8]
        }
        else if (dataChar == "j") {
            encryptedString += key[9]
        }
        else if (dataChar == "k") {
            encryptedString += key[10]
        }
        else if (dataChar == "l") {
            encryptedString += key[11]
        }
        else if (dataChar == "m") {
            encryptedString += key[12]
        }
        else if (dataChar == "n") {
            encryptedString += key[13]
        }
        else if (dataChar == "o") {
            encryptedString += key[14]
        }
        else if (dataChar == "p") {
            encryptedString += key[15]
        }
        else if (dataChar == "q") {
            encryptedString += key[16]
        }
        else if (dataChar == "r") {
            encryptedString += key[17]
        }
        else if (dataChar == "s") {
            encryptedString += key[18]
        }
        else if (dataChar == "t") {
            encryptedString += key[19]
        }
        else if (dataChar == "u") {
            encryptedString += key[20]
        }
        else if (dataChar == "v") {
            encryptedString += key[21]
        }
        else if (dataChar == "w") {
            encryptedString += key[22]
        }
        else if (dataChar == "x") {
            encryptedString += key[23]
        }
        else if (dataChar == "y") {
            encryptedString += key[24]
        }
        else if (dataChar == "z") {
            encryptedString += key[25]
        }
        else if (dataChar == "1") {
            encryptedString += key[26]
        }
        else if (dataChar == "2") {
            encryptedString += key[27]
        }
        else if (dataChar == "3") {
            encryptedString += key[28]
        }
        else if (dataChar == "4") {
            encryptedString += key[29]
        }
        else if (dataChar == "5") {
            encryptedString += key[30]
        }
        else if (dataChar == "6") {
            encryptedString += key[31]
        }
        else if (dataChar == "7") {
            encryptedString += key[32]
        }
        else if (dataChar == "8") {
            encryptedString += key[33]
        }
        else if (dataChar == "9") {
            encryptedString += key[34]
        }
        else if (dataChar == "0") {
            encryptedString += key[35]
        }
        else if (dataChar == "!") {
            encryptedString += key[36]
        }
        else if (dataChar == "@") {
            encryptedString += key[37]
        }
        else if (dataChar == "#") {
            encryptedString += key[38]
        }
        else if (dataChar == "$") {
            encryptedString += key[39]
        }
        else if (dataChar == "(") {
            encryptedString += key[40]
        }
        else if (dataChar == ")") {
            encryptedString += key[41]
        }
        else if (dataChar == "*") {
            encryptedString += key[42]
        }
        else if (dataChar == " ") {
            encryptedString += key[43]
        }
    }
    return encryptedString;
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

    var decryptedString = "";
    var dataChar;
    var total = generateKeyArray();

    for (var i = 0; i != data.length; i++) {
        dataChar = data[i].toLowerCase();

        for (var x = 0; x != key.length; x++) {
            if (dataChar == key[x]) {
                decryptedString += total[x];
            }
        }
    }

    return decryptedString;
}

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