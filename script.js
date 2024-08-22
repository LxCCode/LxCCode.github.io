var flag = 0;
var time = 0;
var ease = 1;
var hour1 = 0;
var minute1 = 0;
var second1 = 0;
var myTime = setInterval(function(){myTimer()},1000);
var recordTime = setInterval(function(){recordTimer()},100);

function recordTimer() {
    if(ease == 1)
    {
        hour1 = document.getElementById('hour').value;
        minute1 = document.getElementById('minute').value;
        second1 = document.getElementById('second').value;
        if(Number(hour1) < 0)
        {
            document.getElementById('hour').value = 0;
        }
        if(Number(hour1) > 99)
        {
            document.getElementById('hour').value = 99;
        }
        if(Number(minute1) < 0)
        {
            document.getElementById('minute').value = 0;
        }
        if(Number(minute1) > 59)
        {
            document.getElementById('minute').value = 59;
        }
        if(Number(second1) < 0)
        {
            document.getElementById('second').value = 0;
        }
        if(Number(second1) > 59)
        {
            document.getElementById('second').value = 59;
        }
        time = Number(hour1) * 3600 + Number(minute1) * 60 + Number(second1);
    }
}

function myTimer() {
    var t = ToString(time);
    document.getElementById("time").innerHTML=t;
    if(flag == 1) {
        if(time == 0)
        {
            end();
        }
        else {
            time--;
        }
    }
}

function ToString() {
    var hour = (time - time % 3600) / 3600;
    var minute = ((time - hour * 3600) - (time - hour * 3600) % 60) / 60;
    var second = time - hour * 3600 - minute * 60;
    var hour_m = `${hour}`;
    var minute_m = `${minute}`;
    var second_m = `${second}`;
    if(hour < 10)
    {
        hour_m = `0${hour}`
    }
    if(minute < 10)
    {
        minute_m = `0${minute}`
    }
    if(second < 10)
    {
        second_m = `0${second}`
    }        
    return `${hour_m}:${minute_m}:${second_m}`;
}

function Switch() {
    if(flag == 0)
    {
        flag = 1;
        document.getElementById("start_pause").innerHTML=`pause`;
    }
    else{
        flag = 0;
        document.getElementById("start_pause").innerHTML=`start`;
    }
}

function end(){
    flag = 0;
    time = 0;
    ease = 1;
    document.getElementById('hour').disabled = false;
    document.getElementById('minute').disabled = false;
    document.getElementById('second').disabled = false;
    document.getElementById('hour').value = '';
    document.getElementById('minute').value = '';
    document.getElementById('second').value = '';
    document.getElementById("start_pause").innerHTML=`start`;
}

function disableInput() {
    ease = 0;
    document.getElementById('hour').disabled = true;
    document.getElementById('minute').disabled = true;
    document.getElementById('second').disabled = true;
}