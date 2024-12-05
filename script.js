let countdown;
seconds = 0

function displayTimer(){
    var newTime = document.createElement("p");
    newTime.innerHTML = seconds;
    document.getElementById("timer").appendChild(newTime);
    
}

function Timer(){
    displayTimer()

    if (seconds === 0 ){
        alert("Таймер закончился! Звонок");
        clearInterval(countdown)
    }
    seconds = seconds - 1 
}

    function startTimer(){
    var timeInput = document.getElementById("timeInput").value;

    seconds = parseInt(timeInput)
    
    if (seconds <=0){
        alert("Введите положительное число");
        return;
    }

    countdown = setInterval(Timer, 1000);
}