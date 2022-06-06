import { Student } from "./student";
import { gender } from "./student";
let student1= new Student('Nguyễn Anh Tuân',gender.MALE,'abc@gmail.com','01223445667');
let student2= new Student('Nguyễn Thị Linh',gender.FEMALE,'abc@gmail.com','01223445667');
let student3= new Student('Nguyễn Văn Long',gender.MALE,'abc@gmail.com','01223445667');

let students:Student[]=[student1,student2,student3];

function addStundent(m){
    students.push(m);
}
function delStudnet(index){
    for(let i=0;i<students.length;i++){
        if(index==i)
            students.splice(index,1);
    }
}