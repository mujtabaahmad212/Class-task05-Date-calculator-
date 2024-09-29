function culcolateTheDate() {
    const startDateInput = document.getElementById('startDate');
    const StartDate = new Date(startDateInput.value)
    const currentDate = new Date ();

    const years = currentDate.getFullYear() - StartDate.getFullYear();
    const months = currentDate.getMonth( ) - StartDate.getMonth();
    const days = currentDate.getDay()  -StartDate.getDay()
     
    
}
