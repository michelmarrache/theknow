/* Hide the Address Bar in iPhone and iOS
http://mobile.tutsplus.com/tutorials/mobile-web-apps/remove-address-bar/
---------------------------------------------------------------------*/
if(!$.browser.msie){
    function hideAddressBar(){
        if(!window.location.hash){
            if(document.height < window.outerHeight){
                document.body.style.height = (window.outerHeight + 50) + 'px';
            }
            setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
        }
    }
    window.addEventListener("load", function(){
        if(!window.pageYOffset) hideAddressBar();
    });
    window.addEventListener("orientationchange",hideAddressBar);
}

// Make it SAFE to use console.log always
(function(b){function c(){}for(var d="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


// Social media sharing functions:
function shareOnFacebook(){
    var fbURL = window.location;
    window.open("http://www.facebook.com/share.php?u=" + fbURL, "", "width=700,height=500,status=yes,toolbar=no,menubar=no");
};
function shareOnTwitter(){
    var twURL = window.location;
    window.open("http://twitter.com/home?status=Check this out at " + twURL, "", "status=yes,toolbar=yes,menubar=yes,scrollbars=yes");
};
function popupWindow(url){
    if("ontouchstart" in document.documentElement || $('body').hasClass('popup')){
        window.location = url;
    } else {
        window.open(url, 'popup', 'scrollbars=yes, width=800, height=600');
    }
};

$(function(){
    if("ontouchstart" in document.documentElement){
    // MOBILE ONLY:
    } else {
    // DESKTOP ONLY:
    }
});
