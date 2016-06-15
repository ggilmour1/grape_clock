var rgClock = rgClock || {};

$(function() {
    var data = ''
    console.log( "ready!" );
    "use strict";
    $.extend(rgClock, {
        core: {
      
            var canvas = document.getElementById("canvas");
            var clock = canvas.getContext("2d");
            var count = canvas.getContext("2d");
            var radius = canvas.height / 2;
            clock.translate(radius, radius);
            radius = radius * 0.90
            setInterval(drawClock , 1000);
            
    
            drawLogo: function(clock) {
                var img = document.getElementById("logo",100,100);
                clock.drawImage(img, -100, -225);    
            },


            drawDate: function(clock) {
                var now = new Date();
                clock.font = "32px Arial";
                clock.fillStyle = 'white';
                clock.fillText(now.toDateString() ,0,120);
            },

            drawTimeDig: function(clock) {
                var now = new Date();
                var hour24 = ('0' + now.getHours()).slice(-2);
                var minute = ('0' + now.getMinutes()).slice(-2);
                var second = ('0' + now.getSeconds()).slice(-2);
                var text = hour24 + ":" + minute + ":" + second;
                clock.font = "40px Arial";
                clock.fillStyle = 'white';
                clock.fillText(text, 0, 160);
            },

            drawFace: function(clock, radius) {
                var now = new Date();
                var mins = now.getMinutes();
                clock.beginPath();
                clock.arc(0, 0, radius, 0, 2*Math.PI);
                clock.fillStyle = 'black';
                clock.fill();
                clock.lineWidth = radius*0.1;
                clock.stroke();
                clock.beginPath();
                clock.arc(0, 0, radius*0.03, 0, 2*Math.PI);
                clock.fillStyle = '#000000';
                clock.fill();
                clock.closePath();
            },

            drawCentreSec: function(clock, radius) {
                clock.beginPath();
                clock.arc(0, 0, radius*0.03, 0, 2*Math.PI);
                clock.fillStyle = 'red';
                clock.fill();
            },

            drawCountdown: function(count, radius) {
                // This will trigger the news countdown timer to fire and show 
                // on the clockface  
                var cnow = new Date();
                var mins = cnow.getMinutes();
                var secs = cnow.getSeconds();
                var countin = 60 - secs

                if (secs >= 48 && secs <=60 && mins == 59 ) {
                    var rads = ((secs-15)*0.0333) * Math.PI;
                    count.font = "38px Trebuchet MS"
                    count.fillText("Standby for News",0,35);
                    count.beginPath();
                    count.strokeStyle = 'red';
                    count.arc(0,0,radius-35,rads,1.5*Math.PI);
                    count.lineWidth = 35
                    count.stroke();
                    count.closePath();
                };
            },

            drawNumbers: function(clock, radius) {
                var ang;
                var num;
                var ins = 0.80
                clock.font = radius*0.17 + "px arial";
                clock.textBaseline="middle";
                clock.textAlign="center";
                for(num= 1; num < 13; num++){
                    ang = num * Math.PI / 6;
                    clock.rotate(ang);
                    clock.translate(0, -radius*ins);
                    clock.rotate(-ang);
                    clock.fillText(num.toString(), 0, 0);
                    clock.rotate(ang);
                    clock.translate(0, radius*ins);
                    clock.rotate(-ang);
                };
            },

            drawMinMarks: function(clock, radius) {     
                for (i=0;i<12;i++){
                    clock.rotate(Math.PI/6);
                    clock.moveTo(radius-5,0);
                    clock.lineTo(radius-20,0);
                    clock.strokeStyle = 'white';
                }
                clock.stroke();
                clock.restore();   
                
                // Minute marks
                clock.save();
                clock.lineWidth = 1;
                clock.beginPath();
                for (i=0;i<60;i++){
                    if (i%5!=0) {
                        clock.moveTo(radius-5,0);
                        clock.lineTo(radius,0);
                    }
                    clock.rotate(Math.PI/30);
                }
                clock.stroke();
                clock.restore(); 
            },

            drawTime: function(clock, radius){
                var now = new Date();
                var hour = now.getHours()%12;
                var minute = now.getMinutes();
                var second = now.getSeconds();
                
                //hour
                hour = (hour * Math.PI/6) + (minute * Math.PI/(6 *60))+(second*Math.PI/(360*60));
                drawHand(clock, hour, radius*0.5, radius*0.03, 'white');
        
                //minute
                minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
                drawHand(clock, minute, radius*0.8, radius*0.03, 'white');
        
                // second
                second = (second*Math.PI/30);
                drawHand(clock, second, radius*0.9, radius*0.01, 'red');
            },

            drawHand: function(clock, pos, length, width, color) {
                clock.beginPath();
                clock.strokeStyle = color;
                clock.lineWidth = width;
                clock.moveTo(0,0);
                clock.rotate(pos);
                clock.lineTo(0, -length);
                clock.stroke();
                clock.rotate(-pos);
                clock.closePath();
            },

            drawClock: function() {
                rgClock.core.drawFace(clock, radius);
                rgClock.core.drawNumbers(clock, radius);
                //drawMinMarks(clock, radius);
                rgClock.core.drawlLogo(clock);
                rgClock.core.drawTime(clock, radius);
                rgClock.core.drawDate(clock);
                rgClock.core.drawTimeDig(clock);
                rgClock.core.drawCountdown(count, radius);
                rgClock.core.drawCentreSec(clock, radius);
                rgClock.core.drawMinMarks(clock, radius);
            }

    
        }
    });
    rgScripts.core.drawClock();
});