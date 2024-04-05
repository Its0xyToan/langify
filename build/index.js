'use strict';

var fs = require('fs');
var util = require('node:util');

class InvalidFilePathError extends Error {
    constructor(m) {
        super(m);
        this.name = "InvalidFilePath";
    }
}

class InvalidLineError extends Error {
    constructor(m) {
        super(m);
        this.name = "InvalidLineError";
    }
}

const read = (filepath) => {
    if(typeof filepath !== "string") throw new InvalidFilePathError(`No file path was provided or the type of the file path was not valid`)
    const newFilePath = filepath.endsWith(".lang") ? filepath : `${filepath}.lang`;
    if(!fs.existsSync(newFilePath)) throw new InvalidFilePathError("The file path provided is invalid: " + newFilePath)

    return fs.readFileSync(newFilePath).toString()
};

/**
 * Parses a .lang file into a javascript object.
 * @param {string} filepath - The file path where is located your .lang file !
 */
const parse = (filepath) => {
    let file = read(filepath);

    let parts = file.split("\n");

    let object = {};

    let i = 0;

    parts.map(r => {
        i++;
        if(r.trim() == false) return
        if(r.startsWith("//")) return

        let p = r.split("=");
        if(p.length !== 2) throw new InvalidLineError(`The line ${i} has an invalid syntax`)
        object[p[0].trim()] = p[1].trim();
    });

    return object
};

/**
 * A quick access for node/util's format function
 * @param {string} string 
 * @param  {...any} args 
 * @returns {string}
 */
const format = (string, ...args) => {
    return util.format(string, ...args)
};

exports.format = format;
exports.parse = parse;
