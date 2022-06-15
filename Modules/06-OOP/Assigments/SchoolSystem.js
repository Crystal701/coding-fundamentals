class User {
    constructor(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }

    greet() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age}. I took ${this.subject.join(", ")}.`)
    }
}

class Student extends User {
    constructor(name, age, subject) {
        super(name, age, subject);
    }

    register(subject) {
        this.subject.push(subject);
    }
}

class Teacher extends User {
    constructor(name, age, subject) {
        super(name, age, subject);
    }

    greet() {
        console.log(`Hello, I'm ${this.name} and I teach ${this.subject.join(", ")}.`)
    }
}

const teacherA = new Teacher("Sonia", "32", ["Math", "History"]);
const studentA = new Student("Crystal", "25", ["Business", "Graphic Design"])
studentA.register("Web Development");

teacherA.greet();
studentA.greet();

