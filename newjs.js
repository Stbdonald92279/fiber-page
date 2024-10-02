// ways to output on javascript Output

classJs = 'Js class started';
console.log(classJs);



//alert('Adelani, i hope i dont forget your name again ');
//variable declaration: var, let ,const



var classJs = 'New Javascript class';
console.log(classJs);
document.getElementById('faith').innerHTML = classJs;

let gettingIt =' We\'re getting better in Js';
console.log(gettingIt);
document.getElementById('get').innerHTML = gettingIt;

gettingIt = 34;
gettingIt = gettingIt
console.log(gettingIt);


const gotIt = 'plus wike';
console.log(gotIt)
document.getElementById('got').innerHTML = gotIt;

classJs = 'Naija go better';
console.log(classJs);

gettingIt = 'Baba Tinubu';
console.log(gettingIt);

//  gotIt = 'plus wike';
console.log(gotIt);

//data types : string, number , boolean , array , object, undefined, null

//string

var str1 = 'we started the Data types';
var str2 = 'In javascript';

console.log(str1)
console.log(typeof(str1));
console.log(str2);
console.log(typeof(str2));

//marging/ concatenation of string
var strmerge = str1 + ' ' + str2;
console.log(strmerge);

var strconcat = str1.concat( ' ',str2);
console.log(strconcat);

//getting total numbers of chracter in a string

var strLength = str1.length;
console.log(str1Length);

var str1Length = str2.length;
console.log(str1Length);

console.log(str1.length)

// excaping character (\)
var str3 = "He was quoted '/Light brings clarity'";
console.log(str3);

var str4 = "He was quoted \'Light brings clarity\'";
console.log(str4)

//make all characters capital case letters

strcapital = str4.toUpperCase();
console.log(strcapital)

//make all characters lower case letters

strlower = str4.toLowerCase();
console.log(strlower);

//get a simple  character
var str3singlecharacter = str4[0];
console.log(str3singlecharacter);

//merging characters 
var str3mergered = str3[10]+ str3[4]  + str3[8]+ str3[17] + str3[0] + str3[10];
console.log(str3mergered);
2
// convert str3mergered to lower case
var str3mergeredconv = str3mergered.toLocaleLowerCase();
console.log(str3mergeredconv);

var str3mergered = str3new = str3[0] +str3[1].toUpperCase()+ str3[2]+ str3[7]+ str3[8]+ str3[9]+ str3[10]+ str3[11]+ str3[12]+ str3[13].toLowerCase() + str2[0]+ str2[1].toUpperCase()+ str2[2]+str2[3]+ str2[4]+str2[5]+str2[6] +str2[7]+str2[8]+str2[9]+str2[10]+str2[11]+str2[12].toLowerCase()+ str1[2]+ str1[15].toUpperCase()+str1[16].toUpperCase()+str1[17].toUpperCase()+str1[18].toUpperCase() +str4[2]+ str4[15]+str4[16]+ str4[17] +str4[18] +str4[19]+str4[20];
document.getElementById("dave").innerHTML = str3mergered;


//Slice
let part = str4.slice(7, 13);
console.log(part)

let part1 = str4.slice(-12, -6);
console.log(part1)

//Substring
let part2 = str4.substring(7, 13);
console.log(part2)

//Substr
let part3 = str3.substr(7, 6);
console.log(part3)

//Repeat
let  result = str2.repeat(2);
console.log(result)

//Replace
let newText = str1.replace("we", "They");
console.log(newText)

//Numbers

let x = 3.14;
console.log(x)
console.log(typeof(x))
let y = 3;
console.log(y)
console.log(typeof(y))

x = 10;
y = 20;
z = x + y
console.log(z)

x = 10;
y = 20;
z = x * y
console.log(z)

x = 10;
y = 20;
z = y-x
console.log(z)

x = 10;
y = 23;
z = y/x
console.log(z)


x = 10;
y = 23;
z = y%x
console.log(z)

x = 10;
y = 20;
z = x * y
console.log(z)

x = 10;
y = 20;
z = (x+y)**23
console.log(z)

//Projects.
//1 portfolio website which can include javascript or not.
//2 html and css mebsites.
//3 html , css and javascript projects and one of the 3 websites must be e-commerce website.

