export function generateKeyArray() {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var symbols = ["!", "@", "#", "$", "(", ")", "*"];

    var total = [];
    for (var i = 0; i < alphabet.length; i++) {total.push(alphabet[i])};
    for (var i = 0; i < numbers.length; i++) {total.push(numbers[i])};
    for (var i = 0; i < symbols.length; i++) {total.push(symbols[i])};

    return total;
}