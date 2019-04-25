// CODE here for your Lambda Classes
class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender  = obj.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase - obj.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
    }
    listsSubjects() {
        for(let i = 0; i <= this.favSubjects; i++) {
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManagers extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

// Created 2 Instructor objects: dan, keiran

const dan = new Instructor({
    name: 'Dan',
    age: 29,
    location: 'Atlanta',
    gender: 'male',
    specialty: 'front-end design',
    favLanguage: 'CSS',
    catchPhrase: "Wait till you learn all about flex-box!"
});

const keiran = new Instructor({
    name: 'Keiran',
    age: 25,
    location: 'Chicago',
    gender: 'male',
    specialty: 'JavaScript Classes',
    favLanguage: 'JavaScript',
    catchPhrase: "Not sure why the dog is barking.. he's ok."
});

// Created 2 ProjectManagers objects: ari, brandon

const ari = new ProjectManagers({
    name: 'Ari',
    age: 24,
    location: 'L.A.',
    gender: 'male',
    specialty: 'ReactJS',
    favLanguage: 'JavaScript',
    catchPhrase: "There is a lot more functionality when it comes to ReactJS.",
    gradClassName: 'CS3',
    favInstructor: 'Dan Frehner'
});

const brandon = new ProjectManagers({
    name: 'Brandon',
    age: 25,
    location: 'Denver',
    gender: 'male',
    specialty: 'PHP',
    favLanguage: 'WordPress',
    catchPhrase: "You'll be doing it like this in the real world.",
    gradClassName: 'CS2',
    favInstructor: 'Keiran Kozlowski'
});
