var rgScripts = rgScripts || {};

$(function() {
    var data = ''
    console.log( "ready!" );
    "use strict";
    $.extend(rgScripts, {
        core: {
            
            display_now_and_next: function() {
                
                function get_day() {
                    switch (new Date().getDay()) {
                        case 0:
                            day = "Sunday";
                            break;
                        case 1:
                            day = "Monday";
                            break;
                        case 2:
                            day = "Tuesday";
                            break;
                        case 3:
                            day = "Wednesday";
                            break;
                        case 4:
                            day = "Thursday";
                            break;
                        case 5:
                            day = "Friday";
                            break;
                        case 6:
                            day = "Saturday";
                            break;
                    }
                    return day
                };

                function get_curr_hour() {
                    switch (new Date().getHours()) {
                        case 0:
                            cHour = "hr0";
                            nHour = "hr1";
                            break;
                        case 1:
                            cHour = "hr1";
                            nHour = "hr2";
                            break;  
                        case 2:
                            cHour = "hr2";
                            nHour = "hr3";
                            break; 
                        case 3:
                            cHour = "hr3";
                            nHour = "hr4";
                            break; 
                        case 4:
                            cHour = "hr4";
                            nHour = "hr5";
                            break; 
                        case 5:
                            cHour = "hr5";
                            nHour = "hr6";
                            break;
                        case 6:
                            cHour = "hr6";
                            nHour = "hr7";
                            break;
                        case 7:
                            cHour = "hr7";
                            nHour = "hr8";
                            break;
                        case 8:
                            cHour = "hr8";
                            nHour = "hr9";
                            break;
                        case 9:
                            cHour = "hr9";
                            nHour = "hr10";
                            break;
                        case 10:
                            cHour = "hr10";
                            nHour = "hr11";
                            break;
                        case 11:
                            cHour = "hr11";
                            nHour = "hr12"; 
                            break;
                        case 12:
                            cHour = "hr12";
                            nHour = "hr13";
                            break;
                        case 13:
                            cHour = "hr13";
                            nHour = "hr14";
                            break;
                        case 14:
                            cHour = "hr14";
                            nHour = "hr15";
                            break;
                        case 15:
                            cHour = "hr15";
                            nHour = "hr16";
                            break;
                        case 16:
                            cHour = "hr16";
                            nHour = "hr17";
                            break;
                        case 17:
                            cHour = "hr17";
                            nHour = "hr18";
                            break;
                        case 18:
                            cHour = "hr18";
                            nHour = "hr19";
                            break;
                        case 19:
                            cHour = "hr19";
                            nHour = "hr20";
                            break;
                        case 20:
                            cHour = "hr20";
                            nHour = "hr21";
                            break;
                        case 21:
                            cHour = "hr21";
                            nHour = "hr22";
                            break;
                        case 22:
                            cHour = "hr22";
                            nHour = "hr23";
                            break;
                        case 23:    
                            cHour = "hr23";
                            nHour = "hr0";
                            break;
                    }
                    return cHour;
                };

                function get_mins() {
                    new Date().getMinutes();
                };

                function showTable() {
                    var day = get_day();
                    var thisHour = get_curr_hour();
                    //var nextHour = get_curr_hour().nHour;
                    var dataNow = programs[day][thisHour];
                    //var dataNext = programs[day][nextHour];
                    console.log(dataNow)
                    var divContentNow = "<table>" + "<tr><td><h3>" + dataNow.presenter + "</h3></td></tr>" + "<tr><td><i> presents </i></td></tr>" + 
                    "<tr><td><h4>" + dataNow.prog_name + "<h4></td></tr>" + "<tr><td>" + dataNow.prog_desc + "</td></tr>" +"<tr><td>" + 
                    "<img src='" + dataNow.image + "'>" + "</table>";
                    
                    var divContentNext = "<table>" + "<tr><td><h3>" + dataNext.presenter + "</h3></td></tr>" + "<tr><td><i> presents </i></td></tr>" + 
                    "<tr><td><h4>" + dataNext.prog_name + "<h4></td></tr>" + "<tr><td>" + dataNext.prog_desc + "</td></tr>" +"<tr><td>" + 
                    "<img src='" + dataNext.image + "'>" + "</table>";
                    // Display the program details on the page
                    document.getElementById("onair-body").innerHTML = divContentNow;
                };
                showTable();
            },
            

            get_is_studio_live: function() {
                var time_hour = new Date().getHours()
                var image = "images/off_air.png";
                var image_alt = "off_air"
                if (time_hour >= 19 && time_hour < 22) {
                    image = "images/on_air.png";
                } 
                document.getElementById("info-light").innerHTML = "<img src=" + image + " alt=" + image_alt + ">"
            },

            /*program_info: function() {

                var count = 1
                var myVar = setInterval(onairTimer, 10000);
                function Timer() {
                    count = count+1;
                    if (count > 4) {
                        count = 1  
                    }
                    fader();
                }
                function fader() {
                    var onair_data = onair[count]
                    $('#info-body').fadeOut('slow', 
                        function() {
                            $('#onair-body').replaceWith("<div id='onair-body'>" + "<table>" + 
                            "<tr><td><h3>" + data1.presenter + "</h3></td></tr>" +
                            "<tr><td><i> presents </i></td></tr>" +
                            "<tr><td><h4>" + data1.prog_name + "<h4></td></tr>" +
                            "<tr><td>" + data1.prog_desc + "</td></tr>" +
                            "<tr><td>" + "<img src='" + data1.image + "'>" + 
                            "</table>" + "</div>");
                            $('#onair-body').fadeIn(2000);
                    });
                }
            },*/

            mDown: function() {
                $(".light").mousedown(function() {
                    var mic_status = 'images/mic_live1.png'
                    document.getElementById("onair-light").innerHTML = "<img src=" + mic_status + "></img>";
                })
            },

            mUp: function() {
                $(".light").mouseup(function() {
                    var mic_status = 'images/mic_off1.png'
                    //obj.style.backgroundColor="#D94A38";
                    document.getElementById("onair-light").innerHTML = "<img src=" + mic_status + "></img>";
                });
            },

            show_info_table: function() {
                var count = 1
                var myVar = setInterval(infoTimer, 10000);
                function infoTimer() {
                    count = count+1;
                    if (count > 4) {
                        count = 1  
                    }
                    fader();
                }
                function fader() {
                    var info_data = info[count]
                    $('#info-body').fadeOut('slow', 
                        function() {
                            $('#info-body').replaceWith("<div id='info-body'>" + "<table>" + 
                            "<tr><td><h3>" + info_data.row1 + "</h3></td></tr>" +
                            "<tr><td><i>" + info_data.row2 + "</i></td></tr>" +
                            "<tr><td><h4>" + info_data.row3 + "<h4></td></tr>" +
                            "<tr><td>" + "<img src='" + info_data.image + "' height='80%'>" + 
                            "</table>" + "</div>");
                        $('#info-body').fadeIn(2000);
                    });
                }
            },

            init: function() {
                rgScripts.core.display_now_and_next();
                rgScripts.core.get_is_studio_live();
                rgScripts.core.mDown();
                rgScripts.core.mUp();
                rgScripts.core.show_info_table();
            }
        }
    });
    rgScripts.core.init();
});