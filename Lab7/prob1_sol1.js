// Solution 1: Create self and assign this to self

let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        self = this;

        this.students.forEach(function (student) {

            console.log(self.title + ": " + student

            );

        });

    }

};

group.showList();