

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function update () 
{
    year = document.f.year;
    month = document.f.month;
    date = document.f.date;

    if(year.value == "" || isNaN(year.value) ) 
    {
     date.value = "Năm không hợp lệ!";
     year.focus();
    }
    else
    {
        switch(month.value) 
        {
            case "1":
            case "3":
            case "5":
            case "7":
            case "8":
            case "10":
            case "12":
                date.value = 31;
                break;
            case "4":
            case "6":
            case "9":
            case "11":
                date.value = 30;
                break;
            case "2":
                date.value = isLeapYear(year.value) ? 29 : 28;
                break;
        }
    }
}