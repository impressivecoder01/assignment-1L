// question-1
const filterEvenNumbers = (num: number[]): number[] => {
    return num.filter(n => n % 2 === 0)
}
filterEvenNumbers([1,2,3,34,45,6])