//Note: It is a pre-requisite to start your react class.Link all websites to the portfolio website.


//Number to string
x = 123;
x.toString();
(123).toString();
(100 + 23).toString();


x = 9.656;
x.toFixed(0);
x.toFixed(2)


Number(true);
Number(false);
Number("10");
Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33");
Number("10,33");
Number("10 33");
Number("John");


parseInt("-10");
parseInt("-10.33");
parseInt("10");
parseInt("10.33");
parseInt("10 20 30");
parseInt("10 years");
parseInt("years 10");

//array

var arr1 = Array(12, 'tier', 'we are in array',35);
console.log(arr1);
console.log(typeof(arr1));
console.log(Array.isArray(arr1));

var webDevStudents = ['samuel', 'olamide', 'tobi', 'delani','lakunle', 'david','philip','alobi','faith','williams','yemi','charles'];

console.log(webDevStudents);
console.log(typeof(webDevStudents));
console.log(Array.isArray(webDevStudents));

document.getElementById('tinubu').innerHTML = webDevStudents[1][4]+webDevStudents[3][4] + webDevStudents[4][3];

document.getElementById('wike').innerHTML = arr1[2][0].toUpperCase() + webDevStudents[9][1];

document.getElementById('ye').innerHTML = webDevStudents[10][0] + webDevStudents[10][1];

document.getElementById('tiwa').innerHTML = webDevStudents[2][0] + webDevStudents[2][3] + webDevStudents[9][0] + webDevStudents[9][5];

document.getElementById('ki').innerHTML =   webDevStudents[0][1]+  webDevStudents[4][2] +webDevStudents[1][4];

document.getElementById('ab').innerHTML = webDevStudents[7][3] + webDevStudents[0][1]  + webDevStudents[11][0] + webDevStudents[11][1] +   webDevStudents[11][2];


//Getting a single value
console.log(webDevStudents[1]);
//classwork:display each value in arr1 and webDevStudents in your console
console.log(webDevStudents[0]);
console.log(webDevStudents[1]);
console.log(webDevStudents[2]);
console.log(webDevStudents[3]);
console.log(webDevStudents[4]);
console.log(webDevStudents[5]);
console.log(webDevStudents[6]);
console.log(webDevStudents[7]);

console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);


//classwork: create bucket from arr1 and WebDevStudents array

//Getting a character from one of the values in array
console.log(webDevStudents[0][4]);

//getting the last value in an array
console.log(webDevStudents[webDevStudents.length - 1])


//Merging two arrays
console.log(arr1 + ' ' + webDevStudents)
console.log(arr1.concat(' ',webDevStudents))

//removing a value from the begining
arr1.shift();
console.log(arr1)

//Adding to an array from the begining
arr1.unshift(2345);
console.log(arr1)

//removing a value from the value

arr1.pop();
console.log(arr1)

//Adding a value to the end
arr1.push('next');
console.log(arr1)

//changing values in an array 
webDevStudents[4] = 'Benny'
console.log(webDevStudents);

//Convert Array to String

webDevStudentsConvToString = webDevStudents.toString();
console.log(webDevStudentsConvToString)

//Convert String to Array
var webDevStudentsConvToArray = webDevStudentsConvToString.split(',');
console.log(webDevStudentsConvToArray)

//Iteration or loop in js

//For Loop
let liststuds = ''
for(let index = 0; index < webDevStudents.length; index++) {
    const student = 
    webDevStudents[index];
    console.log(index);
    console.log(student);


    //document.getElementById('listofstudent').innerHTML=liststuds;
}

//While Loop
var i = 0
while(i < arr1.length){
    console.log(arr1[1]);i++
}

//Foreach loop

let txt = " ";
webDevStudents.forEach(myFuction);
document.getElementById("demo").innerHTML = txt;
console.log(txt);

function myFuction (value, index,array) {
    txt += value + 2 + "<br>";
}

//Map

const numbers2 = arr1.map
(myFuction);

//document.getElementById("demo2").innerHTML = numbers2;

console.log(numbers2);
console.log(Array.isArray(numbers2));

function myFunction1(value) {
    return value*2;
}

//for in
text = "";
for (let x in arr1){
    text += x + '\n';
}
console.log(text);



