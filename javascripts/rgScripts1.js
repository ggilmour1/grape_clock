var rgScripts = rgScripts || {};

$(function() {
    var data = ''
    console.log( "ready!" );
    "use strict";
    $.extend(rgScripts, {
        core: {

            mDownMic: function() {
                $(".mic-status").mousedown(function() {
                    var mic_status = '../images/mic_live1.png'
                    document.getElementById("mic-status").innerHTML = "<img src=" + mic_status + "></img>";
                })
            },

            mUpMic: function() {
                $(".mic-status").mouseup(function() {
                    var mic_status = '../images/mic_off1.png'
                    document.getElementById("mic-status").innerHTML = "<img src=" + mic_status + "></img>";
                });
            },

            mDownStudio: function() {
                $(".studio-status").mousedown(function() {
                    var studio_status = '../images/studio_live1.png'
                    document.getElementById("studio-status").innerHTML = "<img src=" + studio_status + "></img>";
                })
            },

            mUpStudio: function() {
                $(".studio-status").mouseup(function() {
                    var studio_status = '../images/studio_off1.png'
                    document.getElementById("studio-status").innerHTML = "<img src=" + studio_status + "></img>";
                });
            },

            mDownAuto: function() {
                $(".auto-status").mousedown(function() {
                    var auto_status = '../images/automation_on.png'
                    document.getElementById("auto-status").innerHTML = "<img src=" + auto_status + "></img>";
                })
            },

            mUpAuto: function() {
                $(".auto-status").mouseup(function() {
                    var auto_status = '../images/automation_off.png'
                    document.getElementById("auto-status").innerHTML = "<img src=" + auto_status + "></img>";
                });
            },

            mDownPhone: function() {
                $(".phone-status").mousedown(function() {
                    var phone_status = '../images/phone_on.png'
                    document.getElementById("phone-status").innerHTML = "<img src=" + phone_status + "></img>";
                })
            },

            mUpPhone: function() {
                $(".phone-status").mouseup(function() {
                    var phone_status = '../images/phone_off.png'
                    document.getElementById("phone-status").innerHTML = "<img src=" + phone_status + "></img>";
                });
            },

            init: function() {
                rgScripts.core.mDownMic();
                rgScripts.core.mUpMic();
                rgScripts.core.mDownStudio();
                rgScripts.core.mUpStudio();
                rgScripts.core.mDownAuto();
                rgScripts.core.mUpAuto();
                rgScripts.core.mDownPhone();
                rgScripts.core.mUpPhone();
            }
        }
    });
    rgScripts.core.init();
});