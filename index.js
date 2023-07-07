//time_state = true (start counting) 
//time_state = false (stop counting secs)
let timer_status = false;

//default value for Timer since it start from zero
let mins = 0;
let secs = 0;
let microsec = 0;
let deg = 0;
let ori_sec = ""
let ori_msec = ""
let ori_min = ""


//timer initialization
//the timer() function executer every 10millsec 
var intraval = setInterval(timer, 10)

//timer function
function timer() {
    if (timer_status) {

        //keep on count for number of 10milliseconds executed
        microsec++;

        //if 10millisec executer 100 times it will produce 1000ms equals to 1sec
        if (microsec == 100) {

            //every 1000ms sec incremented and microssec rest to 0
            secs++;
            microsec = 0;

            //this deg for nail .. cirlce has 360deg for each 1sec we need to shift 6deg so 60sec will cover 360deg 
            //this set to div to rorate the respective div
            deg = deg + 6;
            let ele = document.getElementById('watchi')
            ele.style.transform = `rotate(${deg}deg)`
        }
        if (secs == 60) {
            //if sec == 60 increment min and reset sec  to zero
            mins++;
            secs = 0;
        }

        //calculated values are conver to string and ready to set HTML values
        ori_msec = microsec <= 9 ? "0" + microsec : microsec
        ori_sec = secs <= 9 ? "0" + secs : secs
        ori_min = mins <= 9 ? "0" + mins : mins

        document.getElementById('mins').innerHTML = ori_min;
        document.getElementById('sec').innerHTML = ori_sec;
        document.getElementById('msec').innerHTML = ori_msec;
    }
}

function reset() {

    //when we click the reset button we need to pause the time and make all values to default and make the pointer to zero deg
    timer_status = false;
    mins = 0;
    secs = 0;
    microsec = 0;

    ori_msec = "00"
    ori_sec = "00"
    ori_min = "00"

    //pointer is set to zero deg 
    deg = 0;
    let ele = document.getElementById('watchi')
    ele.style.transform = `rotate(${deg}deg)`

    document.getElementById('mins').innerHTML = ori_min;
    document.getElementById('sec').innerHTML = ori_sec;
    document.getElementById('msec').innerHTML = ori_msec;

}

const starttimer = () => {
    //start /stop button can used to setintraval to set the corresponding values
    timer_status = !timer_status

}