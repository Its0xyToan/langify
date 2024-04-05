
export default class InvalidFilePathError extends Error {
    constructor(m) {
        super(m)
        this.name = "InvalidFilePath"
    }
}