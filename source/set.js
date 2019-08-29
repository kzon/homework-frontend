'use strict';

/**
 * @param {Object} object
 * @param {string} key
 * @param {Object} value
 * @returns {Object}
 */
const set = (object, key, value) => {
    const keys = key.split('.').slice(1);
    return setByKeys(object, keys, value);
};

/**
 * @param {Object}   object
 * @param {String[]} keys
 * @param {Object}   value
 * @returns {Object}
 */
const setByKeys = (object, keys, value) => {
    if (keys.length === 0) {
        return object;
    }
    const firstKey = keys[0];
    if (keys.length === 1) {
        object[firstKey] = value;
        return object;
    }
    object[firstKey] = setByKeys(object[firstKey] ? object[firstKey] : {}, keys.slice(1), value);
    return object;
};
