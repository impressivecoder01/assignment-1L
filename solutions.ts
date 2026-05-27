// question-1
const filterEvenNumbers = (num: number[]): number[] => {
    return num.filter(n => n % 2 === 0)
}
filterEvenNumbers([1,2,3,34,45,6])
// question-2
const reverseString = (string: string): string => {
    let str = string;
    let split = str.split('');
    let reverse = split.reverse();
    let result = reverse.join('')
    return result
} 

reverseString('javascript')