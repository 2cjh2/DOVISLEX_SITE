function loadSiteParts() {
    // $('#navigation').load('navigation.html');
    
    /* For the repetitive elements on every page, a seperate html file is 
     * created to load for each language so that you only write the code once, 
     * and can be used in multiple files. -A 10/09/2015 */
    $('#header').load('header.html');
    $('#navigation').load('navigation.html');
    $('#contenzioso').load('contenzioso_table.html');
    /* this may be just part of contenzioso page. For now it gets ignored by any other page. L 2/20/2015 */
    $('#buttons-container').load('buttons.html');
    /*$('#navigation-bottom').load('header.html');*/
    $('#colophon').load('footer.html');
    
    /* The addclass('notranslate') stops google translate from translating
     * the header and the footer. -A 10/09/2015 */
    $('header').addClass('notranslate');
    /*this is to add class translate and notranslate*/
    $('footer').addClass('notranslate');
    
    /* Detects the size of the viewport, and uses different css to accomodate
     * different size of devices -A 10/09/2015 */
    $('<link rel=\'stylesheet\' type=\'text/css\'  media=\"only screen and (min-width:737px) and (max-width:880px)\" href=\'../css/screen_layout_medium.css\'\/>\
       <link rel=\'stylesheet\' type=\'text/css\'  media=\"only screen and (min-width:50px) and (max-width:736px)\" href=\'../css/screen_layout_small.css\'\/>\
       <link rel=\'stylesheet\' type=\'text/css\'  media=\"only screen and (max-height:440px)\" href=\'../css/screen_layout_small.css\'\/>\\').insertAfter('.responsive_css');

}




