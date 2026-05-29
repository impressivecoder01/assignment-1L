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
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);
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
const student = new Student("Alice", 20, "A");
student.getDetails();
//question-7
const getIntersection = (array1: number[], array2: number[]): number[] => {
    return array1.filter((item) => array2.includes(item));
};