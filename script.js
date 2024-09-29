function culcolateTheDate() {
    const startDateInput = document.getElementById('startDate');
    const StartDate = new Date(startDateInput.value)
    const currentDate = new Date ();

    const years = currentDate.getFullYear() - StartDate.getFullYear();
    const months = currentDate.getMonth( ) - StartDate.getMonth();
    const days = currentDate.getDay()  -StartDate.getDay();

    if ( days < 0){
        months--;
        const daysInlastmonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0).getDate();
        days += daysInlastmonth;
        
        
    
}
if (months <0){+-

    years--;
    months += 12;

}
document.getElementById('years').textContent = years;
document.getElementById('months').textContent = months;
document.getElementById('days').textContent = days;
}