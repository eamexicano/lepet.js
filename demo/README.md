Referencia de uso de lepet.js   
=============================
   
Tener un documento HTML con el contenido a traducir.
----------------------------------------------------   
   
Es importante que el contenido esté dentro del documento para evitar que se visualice vacío el documento si existen errores como:   
- Latencia al cargar el contenido - lepet.js se incluye al final del documento, entonces depende de cuántos archivos incrustes en tu documento, la velocidad de conexión del usuario, la velocidad de salida de tu hosting, etcétera -.   
- Si hay un error con JavaScript - por ejemplo: utilizar la variable content para almacenar otros valores que no sean la traducción -.   
- Si no se incluyó lepet.js o no existen traducciones.   
   
Crear un arreglo llamado content.   
---------------------------------

var content = [];   

Dentro de este arreglo van a existir objetos.    
Cada objeto representa el contenido en un idioma en particular.   

{   
&nbsp;&nbsp;locale: 'es',   
&nbsp;&nbsp;doclanguage: 'es-MX',   
&nbsp;&nbsp;title: "eamexicano",   
&nbsp;&nbsp;document_title: "eamexicano - es",   
&nbsp;&nbsp;content: "Hablamos español",   
&nbsp;&nbsp;figcaption: "`Parque Praskim.<br>Varsovia, Polonia.`"   
}   
   
El objeto tiene tres atributos principales:   
locale, doclanguage, title.   
   
**locale**   
Es el único atributo necesario.   
Aquí se define el idioma de la traducción con el estándar - [iso939-2](http://www.loc.gov/standards/iso639-2/php/code_list.php) -   
Se va a utilizar como contenido de los vínculos que el usuario va a utilizar para visualizar la traducción.   
   
**doclanguage**   
Este atributo es opcional.   
Aquí se incluye la región * donde se utiliza el idioma.   
El valor de doclanguage se va a utilizar como valor del atributo lang de la etiqueta html.   
Si no está definido el valor del atributo lang va a estar definido por el valor de locale.   
* La región se puede buscar en: [https://www.iso.org/obp/ui/#search](https://www.iso.org/obp/ui/#search)   
   
**title**   
Este atributo también es opcional.   
Se utiliza por si quieres que se actualice el contenido de la etiqueta title del documento HTML cuando se visualiza una traducción en particular.   
   
Los otros atributos pueden ser valores de los atributos id, class o el nombre de una etiqueta HTML.   

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

**separador**   

Al seleccionar el vínculo de un idioma, de manera predeterminada, se va a actualizar   
la etiqueta title con el valor que tenga en la traducción más el valor del locale entre paréntesis.  

eamexicano (en)   
eamexicano (es)   

Si no quieres visualizar el locale o quieres separarlo de manera diferente puedes agregar un objeto lepet_options para ajustar esa funcionalidad. 

var lepet_options = {   
&nbsp;&nbsp;divider: {   
&nbsp;&nbsp;&nbsp;&nbsp;enable: false,   
&nbsp;&nbsp;&nbsp;&nbsp;before: " | ",   
&nbsp;&nbsp;&nbsp;&nbsp;after: " "   
&nbsp;&nbsp;&nbsp;&nbsp;}   
}   
   
lepet_options:   
&nbsp;divider:   
&nbsp;&nbsp;enable: Si el valor es true se quiere mostrar el locale cuando el usuario seleccione un idioma para visualizar.    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si el valor es false únicamente se visualizará el valor que tiene la etiqueta title en el documento HTML.   
&nbsp;&nbsp;before: Carácter(es) que se quieren incluir después del título y antes del locale.   
&nbsp;&nbsp;after: Carácter(es) que se quieren incluir después del locale.   
   
Incluir lepet.js **DESPUÉS** de definir el arreglo content - con las traducciones que quieras visualizar -.   
-------------------------------------------------------------------------------------------------------

En el markup - HTML - incluir un contenedor con id lepet.   
En este contenedor se van a incluir los vínculos con los idiomas definidos en content.   
`<div id='lepet'></div>`   

lepet.js puede seleccionar el contenido de los nodos por el valor los atributos id, class * o por el nombre de la etiqueta * del nodo.   
En este caso los nodos son los siguientes:   

h1#document_title - Actualizar contenido del nodo seleccionado atributo id   
p.content - Actualizar contenido del nodo seleccionado por atributo class   
figcaption - Actualizar contenido del nodo seleccionado por etiqueta   

**Notas:**

- Al utilizar class o el nombre de la etiqueta se va a seleccionar la primer opción disponible.   
- Al utilizar class o el nombre de la etiqueta tener cuidado si se tiene HTML interior porque se va a sustituir todo el markup por la traducción.   
-- Para prevenir esto puedes incluir el markup en las traducciones o hacer tu selección más específica.   

[En vivo](http://www.eamexicano.com/lepet.html)