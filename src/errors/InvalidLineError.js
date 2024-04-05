

export default class InvalidLineError extends Error {
    constructor(m) {
        super(m)
        this.name = "InvalidLineError"
    }
}