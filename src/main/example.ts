export function isLeapYear(year:number) {
    if(year % 400 != 0) {
        return false;
    }else if(year % 4 != 0) {
        return false
    }
    return true
}