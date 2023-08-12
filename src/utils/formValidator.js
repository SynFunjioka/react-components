import regex from "./regex";

/**
 * Checks if the value is not an empty string
 * @param {number} value
 */
function required(value) {
    return value.trim() !== "";
}

//STRING ----
/**
 * Checks if a string is an email
 * @param {string} value
 */
function isEmail(value) {
    return regex.emailRegex.test(value);
}

/**
 * Checks if a string has the minimum length characters
 * @param {string} value
 */
function isMinLength(value, minLength) {
    return value.length >= minLength;
}

/**
 * Checks if a string has the maximum length characters
 * @param {string} value
 */
function isMaxLength(value, maxLength) {
    return value.length <= maxLength;
}

//NUMBER

/**
 * Checks if the number is equal or less than the minimum value
 * @param {number} value
 */
function isMin(number, minLength) {
    return number >= minLength;
}

/**
 * Checks if the number is equal or higher than the maximum value
 * @param {number} value
 */
function isMax(number, maxLength) {
    return number <= maxLength;
}


export {
    isEmail,
    required,
    isMinLength,
    isMaxLength,
    isMin,
    isMax
};
