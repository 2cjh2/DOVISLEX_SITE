/* 
 *  Author: Anthea Jung
 *  Created: 10/27/2015
 *  Last modified: 10/27/2015
 *  
 *  Instead of using css (traduzioni.css) to fill the empty elements or 
 *  to fill the elements with new tranlsation, loadContents() function 
 *  is used to place the given value to the element with the given id.
 *  Depending on if the element is empty or not, value is either appended 
 *  or replaced */

function loadContents() {
    // azioni_UE.html
    appendORreplace('#L55', "against German companies suspected of breaking the rules of European competition Law (Articles 101 and 102 TFEU);");
    appendORreplace('#L56', "against Italy for having planned and implemented fiscal measures to be considered State aid incompatible with the European rules (Articles 107 and 108 TFEU);");
    appendORreplace('#L57', "against Italy for violation by the local customs authorities, of the Community legislation on the rights to health inspection;");
    appendORreplace('#L58', "against Poland for violation by the regional authorities of the European legislation on the environment and the principles of freedom of establishment and provision of services, having refused - it is believed for discriminatory reasons based on nationality - to a Polish company with Italian capital the authorization to operate a waste disposal plant in Poland.");


    // concorrenza.html   
    appendORreplace('#L1', "actions to oppose fines imposed by the European Commission for anti-competitive agreements in the steel sector;");
    appendORreplace('#L24', "against other companies suspected of breaking the rules of European competition law (Articles 101 and 102 TFEU);");
    appendORreplace('#L3', "against Member States suspected of having planned and / or implemented State aid incompatible with the European rules (Articles 107 and 108 TFEU).");
    appendORreplace('#L25', "against German companies that had de facto imposed in the photovoltaic sector, contracts for the supply of silicon wafers containing clauses which were overly restrictive of competition or otherwise an abuse of their dominant position;");
    appendORreplace('#L26', "against Italy for having established an unfair and discriminatory system of financing the activity of its Competition Authority.");


    // settori.html
    appendORreplace('#L28', "action for annulment of a decision by the Commission by which an investment project for the rationalization of the production of dehydrated alfalfa had been excluded from Community financing;");
    appendORreplace('#L29', "action against the rejection, by the Commission, of a bid in a tender for the sale of Community barley held by the Austrian authority;");


    // trademarks.html
    appendORreplace('#L17', "initiate an action of invalidity for a trademark already granted to another entity.");
    appendORreplace('#L18', "seeking to have a trademark declared invalid or revoked");
    appendORreplace('#L19', "appeal to the Boards of Appeal");
    appendORreplace('#L20', "appeal to the Court of the European Union against decisions of the Boards of Appeal");
}

/* If an element is empty, then appends value.
 * If an element is not empty, then replaces the innerHTML with a given value */
function appendORreplace(id, value) {
    if ($(id).html() === "") {
        $(id).append(value);
    } else {
        $(id).text(value);
    }
}