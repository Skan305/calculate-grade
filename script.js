// calculation of grade your marks


let marks = prompt("Enter Your Marks");
if (marks > 100 ){
    alert("Your Marks is Out  of range")
}
else if ( marks >= 90 && marks <= 100)
 {
    alert("your marks is " + marks + " " + "yor grade is A+")
 }
 else if( marks >= 80 && marks <= 89)
    {
       alert("your marks is " + marks + " " + "yor grade is A")
    }
    else if( marks >= 70 && marks <= 79)
        {
           alert("your marks is " + marks + " " + "yor grade is B")
        }   
        else if( marks >= 60 && marks <= 69)
            {
               alert("your marks is " + marks + " " + "yor grade is C")
            }          
            else if( marks >= 50 && marks <= 59)
                {
                   alert("your marks is " + marks + " " + "yor grade is D")
                }              
                else{
                    alert("Your are fail")
                }