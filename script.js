
function calculateAge(event) {
    event.preventDefault();
    var birthday = document.getElementById("dob").value;
var years = document.getElementById("years")
var months = document.getElementById("months")
var days = document.getElementById("days")

if(birthday){
    var today = new Date();
    var birthDate = new Date(birthday);
    var year = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    var day = today.getDate() - birthDate.getDate();
    
   
    if (month < 0 || (month === 0 && day < 0)) {
        year--;
        month += 12;
    }

    if (day < 0) {
        month--;
        var previousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        day += previousMonth; 
    }
    
    

    
    years.innerHTML = year + " years";
    months.innerHTML = month + " months";
    days.innerHTML = day + " days";
    
    }else{
    alert("Enter a valid date");
    }


}  