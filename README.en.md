lepet.js
========

lepet.js is a library that allows to include translation to an HTML document.  
It is written in JavaScript so it can be used with any library or framework like [PrototypeJS](http://prototypejs.org/) or [jQuery](http://www.jquery.com).

лепет.js?
-----------
lepet - лепет - is the translation - given by google - of the word babble to russian.    
I chose that name because it is not a complete internationalization solution and its scope is limited.     
js because it is written in JavaScript.   


Reference - usage - lepet.js   
=============================   

Have an HTML document with the content to translate.   
----------------------------------------------------   

It is important that the content is inside the document to avoid that it is displayed empty if there are errors like:    
- Latency loading content - you will include lepet.js at the end of the document, then it depends on how many files you embed in your document, connection speed of the client, connection speed of your hosting, etc. -.    
- If there is any error with JavaScript - for example: Use the variable content to store other values that are not the translation -.    
- If lepet.js was not included or there are no translations.    

   
Create an array named content.   
---------------------------------

var content = [];   

Inside this array there will be objects.    
Each object represents the content of a particular language.    
   
{   
&nbsp;&nbsp;locale: 'es',   
&nbsp;&nbsp;doclanguage: 'es-MX',   
&nbsp;&nbsp;title: "eamexicano",   
&nbsp;&nbsp;document_title: "eamexicano - es",   
&nbsp;&nbsp;content: "Hablamos español",   
&nbsp;&nbsp;figcaption: "`Parque Praskim.<br>Varsovia, Polonia.`"   
}   
   
The object has three main attributes:      
locale, doclanguage, title.   
   
**locale**   
It is the only attribute needed.    
Here the language of the translation is defined with the - [iso639-1](http://www.loc.gov/standards/iso639-2/php/code_list.php) - the standard.    
This value will be used as the content of the links that the user will see in the screen and will click to visualize the translation.    
   
**doclanguage**   
This attribute is optional.
Here you include the region * where the language is used.   
The value of doclanguage will be used as teh value of the attribute lang of the html tag.   
If this value is not defined, the value of the lang attribute will be defined by the local value.   
* You can search for the region in: [https://www.iso.org/obp/ui/#search](https://www.iso.org/obp/ui/#search)    
   
**title**   
This attribute is optional.
It is used if you want to update the content of the title tag in the head of the HTML document when you visualize a particular translation.
   
The remaining values can be id, class attributes or the name of an HTML tag.   


var content = [   
  {   
&nbsp;&nbsp;locale: 'es',   
&nbsp;&nbsp;doclanguage: 'es-MX',   
&nbsp;&nbsp;title: "eamexicano",   
&nbsp;&nbsp;document_title: "eamexicano - es",   
&nbsp;&nbsp;content: "Hablamos español",   
&nbsp;&nbsp;figcaption: "`Parque Praskim.<br>Varsovia, Polonia.`"   
   },   
  {   
&nbsp;&nbsp;locale: 'ru',   
&nbsp;&nbsp;doclanguage: 'ru-RU',   
&nbsp;&nbsp;title: "eamexicano",   
&nbsp;&nbsp;document_title: "eamexicano - ru",   
&nbsp;&nbsp;content: "Мы говорим по-русски",   
&nbsp;&nbsp;figcaption: "`Praskim парк.<br>Варшава, Польша.`"   
  },   
  {   
&nbsp;&nbsp;locale: 'fr',   
&nbsp;&nbsp;doclanguage: 'fr-FR',   
&nbsp;&nbsp;title: "eamexicano",   
&nbsp;&nbsp;document_title: "eamexicano - fr",   
&nbsp;&nbsp;content: "On parle français",   
&nbsp;&nbsp;figcaption: "`Parc Praskim.<br>Varsovie, Pologne.`"   
  }   
];   

**divider**   

When the user clicks the link of a language, the title tag will be updated by default.   
The value it will have is the value that it has in the translation plus the locale between parenthesis.   

eamexicano (en)   
eamexicano (es)   

If you don't want to visualize the locale or you want to separate with another divider you can add a lepet_options object to adjust that functionality.   
 
var lepet_options = {   
&nbsp;&nbsp;divider: {   
&nbsp;&nbsp;&nbsp;&nbsp;enable: false,   
&nbsp;&nbsp;&nbsp;&nbsp;before: " | ",   
&nbsp;&nbsp;&nbsp;&nbsp;after: " "   
&nbsp;&nbsp;&nbsp;&nbsp;}   
}   
   
lepet_options:   
&nbsp;divider:   
&nbsp;&nbsp;enable: If the value is true, you want to show the locale when the user clicks a locale link to visualize the translation.    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If the value is false, the value of the title tag will be the one you set in the HTML document.    
&nbsp;&nbsp;before: Characters that you want to include after the title and before the locale.   
&nbsp;&nbsp;after: Characters that you want to include after the locale.   
   
Include lepet.js **AFTER** you define the content array - with the translations you want to visualize -.   
-------------------------------------------------------------------------------------------------------

In the markup - HTML - include a container with the id lepet.
In this container the links with the defined locales will be displayed.   
`<div id='lepet'></div>`   

lepet.js can choose the content of the nodes by the value of the attributes id, class * or by the name of the tag *.   
In this case the nodes are the following:   

h1#document_title - Update the content of the node selected by the id attribute.   
p.content - Update the content of the node selected by the class attribute.   
figcaption - Update the content of the node selected by the tag name.   

**Notes:**

- If you use the class or the tag name, the first node that has this class or tag name will be updated.   
- If you use the class or the tag name be aware that, if there is markup - HTML - inside it, it will be replaced by the translation.   
-- To prevent that you can include the markup in the translation or make your selection more precise.   

[Demo](http://www.eamexicano.com/lepet.html)


lepet.js has an [MIT License](http://www.opensource.org/licenses/MIT).