"use strict";

let stu1 = {
  id: 1,
  fullName: "Ahmadov Haciaga",
  age: 29,
  address: "Bilajari",
};

let stu2 = {
  id: 2,
  fullName: "Memmedova Leman",
  age: 26,
  address: "Xutor",
};

let stu3 = {
  id: 3,
  fullName: "Alxanov Sahriyar",
  age: 37,
  address: "Badamdar",
};

let stu4 = {
  id: 4,
  fullName: "Abbasov Rufat",
  age: 28,
  address: "Binagadi",
};

let stu5 = {
  id: 5,
  fullName: "Nasibli Tofig",
  age: 19,
  address: "Sebail",
};

let group = {
  name: "P418",
  capacity: 3,
  students: [],

  addStudent(stu) {
    if (stu == undefined) {
      alert("Input can't be empty!");
      return;
    }

    if (this.students.length >= this.capacity) {
      alert("Group already filled!");
      return;
    }

    this.students.push(stu);
  },
  getAllStudents: function () {
    return this.students;
  },
  getStudentsById: function (id) {
    let findStu = this.students.find((stu) => stu.id === id);
    if (findStu) {
      return findStu;
    } else {
      return "Student with" + " " + id + " " + "Id" + " " + "Was Not Found";
    }
  },

  searchStudent: function (stu) {
    return this.students.filter((stu) =>
      stu.fullName.includes(stu)
    );
  },
  deleteStudent: function (id) {
    let i = this.students.findIndex((stu) => stu.id == id);
    if (i >= 0) {
      this.students.splice(i, 1);
    } else {
      console.log("Not found");
    }
  },
};



// group.addStudent(stu1);
// group.addStudent (stu2);
// group.addStudent(stu3);
// console.log(group.getAllStudents());
// console.log(group.searchStudent("a"));
group.deleteStudent(2);
