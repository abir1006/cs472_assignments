// Solution 2: Arrow function

let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        this.students.forEach( student => console.log(this.title + ": " + student));

    }

};

group.showList();