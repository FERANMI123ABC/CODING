//i am a javascript student//
/* There are various data types in Javascript*/
alert(6+2);
alert(null);
alert("Hello World")
alert("10" + 2);
let number=prompt('How old is this user?',25);
alert(`You are${number} years old`);
let result=prompt("What is the gender");
if(result=="male"){
    alert('welcome to the barbing salon');
}
if(result=="female"){
    alert('welcome to the hair salon');
}
alert('A program that grades students')
let name=prompt("What is your name","")
let grade = prompt("what is yor score","")
if(grade>=70 && grade <=100) {
alert('You get an A');
}
if(grade>=60 && grade<=69){
    alert('You get a B');
}
if(grade>=50 && grade<=59){
    alert('You get a C');
}
if(grade>=45 && grade<=49){
    alert('You get a D');
}
if(grade>=40 && grade<=44){
    alert('You get a E');
}
if(grade>=0 && grade<=39){
    alert('You get a F ');
}
/*if(name="Bolu"){
    alert('Your grade is 70-100');
    alert('You get an A')
}
if(name="Stephanie"){
    alert('Your grade is 60-69');
    alert('You get a B');
}
if(name="Bukola"){
    alert('Your grade is 50-59');
    alert('You get a C');
}
if(name="Samson"){
    alert('Your grade is 45-49');
    alert('You get a D');
}
if(name="Bimbo"){
    alert('Your grade is 40-44');
    alert('You get a E')
}
if(name="Chioma"){
    alert('Your grade is 0-39');
    alert('You get a F');
}*/
let age=prompt("How old are you","")
let skill=prompt("What is your skill","");
let degree=prompt("Do you have a university degree(yes/no)");
if((skill=="react"||skill=="angular"||skill=="vue") && age >= 14 && degree == 'yes'){
    alert('The user can apply for the job');
} else {
    alert('The user cannot apply for the job');
}
// if(age>=14){
//     alert('The user can apply for the job');
// }
// if(user="Does the student have a degree||Does the student not have a degree"){
//     alert('The user can apply for the job');
// }
/*let hour=9;
if (hour>10 || hour<14 );
alert("The office is closed");*/
let i=0;
while(i<3){
    alert(i);
    i++;
}
let j=2;
while (j){
alert(j);
j--;
}
let integer=prompt("Let this user enter a random number","");
if(integer==6||integer==12){
alert('This is a multiple of 3');
}else{
    alert('This is a normal number');
}
let hero=prompt("Enter a heros name","");
if(hero=="Thor"||hero=="Hulk"){
    alert('This hero is a male');
}
else if(hero=="blackwidow"||hero=="Wonderwoman"){
    alert('This hero is a female');
}else{
    alert('This is not a hero');
}
let firstname=null;
let middlename=null;
let lastname="John"
alert(firstname?? middlename?? lastname??"Anonymous");
let k=4;
while(k){;
alert(k);
k--;
}
let l=0;
do{
    alert(l);
    l++;
}while(l<5);
for(let m=0;m<3;m++){
    alert(m);
}
let value=true;
alert(typeof value);
value=String(value);
alert(typeof value);
value=123;
alert(typeof value);
value=String(value);
alert(typeof value);
alert(Boolean("") );
alert(Boolean("hello") );
let str="123";
alert(typeof str);
str=Boolean(str);
alert(typeof str);
alert(Number("123"));
alert(Number("123z"));
alert(Number(true));
alert(Number(false));
let s="my" + "string";
alert(s);