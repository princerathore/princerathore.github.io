
var button = document.querySelector('button');

button.onclick = function() {
  alert("WELCOME TO MY WEB APPLICATION");
let choice=prompt("Enter your choice");
if(choice==1){
  let Rate=prompt("Enter the price");
  let Quantity=prompt("Enter the Quantity");
  let discount= prompt("Enter the discount");
  let amount = (Rate,Quantity) =>{     //arrow function
    let result = Rate*Quantity;
    return result;
  }
  let Amount=amount(Rate,Quantity);
  let string = Rate.fontsize(6);
  let string1 = "Enter the rate="
  let result = string1.fontsize(6);
  document.write(result.fontcolor("Red")+""+string);
  document.write("<br>");
  let string2 = Quantity.fontsize(6);
  let string3="Enter the quantity=";
  let result1=string3.fontsize(6);
  document.write(result1.fontcolor("Red")+""+string2);
  document.write("<br>");
  let string4 = discount.fontsize(6);
  let string5="Enter the discount=";
  let result2=string5.fontsize(6);
  document.write(result2.fontcolor("Red")+""+string4);
  document.write("<br>");
  let string6="Amount=";
  document.write(string6.fontcolor("Red")+""+Amount);  //error
  document.write("<br>");
  let discount1 = (discount)=>
  {
    result = Amount*discount/100;
    return result;
  }
  let Discount=discount1(discount);
  let string7="Discount=";
  document.write(string7.fontcolor("Red")+""+Discount);
  document.write("<br>");
  let netAmount =()=>{
    let result=Amount-Discount;
    return result;
  }
  let Net_Amount=netAmount();
  let string8="Net amount=";
  document.write(string8.fontcolor("Red")+""+Net_Amount);
  alert(`Net amount:${Net_Amount}`);
  document.write("<br>");
  alert("thank u for using have a nice day");

}
if(choice==2){
  let English=prompt("Enter the english marks");
  let Hindi=prompt("Enter the hindi marks");
  let Sanskrit=prompt("Enter the Sanskrit marks");
  let Maths=prompt("Enter the Maths marks");
  let social_Science=prompt("Enter the social science");
  let science=prompt("Enter the science");
  let getCalc = (English,Hindi,Sanskrit,Maths,social_Science,science) =>{
    let sum =Number(English)+Number(Hindi)+Number(Sanskrit)+Number(Maths)+Number(social_Science)+Number(science);
    let result=sum/6;
    return result;
  }
  let percentage=getCalc(English,Hindi,Sanskrit,Maths,social_Science,science);
  document.write(`percentage:${percentage}`);
  alert("percentage:"+percentage);
  document.write("<br>");
  if(percentage>=75&&percentage<=99.99)
  {
    document.write("Distinction");
    alert("Distinction");
    alert("thank u for using have a nice day");

  }
  else if(percentage>=60&&percentage<=74.99)
  {
    document.write("1st division");
    alert("1st division");
    alert("thank u for using have a nice day");

  }
  else if(percentage>=50&&percentage<=59.99){
    document.write("2nd division");
    alert("2nd division");
    alert("thank u for using have a nice day");

  }
  else if(percentage>=33&&percentage<=49.99)
  {
    document.write("3rd division");
    alert("3rd division");
    alert("thank u for using have a nice day");

  }
  else {
    document.write("Fail");
    alert("fail");
    document.write("<br>");
    document.write("Better luck for next time");
    alert("Better luck for next time");
    alert("thank u for using have a nice day");

  }
}
if (choice==3){
  let English=prompt("Enter the english marks");
  let Hindi=prompt("Enter the hindi marks");
  let Maths=prompt("Enter the Maths marks");
  let Physics=prompt("Enter the physics marks");
  let chemistry=prompt("Enter the chemistry marks");
  let getCalc =(English,Hindi,Maths,Physics,chemistry)=>{
    let sum =Number(English)+Number(Hindi)+Number(Maths)+Number(Physics)+Number(chemistry);
    let result=sum/5;
    return result;
  }
  let percentage=getCalc(English,Hindi,Maths,Physics,chemistry);
  document.write(`percentage:${percentage}`);
  alert("percentage:"+percentage);
  document.write("<br>");
  if(percentage>=75&&percentage<=99.99)
  {
    document.write("Distinction");
    alert("Distinction");
    alert("thank u for using have a nice day");

  }
  else if(percentage>=60&&percentage<=74.99)
  {
    document.write("1st division");
    alert("1st division");
    alert("thank u for using have a nice day");

  }
  else if(percentage>=50&&percentage<=59.99){
    document.write("2nd division");
    alert("2nd division");
    alert("thank u for using have a nice day");

  }
  else if(percentage>=33&&percentage<=49.99)
  {
    document.write("3rd division");
    alert("3rd division");
    alert("thank u for using have a nice day");

  }
  else {
    document.write("Fail");
    alert("fail");
    document.write("<br>");
    document.write("Better luck for next time");
    alert("Better luck for next time");
    alert("thank u for using have a nice day");

  }
}
if (choice==4){
  let English=prompt("Enter the english marks");
  let Hindi=prompt("Enter the hindi marks");
  let Biology=prompt("Enter the Biology marks");
  let Physics=prompt("Enter the physics marks");
  let chemistry=prompt("Enter the chemistry marks");
  let getCalc =(English,Hindi,Maths,Physics,chemistry)=>{
    let sum =Number(English)+Number(Hindi)+Number(Biology)+Number(Physics)+Number(chemistry);
    let result=sum/5;
    return result;
  }
  let percentage=getCalc(English,Hindi,Biology,Physics,chemistry);
  document.write(`percentage:${percentage}`);
  alert("percentage:"+percentage);
  document.write("<br>");
  if(percentage>=75&&percentage<=99.99)
  {
    document.write("Distinction");
    alert("Distinction");
    alert("thank u for using have a nice day");

  }
  else if(percentage>=60&&percentage<=74.99)
  {
    document.write("1st division");
    alert("1st division");
    alert("thank u for using have a nice day");

  }
  else if(percentage>=50&&percentage<=59.99){
    document.write("2nd division");
    alert("2nd division");
    alert("thank u for using have a nice day");

  }
  else if(percentage>=33&&percentage<=49.99)
  {
    document.write("3rd division");
    alert("3rd division");
    alert("thank u for using have a nice day");

  }
  else {
    document.write("Fail");
    alert("fail");
    document.write("<br>");
    document.write("Better luck for next time");
    alert("Better luck for next time");
    alert("thank u for using have a nice day");

  }
}
if (choice==5){
  let English=prompt("Enter the english marks");
  let Hindi=prompt("Enter the hindi marks");
  let Management=prompt("Enter the business studies/management marks");
  let Account=prompt("Enter the account marks");
  let Economics=prompt("Enter the economics marks");
  let getCalc =(English,Hindi,Management,Account,Economics)=>{
    let sum =Number(English)+Number(Hindi)+Number(Management)+Number(Account)+Number(Economics);
    let result=sum/5;
    return result;
  }
  let percentage=getCalc(English,Hindi,Management,Account,Economics);
  document.write(`percentage:${percentage}`);
  alert("percentage:"+percentage);
  document.write("<br>");
  if(percentage>=75&&percentage<=99.99)
  {
    document.write("Distinction");
    alert("Distinction");
    alert("thank u for using have a nice day");

  }
  else if(percentage>=60&&percentage<=74.99)
  {
    document.write("1st division");
    alert("1st division");
    alert("thank u for using have a nice day");

  }
  else if(percentage>=50&&percentage<=59.99){
    document.write("2nd division");
    alert("2nd division");
    alert("thank u for using have a nice day");

  }
  else if(percentage>=33&&percentage<=49.99)
  {
    document.write("3rd division");
    alert("3rd division");
    alert("thank u for using have a nice day");

  }
  else {
    document.write("Fail");
    alert("fail");
    document.write("<br>");
    document.write("Better luck for next time");
    alert("Better luck for next time");
    alert("thank u for using have a nice day");

  }
}
if (choice==6){
  let Principle = prompt("Enter the Principal");
  let Rate = prompt("Enter the Rate");
  let Time = prompt("Enter the Time");

  let getCalc = (Principle,Rate,Time)=>{
    return Principle * Rate * Time/100;
  }
  alert("Simple interest:"+getCalc(Principle,Rate,Time));
  alert("thank u for using have a nice day");
  document.write("Enter the principle:"+Principle);
      document.write("<br>");
  document.write("Enter the rate:"+Rate);
      document.write("<br>");
  document.write("Enter the time:"+Time);
      document.write("<br>");
  document.write("Simple interest:"+getCalc(Principle,Rate,Time));

}
 if (choice==7){
   let Principle = prompt("Enter the Principal");
   let Rate = prompt("Enter the Rate");
   let Time = prompt("Enter the Time");

   let getCalc = (Principle,Rate,Time)=>{
     return Principle*Math.pow((1+Rate/100),Time);
   }
   alert("Amount:"+getCalc(Principle,Rate,Time));
   alert("thank u for using have a nice day");
   document.write("Enter the principle:"+Principle);
       document.write("<br>");
   document.write("Enter the rate:"+Rate);
       document.write("<br>");
   document.write("Enter the time:"+Time);
       document.write("<br>");
   document.write("Amount:"+getCalc(Principle,Rate,Time));
 }
 if(choice==8){
   let Principle = prompt("Enter the Principal");
   let Rate = prompt("Enter the Rate");
   let Time = prompt("Enter the Time");

   let getCalc = (Principle,Rate,Time)=>{
     return Principle*Math.pow((1+Rate/100)-1,Time);
   }
   alert("Compound interst:"+getCalc(Principle,Rate,Time));
   alert("thank u for using have a nice day");
   document.write("Enter the principle:"+Principle);
       document.write("<br>");
   document.write("Enter the rate:"+Rate);
       document.write("<br>");
   document.write("Enter the time:"+Time);
       document.write("<br>");
   document.write("Amount:"+getCalc(Principle,Rate,Time));
 }

if(choice==9){
  let a = prompt("Enter the value to find the square root");
  alert("Square root:"+Math.sqrt(a));
  alert("thank u for using have a nice day");
  document.write("Enter the value to find the square root:"+a);
       document.write("<br>");
       document.write("Square root:"+Math.sqrt(a));
}
 //code write
}
