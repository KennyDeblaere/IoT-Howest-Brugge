/**
 * Created by Kenny Deblaere
 *  The meaning of this exercise is to make a light beep on and off
 *  You can see the picture at exercise01.jpg
 */

displayWrite(6,1);
var on = true;
var a = function(){
    if(on){
        digitalWrite(6,0);
        on = false;
    }
    else{
        digitalWrite(6,1);
        on = true;
    }
};

setInterval(a,500);
