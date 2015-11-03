/* 
 *  Author: Anthea Jung
 *  Created: 10/20/2015
 *  Last modified: 10/27/2015
 *  
 *  This page provides common head tag elements to all pages
 *  To add a new js/css/meta, concatenate a new string to data */

var data = 
"<meta name='viewport' content='width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0'/>"
+
"<link rel='stylesheet' type='text/css' href='../css/main.css'/>" 
+
"<link id='navigationId' rel='stylesheet' type='text/css'  href='navigation.css'/>"
+
"<link rel='stylesheet' type='text/css' href='../css/footer.css'/>"
+
"<link rel='stylesheet' type='text/css' href='button.css'/>"
+
"<link class='responsive_css'>"
+
"<script src='../js/jquery.cookie.js'></script>"
+
"<script src='../js/change-lang.js'></script>"
+
"<script src='../js/load-siteParts.js'></script>"
+
"<script src='load-contents.js'></script>"
+
"<script> \n\
    $(function () { \n\
        $('span').click(function () { \n\
            $(this).next().toggle('fast');\n\
            $(this).select('span').text(function (_, value) { \n\
                return value == '« minus' ? '» plus' : '« minus'; \n\
            }); \n\
        }); \n\
    }); \n\
</script>";


// adds the string above into head tag
$('head').append(data);