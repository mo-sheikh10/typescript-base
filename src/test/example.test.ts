import {isLeapYear} from "../main/example";

describe('example test', () => {
    it("should return false if not divisible by 4", () => {
        let leapYear = isLeapYear(2001);
        expect(leapYear).toBe(false);
    })

    it("should return false if is divisible by 4", () => {
        let leapYear = isLeapYear(2016);
        expect(leapYear).toBe(true);
    })
})