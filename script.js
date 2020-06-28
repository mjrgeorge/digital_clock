function digitalClock() {
    let date = new Date();
    let hour = date.getHours();
    let minutue = date.getMinutes();
    let second = date.getSeconds();
    let timeFormate = 'AM';
    let currentDate = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    if (hour === 0) {
        hour = 12;
    };
    if (hour > 12) {
        hour = hour - 12;
        timeFormate = 'PM';
    };
    if (hour < 10) {
        hour = `0${hour}`;
    };
    if (minutue < 10) {
        minutue = `0${minutue}`;
    };
    if (second < 10) {
        second = `0${second}`;
    };
    if (currentDate < 10) {
        currentDate = `0${currentDate}`;
    };
    if (month < 10) {
        month = `0${month}`;
    };
    if (year < 10) {
        year = `0${year}`;
    };

    document.getElementById('time_format').innerHTML = timeFormate;

    let finalTime = `${hour}:${minutue}:${second}`;
    document.getElementById('time').innerHTML = finalTime;
    let finalDate = `${currentDate}-${month}-${year}`;
    document.getElementById('my_date').innerHTML=finalDate;
};

setInterval(digitalClock, 1000);