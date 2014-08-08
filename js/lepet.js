/*

The MIT License (MIT)

Copyright (c) 2014 Emmanuel Ayala Mexicano @eamexicano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


*/
(function () {
    "use strict";
    var available_locales = document.getElementsByClassName('locale');

    var header_title = document.getElementsByTagName('title')[0];
    var original_title = header_title.textContent;
    /*
        Nodos del documento que tienen contenido para ser traducido.
    */
    var title = document.getElementById('title');
    var main = document.getElementById('main');
    var secondary = document.getElementById('secondary');
    /*
    Después del locale se definen las secciones a traducir 
    y se le asigna la traducción.    
    */
    var content = [
      {
        locale: 'es',
        title: "Título",
        main: "Contenido Principal",
        secondary: "<span class='custom'>Contenido Secundario.</span>"
      },
      {
        locale: 'ru',
        title: "Название",
        main: "основное содержание",
        secondary: "<span class='custom'>второй содержание.</span>"
      }
];


    function update_content(href) {
      var current_translation = find_locale(href);
      /*
          Asignar a los nodos para traducir el contenido de la traducción. 
      */
      header_title.innerText =  original_title + " (" + href + ")";
      title.innerHTML = current_translation.title;
      main.innerHTML = current_translation.main;
      secondary.innerHTML = current_translation.secondary;  
    }

    function find_locale(locale) {
      for (var i = 0; i < content.length; i++) {
        if (content[i].locale === locale) {
          return content[i];
        }
      }
      return content[0];
    }

    function attach_link(current_locale) {
        var href = current_locale.href.slice(-2);
        available_locales[i].addEventListener("click", function () {
         update_content(href);   
        });
    }

    for (var i = 0; i < available_locales.length; i++) {
        attach_link(available_locales[i]);
    }
}());