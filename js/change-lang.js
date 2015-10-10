/* 
 *  Author: Anthea Jung
 *  Created: 10/09/2015
 *  Redirects the current page to the selected language.  
 */

//  the filename of the current page 
var currentPage = window.location.pathname.split('/')[3];

/*  when a different language is selected, current page is opened with the
    selected language */
var links = document.getElementsByTagName('a');
for (var i in links) {
    links[i].onclick = function() {
        // changes the href attribute to a new URL
        this.setAttribute("href", "../" + this.text + "/" + currentPage);
    };
}