"use strict";

export class ErrorRepository {
    constructor() {
        this.mistakeCodes = new Map([
            [100, "Continue"],
            [200, "OK"],
            [300, "Multiple Choices"],
            [400, "Bad Request"],
            [500, "Internal Server Error"]
        ]);
    }

    translate(code) {
        if (this.mistakeCodes.has(code)) {
            return this.mistakeCodes.get(code);
        } 
        else {
            throw new Error("Unknown error");
        }
    }
}