// Normal way

function School(_grade) {
    this.grade = _grade;
    this.getGrade = () => {
        console.log(`Grade count ${this.grade} `);
        console.log(this);
    }
}

let scl = new School(13);
console.log(scl);
scl.getGrade();

// ES 6 Class and Constorctor and this keyword

class Tution {
    constructor(_subject){
        this.subject = _subject;
    }

    getSubject = () => {
        console.log(this.subject);
        console.log(this);
    }
}

let tut = new Tution("Biology");
console.log(tut);
tut.getSubject();