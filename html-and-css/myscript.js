 
 var i;
  var fib = []; // Initialize array   
 
var txt1 = " I am HTML, I AM HYPERTEXT-MARKUP LANGUAGE," +
                              "I DEFINE THE CONTENT STRUCTURE OF A WEBPAGE AND THROUGH CSS I ADD M STYLING TO PAGE AND THROUGH JS I ADD MY BEHAVIOUR INTERACTIVE!"
    var str = txt1.substr(5,7);
    var str1 = txt1.substr(7,9);
    console.log(str);
    console.log(str1);
   
var d = new Date();
console.log(d);

var num = 99;
switch(true)
{
  //case values within a range 
    case (num<50):
      console.log("Number is in between 1 to 50\n");     
      break;
    //case values within a range 
    case (num<100):
      console.log("Number is in between 51 to 100\n");
      break;      
    //default case
    default:
      console.log("Number is out of range!!!\n");
      break;    
}
try {

         if(num == "")  throw "empty"; 
        if(isNaN(num))  throw "not a number"; 
        if(num < 10) throw  "number is less than 5"; 
        if(num < 0) throw  "number is negative"; 
        if(num ==0) throw  "number is zero"; 

      if(num>=10 && num<=100)
     {
   
           console.log("Number is in between 51 to 100\n");
      }
      else
          {
              console.log("Number is out of range\n")
          }

    }
       catch(err)
        {
            console.log(err);
        }
          finally
          {
               console.log(" ")
          }


function setOldImage()
{
  document.getElementById("img1").src = "https://i.postimg.cc/MHwCrJmK/myimage.png";
}


fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 10; i++) {

  // Next fibonacci number = previous + one before previous
     fib[i] = fib[i - 2] + fib[i - 1];
      console.log(fib[i]);
 }
$(document).ready(function(){
  $("button").click(function(){
    $("p").toggle();
  });
});
//toggle function
$(document).ready(function(){
  $("div").dblclick(function(){
    $( this ).toggleClass("divsec2");
  });
});

function fadeToggle(div_id, button) {

    if (button.value == 'Fade Out') {
      $('#' + div_id).fadeOut('slow');
      button.value = 'Fade In';
    } else {
      $('#' + div_id).fadeIn(1000);
      button.value = 'Fade Out';
    }
  }
  
  function fadeToToggle(div_id, button) {

    if (button.value == 'FadeTo 50%') {
      $('#' + div_id).fadeTo('slow' , 0.5);
      button.value = 'FadeTo 100%';
    } else {
      $('#' + div_id).fadeTo(3000 , 1.0);
      button.value = 'FadeTo 50%';
    }
  }
