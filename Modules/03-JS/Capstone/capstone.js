function missingLetter(str) {
    let i = str.charCodeAt(0);
    let j = 0;
    let charCode = 122;

    while (i <= charCode && j < str.length) {
        if (str.charAt(j) !== String.fromCharCode(i)) {
            return String.fromCharCode(i);
        }
        i++;
        j++;
    }
}

console.log(missingLetter("abce"));
console.log(missingLetter("abcdefghjklmno"));
console.log(missingLetter("stvwx"));
console.log(missingLetter("bcdf"));
console.log(missingLetter("abcdefghijklmnopqrstuvwxyz"));