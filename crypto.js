const crypto = require('crypto');

// Secret key and IV for encryption and decryption
const ENCRYPTION_KEY = crypto.randomBytes(32); // 32 bytes key for AES-256
const IV = crypto.randomBytes(16); // 16 bytes IV

// Function to encrypt text
function encrypt(text) {
    const cipher = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_KEY, IV);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

// Function to decrypt text
function decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', ENCRYPTION_KEY, IV);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Function to hash text using SHA-256
function hash(text) {
    return crypto.createHash('sha256').update(text).digest('hex');
}

// Example usage
const text = "Hello, World!";

// Encrypt the text
const encryptedText = encrypt(text);
console.log("Encrypted Text:", encryptedText);

// Decrypt the text
const decryptedText = decrypt(encryptedText);
console.log("Decrypted Text:", decryptedText);

// Hash the text
const hashedText = hash(text);
console.log("Hashed Text (SHA-256):", hashedText);
