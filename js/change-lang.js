/* 
 *  Author: Anthea Jung
 *  Created: 10/09/2015
 *  Last modified: 10/13/2015
 *  
 *  Redirects the current page to the selected language.  
 */

//  URL of the current page
var currentURL = window.location.href;
//  Splits the URL into an array
var currentPath = window.location.href.split('/');
//  Access the last element of the array, the page name
var currentPage = currentPath[currentPath.length - 1];

/*  When the language link is clicked, calls the function lang_handler */
document.getElementById('lang-change-en').onclick = lang_handler;
document.getElementById('lang-change-es').onclick = lang_handler;
document.getElementById('lang-change-fr').onclick = lang_handler;
document.getElementById('lang-change-de').onclick = lang_handler;
document.getElementById('lang-change-it').onclick = lang_handler;

/*  when "click" event is trigger, it looks up the element id that 
 *  triggered the event and matches it with the correct language,
 *  and calls change_language */
function lang_handler(event) {
    var id = event.target.id;
    if(id === "lang-change-en") {
        change_language(id, "en"); 
    } else if(id === "lang-change-es") {
        change_language(id, "sp"); 
    } else if(id === "lang-change-fr") {
       change_language(id, "fr"); 
    } else if(id === "lang-change-de") {
       change_language(id, "de"); 
    } else { //if(id === "lang-change-it")
       change_language(id, "it"); 
    }
}

/*  Takes two parameters: the id of the element and the language selected by the user
 *  Creates a new path and replaces the href attribute to the created path */
function change_language(id, selectedLanguage) {
    var newPath = "";
    for (i = 0; i < currentPath.length - 1; i++) {
        /*  currentPath.length - 2 is where language element is 
         *  located in the URL  */
        if(i === currentPath.length - 2) {
            newPath += selectedLanguage;
        } else {
            newPath += currentPath[i];
        }
        newPath += "/";
    }
    document.getElementById(id).href= newPath + currentPage;
};