//Boolean: True or False. The true or false of a statement can be determinedbased on:
//1) Logical or comparism operators:== === < > <= >= ! && || ?
//2) Conditional statement:If & Else statement and switch statement

var bool1 = true;
console.log(bool1);
console.log(typeof(bool1));

var bool2 = false;
console.log(bool2);
console.log(typeof(bool2));


//logical or comparism operators
var numb1 = 45;
var numb2 = 45;
var numb3 = 12;
var str6 = '45';

//double equal to (==)
var doubleEqualTo = numb1 == numb2;
console.log(doubleEqualTo);

var doubleEqualTo1 = numb1 ===numb3;
console.log(doubleEqualTo1);

var doubleEqualTo2 = numb1 == str6;
console.log(doubleEqualTo2);

//triple equal to (===)
var tripleEqualTo = numb1 === numb2;
console.log(tripleEqualTo);

var tripleEqualTo1 = numb1 === numb3;
console.log(tripleEqualTo1);

var tripleEqualTo2 = numb1 === str6;
console.log(tripleEqualTo2);

//not equal to (!=)
var notEqualTo = numb1 != numb2
console.log(notEqualTo)

var notEqualTo1 = numb1 != numb3
console.log(notEqualTo1)

var notEqualTo2 = numb1 != str6
console.log(notEqualTo2);

//greater than(>)
var greaterThan = numb1 > numb2;
console.log(greaterThan);

var greaterThan1 = numb1 > numb3;
console.log(greaterThan1);

var greaterThan2 = numb1 > str6;
console.log(greaterThan2);

//greater than or equal to (>=)
var greaterThanOrEqualTo = numb1 >= numb2
console.log(greaterThanOrEqualTo);

var greaterThanOrEqualTo1 = numb1 >= numb3
console.log(greaterThanOrEqualTo1);

var greaterThanOrEqualTo2 = numb1 >= str6
console.log(greaterThanOrEqualTo2);

//less than(<)
var lessThan = numb1 < numb2;
console.log(lessThan);

var lessThan1 = numb1 < numb3;
console.log(lessThan1);

var lessThan2 = numb1 < str6;
console.log(lessThan2);

//greater than or equal to (>=)
var  lessThanOrEqualTo = numb1 <= numb2
console.log(lessThanOrEqualTo);

var lessThanOrEqualTo1 = numb1 <= numb3
console.log(lessThanOrEqualTo1);

var lessThanOrEqualTo2 = numb1 <= str6
console.log(lessThanOrEqualTo2);

//and (&&)
var andSign = numb1 <= numb2 && numb1 === numb2
console.log(andSign);

var andSign1 = numb1 <= numb3 && numb1 === str6
console.log(andSign1);

var andSign2 = numb1 <= str6 && numb1 === str6
console.log(andSign2);

//or (||)
var andSign = numb1 <= numb2 || numb1 === numb2
console.log(andSign);

var andSign1 = numb1 <= numb3 || numb1 ===str6
console.log(andSign1);

var andSign2 = numb1 <= str6 || numb1 === str6
console.log(andSign2);

//tenary operator
var gender = 'Male';

var checkGender = gender == 'Male' ? 'You\'re employed' :
'Check again Later' ;

console.log(checkGender);

//conditional statement : If&Else statement and Switch statement

//If&Else

var whereIsHe = 'byside';

//simple if&else statement
if(whereIsHe == 'Inside'){
    console.log('Good boy')
}else{
    console.log('Get inside boy')
}

//complex if&else statement
if(whereIsHe == 'Inside'){
    console.log('Good boy')
} else if (whereIsHe == 'Outside'){
    console.log('Get inside boy')
} else {
    console.log('Go and search for him')
}

//nested If&else statement
var whereIsHeOutside = 'Compond';

if (whereIsHe === 'Inside') {
    console.log('Good boy')
} else if (whereIsHe == 
    'Outside'){
        if( whereIsHeOutside == 
            'Compound'){
                console.log('He should open the gate')
            }else if(whereIsHeOutside ==
            'Backyard'){
                console.log('He should release the dogs')
        }
    } {
        console.log('Go and search for him')
    }

