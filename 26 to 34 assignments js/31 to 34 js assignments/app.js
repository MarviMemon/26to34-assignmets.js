
//==========Q1===============
// var now = new Date();
// document.write(now.toDateString());
//===========Q2==================
// var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date();
// var monthName=months[now.getMonth()];
// alert( " current month is : "+monthName);

//=============Q3=======================
// var  days = ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"];
// var d = new Date();
// var monthName = days[d.getDay()-1];
// alert("today is " + monthName);


//==========Q4==============
// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
// }else if(c === "Mon"){
//     document.write("not a fun day")
// }else if(c === "Tue"){
//     document.write("not a fun day")
// }else if(c === "Wed"){
//     document.write("not a fun day")
// }else if(c === "Thr"){
//     document.write("not a fun day")
// }else if(c === "Fri"){
//     document.write("not a fun day")
// }

//=============Q5=====================
 
// var now = new Date();
// now.getDay()
// if(now < 16){
//     document.write("First fifteen days of the month")
// }
// else{
//      document.write("last days of the month" );
// }

//===========Q6=================
// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);

// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)

//============Q7==========
// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     alert("It's PM")
// }else if(c === "13:"){
//     alert("It's PM")
// }else if(c === "14:"){
//     alert("It's PM")
// }else if(c === "15:"){
//     alert("It's PM")
// }else if(c === "16:"){
//     alert("It's PM")
// }else if(c === "17:"){
//     alert("It's PM")
// }else if(c === "18:"){
//     alert("It's PM")
// }else if(c === "19:"){
//     alert("It's PM")
// }else if(c === "20:"){
//     alert("It's PM")
// }else if(c === "21:"){
//     alert("It's PM")
// }else if(c === "22:"){
//     alert("It's PM")
// }else if(c === "23:"){
//     alert("It's PM")
// }else if(c === "24:"){
//     alert("It's AM")
// }else if(c === "01:"){
//         alert("It's AM")
// }else if(c === "02:"){
//      alert("It's AM")
// }else if(c === "03:"){
//     alert("It's AM")
// }else if(c === "04:"){
//     alert("It's AM")
// }else if(c === "05:"){
//     alert("It's AM")
// }else if(c === "06:"){
//      alert("It's AM")
// }else if(c === "07:"){
//     alert("It's AM")
// }else if(c === "08:"){
//      alert("It's AM")
// }else if(c === "09:"){
//      alert("It's AM")
// }else if(c === "10:"){
//      alert("It's AM")
// }else if(c === "11:"){
//     alert("It's AM")
// }

//============Q8====================
// var lastMonthDate = new Date()
// lastMonthDate.setMonth(11);
// lastMonthDate.setDate(31)
// lastMonthDate.setFullYear(2020)
// document.write("leter date : " + lastMonthDate)



//====================Q9===============
// Create a Date object for the starting date of Ramadan
//let firstRamadan = new Date('March 22, 2023');

// Get the current date
//let currentDate = new Date();

// Calculate the number of milliseconds between the starting date and the current date
//let millisecondsPassed = currentDate - firstRamadan;

// Convert milliseconds to days
//let daysPassed = Math.floor(millisecondsPassed / (1000 * 60 * 60 * 24));

// Alert the number of days passed since 1st Ramadan
//alert("Number of days passed since 1st Ramadan: " + daysPassed);
  
//===================Q10===========
// var now = new Date("2015");
// now.setMonth(11,5);
// document.write( "on refrence date "+ now);
// document.write(now.setSeconds(now) + " seconds had since beginning of 2015");


//======================Q11================
// var now = new Date()
// document.write(now);
// document.write(now.getHours() +1 +" hour age, it was " + now)

//================Q12=========================
 // Create a new date object
// var currentDate = new Date();

// // Get the current year
// var currentYear = currentDate.getFullYear();

// // Subtract 100 years from the current year
// var newYear = currentYear - 100;

// // Set the new year in the date object
// currentDate.setFullYear(newYear);

// // Show the date in an alert box
// alert("Date: " + currentDate);



//===============Q13========================
// var age = +prompt("enter your age");
// document.write("Your age is " + age + "<br>");
// var now = new Date();
// document.write("your birth year is ")
// document.write(now.getFullYear(now)-age);


//=============Q14==================
// var input =prompt("enter the name ");
// document.write("Customer Name : " +input +"<br>");
// var input2 =prompt("enter the current month ");
// document.write("Current month : " +input2 +"<br>");
// var input3 = +prompt("enter the number of units");
// document.write("number of units : " +input3 +"<br>");
// var input4 = +prompt("enter per unit");
// document.write("charges per unit : " +input4 +"<br>");
// var total = input3*input4;
// document.write( "net amount payble (within due date) : "+ total +"<br>");
// var num = 350;
// document.write("late payment surcharges : " + num +"<br>");
// var final = total + num;
// document.write("gross amount payble (after due date) : " + final);
