import {generateKey} from "./bungocrypt/Key.js";
import {Encrypt, Decrypt} from "./bungocrypt/Crypt.js";

var key = generateKey();
var string = "test";
var encrypted = Encrypt(string, key);

console.log(`Key: ${key}`);
console.log(`Encrypted string: ${encrypted}`);
console.log(`Decrypted string: ${Decrypt(encrypted, key)}`);