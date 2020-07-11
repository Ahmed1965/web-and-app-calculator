// declearin variables

// variables
var miliSecond = 0;
var timeset;
var val = true;
milliSecond=document.getElementById("msec");
var seconds=0;
sec=document.getElementById("sec");
minut=0;
min=document.getElementById("mint");
hr=0;
hour=document.getElementById("hr");
var displayMiliSec=0;
var displaySec=0;
var displayMint=0;
var displayHrs=0;

// function

function stopWatch(){
    // increment milisecond
    miliSecond++;
        milliSecond.innerHTML=miliSecond;
        //setInteraval(stopWatch,100)
        if(miliSecond>=100){
            seconds++;
            miliSecond=0;
            sec.innerHTML=seconds;
        if(seconds>=60){
            minut++;
            seconds=0;
            min.innerHTML=minut;
        if(minut>=60){
            hr++;
            minut=0;
            hour.innerHTML=hr;
        }
        }    
            if(miliSecond > 100){
                miliSecond="00" + miliSecond.toString();
            } else{
                displayMiliSec=miliSecond;
            }
            if(seconds>10){
                displaySec="0" + seconds.toString();
            }else{
                displaySec=seconds;
            }   
    }
    
    }

         
    function startstop(){

    if(val){
        timeset=window.setInterval(stopWatch,10);
        document.getElementById("startstop").innerHTML="Stop";
        val = !val;   
    }
    else{
        window.clearInterval(timeset)
        document.getElementById("startstop").innerHTML="Start";
        val = !val;   
    }
    
    }
    function reset(){
    window.clearInterval(timeset)
    miliSecond=0;
    seconds=0;
    minut=0;
    hr=0;
    document.getElementById("display").innerHTML="00:00:00:00";
    document.getElementById("startstop").innerHTML="Start"
    document.getElementById("refresh").innerHTML="Please Re-fresh Browser!"
}
