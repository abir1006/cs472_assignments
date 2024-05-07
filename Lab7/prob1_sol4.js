// Solution 4: Passing this to forEach method as second argument

let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);
        }, this);

    }

};

group.showList();