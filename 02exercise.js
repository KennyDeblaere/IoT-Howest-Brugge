/**
 * Created by Kenny Deblaere
 * Make 2 lights go on and off,
 * but when the one is off, the other is on.
 * You can see the picture at exercise02.jpg
 */
digitalWrite(7,0);
digitalWrite(6,1);
var yellowLightOn = true;
var lightShow = function(){
    if(yellowLightOn){
        yellowLightOn = false;
        digitalWrite(7,1);
        digitalWrite(6,0)
    } else {
        yellowLightOn = true;
        digitalWrite(7,0);
        digitalWrite(6,1);
    }
};

setInterval(lightShow,500);