// question-1
const filterEvenNumbers = (num: number[]): number[] => {
    return num.filter(n => n % 2 === 0)
}

// question-2
const reverseString = (string: string): string => {
    const str = string;
    const split = str.split('');
    const reverse = split.reverse();
    const result = reverse.join('')
    return result
} 


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

//question-4
const getProperty = <T, K extends keyof T>(object: T, key: K):T[K] =>{
    return object[key]
}

// question-5
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}
const toggleReadStatus = (book: Book) =>{
    return {
        ...book, 
        isRead: true
    }
}

//question-6
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person  {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age); // Person class call
        this.grade = grade;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

//question-7
const getIntersection = (array1: number[], array2: number[]): number[] => {
    return array1.filter((item) => array2.includes(item));
};