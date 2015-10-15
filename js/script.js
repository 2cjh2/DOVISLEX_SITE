/**
 * Created with IntelliJ IDEA.
 * User: danielabecker
 * Date: 8/9/15
 * Time: 6:44 PM
 * To change this template use File | Settings | File Templates.
 */

/* A cookie is a piece of data stored locally by the user's browser.
 * Cookies are used to keep track of user's activities (ex. shopping cart)
 * But,
 * 
 *  A function to set a Cookie,
 *  Three parameters:
 *      cname = name of the cookie,
 *      cvalue = value of the cookie
 *      exdays = the day cookie should expire */
function setCookie(cname, cvalue, exdays) {
    var expires;         
    if (exdays === 0) {
        expires = '';   /* empty string means, cookie will be deleted after 
                           the browser is close */
    } else {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        expires = "expires=" + d.toGMTString();
    }
    /*  if type of domain is undefined, then domain is set to an empty string 
     *  which defaults to the host portion of the current document location.
     *  Else, the domain page is where the cookie will be readable.
     *  Specified domain does not include subdomains */
    var domain = (typeof domain === "undefined") ? '' : "; domain="+domain;
    document.cookie = cname + "=" + cvalue + "; " + expires + "path=" + path + domain;
}

//alert(typeof domain);
//alert(document.cookie);

/*  document.cookie is saved to an array splited by ';'
 *  It looks for the name of the cookie in the document
 *  and return the content of the cookie if found.
 *  Else, return san empty string */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/*  same function used in all header.html provided by Google 
 *  for translation */

//Google provides this function
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es',
        includedLanguages: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    },'google_translate_element');
}

//Using jQuery
/*  When the page is ready for javascript, this runs only once. */
$(document).ready(function() {
    $(document).on('click','#lang-change-en', function() {
        //when the element with id 'lang-change-en', it creates two cookies
        setCookie('googtrans', '/es/en', 0); // not sure why 'es/en' is passed
        setCookie('googtrans', '', 0);       
        location.reload(); //reloads the current page 
    });

    $(document).on('click', '#lang-change-es', function() {
        //when the element with id 'lang-change-es', it creates two cookies
        setCookie('googtrans', '', 0);
        setCookie('googtrans', '', 0);
        location.reload(); //reloads the current page 
    });
    
    // gets the content of cookie name 'googtrans'
    var googTrans = getCookie('googtrans');

    //if the content received equals '/es/en' then replaces the image
    // and changed the id of lang-change-en to lang-change-es
    if (googTrans === '/es/en') {
        var src = $('#lang-change-en > img').attr('src').replace('en-flag', 'es-flag');
        $('#lang-change-en > img').attr('src', src);
        $('#lang-change-en').attr('id', 'lang-change-es');
    }
});
