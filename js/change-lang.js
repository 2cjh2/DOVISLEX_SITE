/* 
 *  Author: Anthea Jung
 *  Created: 10/09/2015
 *  Last modified: 10/14/2015
 *  
 *  Redirects the current page to the selected language.  
 */

//  URL of the current page
var currentURL = window.location.href;
//  Splits the URL into an array
var currentPath = window.location.href.split('/');
//  Access the last element of the array, the page name
var currentPage = currentPath[currentPath.length - 1];

/*  When the language link is clicked, calls the function change_language */
document.getElementById('lang-change-en').onclick = change_language('lang-change-en', 'en');
document.getElementById('lang-change-es').onclick = change_language('lang-change-es', 'sp');
document.getElementById('lang-change-fr').onclick = change_language('lang-change-fr', 'fr');
document.getElementById('lang-change-de').onclick = change_language('lang-change-de', 'de');
document.getElementById('lang-change-it').onclick = change_language('lang-change-it', 'it');

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