//switch
switch(true){
    case whereIsHe == 'outside':
       var answer = 'Coming In'
        break
        case whereIsHe == 'Parlour':
            answer = 'Bring me the remote'
    break;
    case whereIsHe == 'Room':
        answer = 'Bring me my glasses'
        break;
        case whereIsHe == 'Kitchen':
            answer = 'Wash the dishes'
     break;
} 
console.log(answer)

//object
var user = {
    name: 'Ayodele',
    surname: 'Julius',
    age: 24,
    occupation:'Engineer',
    company: 'Fried Engineer Company'
}

console.log(user);
console.log(typeof(user))
console.log(user.name)

document.getElementById('obj').innerHTML = user.name + ' ' + user.surname;

//undefined
var undef;
console.log(typeof(undef));

// function

function mercy() {

    return 'Mercy, stop coming late'
    console.log('Mercy, stop coming late');
}


mercy();


function emma() {
    console.log('Emma, stop skipping class and ' + mercy())
}


emma();


function sims() {
    var a = 23;
    var b = 27;
    console.log(a+b)
    return a * b
    console.log(a+b)
}
console.log(sims());

function sims1(hew, few) {
    var f = hew;
    var h = few;
    return f * h
}
console.log(sims1(45, 24))
console.log(sims1(12,10834))
function func() {
    var a = 3;
    var b = 6;
    console.log(a + b)
    return a + b

}

console.log(func())


var c = 9 * sims1(12, 12);
console.log(c);

function func1(a,b) {

    var a = a;
    var b = b;
    
    return a * b;
}

console.log(func1(12,56));

greeting = () => {
    return 'Welcome Promise for coming late'
};
console.log(greeting())

//event listener
var input = document.getElementById('input');
var btn = document.getElementById('btn');
var output1 = document.getElementById('output1');

btn.addEventListener('click', myClickFunc);


function myClickFunc() {
    console.log('Its working');
    var inputValue = input.value;
    console.log(inputValue);
    console.log(typeof (inputValue))
    output1.innerHTML = 'Value of the input field is:' + 
    inputValue
}

var input1 = document.getElementById('input1');
var btn1 = document.getElementById('btn1');
var output2 = document.getElementById('output2');
let ele1 = '';

btn1.addEventListener('click',myClickFunc2);

function myClickFunc2(){
    console.log('Its working too');
    var inputValue = input1.value;
    console.log(inputValue);
    console.log(typeof(inputValue));
    var inputConv = inputValue.split(', ');
    console.log(inputConv)

    for(i = 0; i < inputConv.length; i++){
        let element = inputConv[i];
        console.log(element)
        ele1 += '<li>' + inputConv [i] + '</li>'
        output2.innerHTML = ele1;
    }
}

var input2 = document.getElementById('input2');
var output3 = document.getElementById('output3');
let ele2 = '';

function displayStudents() {
    console.log('Its working too');
    var inputValue = input2.value;
    console.log(inputValue);
    console.log(typeof(inputValue));
    var inputConv = inputValue.split(', ');
    console.log(inputConv)

    for(i = 0; i < inputConv.length;i++){
        let element = inputconv[1];
        console.log(element)
        ele2 += '<li>' + inputConv[1] + '</liv>'
        output3.innerHTML = ele2;
    }
}

var input3 = document.getElementById('input3');
var output4 = document.getElementById('output4');
let ele3 = '';

function displayStudents2() {
    console.log('Its working too');
    var inputValue = input3.value;
    console.log(inputValue);
    console.log(typeof(inputValue));
    var inputConv = inputValue.split(', ');
    console.log(inputConv)

    /*for(i = 0; i < inputConv.length; i++){
        let element = inputConv[i];
        console.log(element)
        ele3 += inputConv[i]
    }*/
   output4.innerHTML = inputValue;
}

//set

//create a set
var letters = new Set(["a", "b", "c", "c"]);
console.log(letters);

//create a set
var alphabets = new Set();


//create variables

var a = "a";
var b = "b";
var c = "c";
var d = "a";

//Add variables to the set
alphabets.add(a);
alphabets.add(b);
alphabets.add(c);
alphabets.add(d);
console.log(alphabets)

//loop a set

//create a set
letters = new Set(["a", "b", "c",]);

//list all elements 
var text = "";
for(const x of letters) {
    text += x;
    console.log(text)
}


answer = letters.has("b");
console.log(answer)




