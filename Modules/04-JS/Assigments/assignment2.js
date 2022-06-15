function calculateAge(date) {
    const formattedDate = date.split("/").reverse().join("-");
    const ageInMs = Math.abs(new Date() - new Date(formattedDate));
    const ageInYears = Math.floor(ageInMs / 1000 / 60 / 60 / 24 / 365);
    return ageInYears;
}

console.log(calculateAge("20/7/2002") === 19)
console.log(calculateAge("1/1/1979") === 43)