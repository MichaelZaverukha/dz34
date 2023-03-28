class Circle {
   constructor(radius){
      this.radius = radius;
   }
   get radiusResult(){
      return this.radius;
   }
   set radiusResult(radiusResult) {
      this.radius;
   }

   get diameterResult(){
      return this.radius*2
   }

   area(){
      alert(Math.round(Math.PI*`${this.radius**2}`));
   }

   length(){
      alert(Math.round(2*Math.PI*`${this.radius}`));
      }
}
let question = +prompt(`Radius`)
new Circle(question).area();
new Circle(question).length();
let circus = new Circle(question);
console.log(circus);






class Marker {
   constructor(word,color,percent){
      this.word = word;
      this.color = color;
      this.percent = percent;
      this.markerInk = 100;
}
   print(text){
      let output="";
      for (let i = 0; i < text.length && this.markerInk > 0; i++) {
      const char = text[i];
      const color = this.markerInk >= 50 ? this.color : "red";
      output += `<span style="color: ${color}">${char}</span>`;
      if (char.trim() !== "") {
      this.markerInk -= this.percent / 2; // кожен не пробільний символ знижує кількість чорнила на 0.5%
         }
         }
   }
}
class RefillableMarker extends Marker {
   refill() {
      this.markerInk = 100;
   }
}

const marker = new Marker("Hello", "blue", 1);
const refillmarker = new RefillableMarker("Hello", "blue", 1);
marker.print("Hello World!"); // виводить текст "Hello World!" з використанням маркера
refillmarker.refill();





class Employee {
   constructor(name, salary, position) {
       this.name = name,
           this.salary = salary,
           this.position = position
   }
}
const employees = [
   new Employee('Ivan', 37000, 'QA'),
   new Employee('Alex', 8000, 'Front-End Dev'),
   new Employee('Misha', 42000, 'DevOps'),
   new Employee('Vlad', 57000, 'Back-End Dev'),
];
class EmpTable {
   constructor(employees) {
       this.employees = employees
   }
   getHtml() {
       let html = '<table><thead><tr><th>Name</th><th>Salary</th><th>Position</th></tr></thead><tbody>';
       for (let i = 0; i < this.employees.length; i++) {
           html += `<tr><td>${this.employees[i].name}</td><td>${this.employees[i].salary}</td><td>${this.employees[i].position}</td></tr>`;
       }
       html += '</tbody></table>';
       return html;
   }
}
const empTable = new EmpTable(employees);
document.write(empTable.getHtml());