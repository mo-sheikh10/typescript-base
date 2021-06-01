import {isLeapYear} from "../main/example";

describe('example test', () => {
    it("should return false if not divisble by 4", () => {
        let leapYear = isLeapYear(2001);
        expect(leapYear).toBe(false);
    })
})