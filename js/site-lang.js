
/* Get the language of the browser, stores it in a variable called userLang */
////var userLang = navigator.language || navigator.userLanguage;
//console.log(userLang);

/* If the language of the browser is english, then it adds EN class to
 * an element with a class named article-title */
//function tooltip() {
//    if (userLang == "en-US") {
//
//        $('.article-title').addClass('EN');
//    }
//}

// This code is not longer needed. Now the website is built with 3 folders SP,EN and IT each of them are translated by hand.


//var langSelected = "Select Language";

/* hides the element with the id navigationId */
//$('#navigationId').hide();

/* this function below is executed repeatedly with a time delay of 2seconds  
 * It looks for the current language and replaces the navigationID element 
 * with a new navigationId element with correct css file for each language
 * and adds a calss called "translate" or "no translate" to the page */
//window.setInterval(function () {
//    var lang = $(".goog-te-menu-value span:first").text();
//
//    if (lang != langSelected) {
//        if (lang == "Spanish") {
//
//            $('#navigationId').replaceWith('<link id=\"navigationId\"rel=\'stYlesheet\' type=\'text/css\' href=\'../css/navigation_SP.css\'/>')
//            $('#page').addClass('translate')
//
//        }
//        else if (lang == "German") {
//            $('#navigationId').replaceWith('<link id=\"navigationId\"rel=\'stylesheet\' type=\'text/css\' href=\'../css/navigation_DE.css\'/>')
//            $('#page').addClass('translate')
//        }
//        else if(lang == "French")  {
//            $('#navigationId').replaceWith('<link id=\"navigationId\"rel=\'stylesheet\' type=\'text/css\' href=\'../css/navigation_FR.css\'/>')
//            $('#page').addClass('translate')
//        }
//        else if(lang == "English")  {
//            $('#navigationId').replaceWith('<link id=\"navigationId\"rel=\'stylesheet\' type=\'text/css\' href=\'../css/navigation_EN.css\'/>')
//            $('body').addClass('notranslate');
//            $("main-content").addClass("notranslate");
//        }
//        else {
//            $('body').addClass('notranslate');
//            $("main-content").addClass("notranslate");
////                $('#navigationId').replaceWith('<link id=\"navigationId\"rel=\'stylesheet\' type=\'text/css\' href=\'navigation.css\'/>')
//            }
//        }}, 2000);



