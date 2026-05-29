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
// question-3
type StringOrNumber = string | number;

const  checkType = (value: StringOrNumber):  string =>  {
    if(typeof value === "string"){
        return "String"
    }
    else {
        return 'Number'
    }
}
checkType("Hello");
checkType(42);
//question-4
const getProperty = <T, K extends keyof T>(object: T, key: K):T[K] =>{
    return object[key]
}
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");