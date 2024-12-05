let countdown;
seconds = 0

function displayTimer(){
    var newTime = document.createElement("p");
    newTime.innerHTML = formatTime(seconds);
    var parent = document.getElementById("timer");
    var oldTime = parent.firstChild;

    parent.replaceChild(newTime, oldTime);
    
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


function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
  
    var formattedMinutes = String(minutes).padStart(2, '0');
    var formattedSeconds = String(remainingSeconds).padStart(2, '0');
  
    return formattedMinutes + ':' + formattedSeconds;
}