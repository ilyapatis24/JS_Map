import { ErrorRepository } from '../map';

test('should get error message', () => {
    let error = new ErrorRepository();
    expect(error.translate(100)).toBe("Continue")
    expect(error.translate(500)).toBe("Internal Server Error")
})

test('should unknown error', () => {
    let error = new ErrorRepository();
    expect(function () {
        error.translate(90)
    }).toThrow(new Error ("Unknown error"))
})