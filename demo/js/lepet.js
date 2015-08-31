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

if (lepet_options === undefined) {
 var lepet_options = {
   divider: {
     enable: true,
     before: " (",
     after: ")"     
   }
 }
}

(function lepet(content, lepet_options) {
  "use strict";
  window.lepet_nodes = {};
  var keys = [],  
      pre  = lepet_options.divider.before,
      post = lepet_options.divider.after,
      main_document = document.getElementsByTagName('html')[0],
      available_locales = document.getElementsByClassName('locale'),
      lepet = document.getElementById('lepet'),
      locale_links = "",
      default_dir = "ltr";
   
  for (var i = 0; i < content.length; i++) { 
    keys.push(Object.keys(content[i]));
    locale_links += "<a href='#" + content[i].locale + "' class='locale'>" + content[i].locale + "</a>";        
  }

  lepet.innerHTML = locale_links;
      
  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < keys[i].length; j++) {
      var dom_node = keys[i][j].toString();
      if (dom_node !== 'locale' && dom_node !== 'doclanguage' && dom_node !== 'default_dir') {
        if (document.getElementById(dom_node) !== null && !lepet_nodes.hasOwnProperty(dom_node)) {
          lepet_nodes[dom_node] = document.getElementById(dom_node);
        } else if (document.getElementsByClassName(dom_node).length > 0 && !lepet_nodes.hasOwnProperty(dom_node)) {
          lepet_nodes[dom_node] = document.getElementsByClassName(dom_node)[0];
        } else if (document.getElementsByTagName(dom_node).length > 0 && !lepet_nodes.hasOwnProperty(dom_node)) {
          lepet_nodes[dom_node] = document.getElementsByTagName(dom_node)[0];
        }
      }
    }
  }

  function update_content(href) {
    var current_translation = find_locale(href), 
        dom_nodes = Object.keys(lepet_nodes);

    if (current_translation.hasOwnProperty('doclanguage')) {
      main_document.lang = current_translation.doclanguage;
    } else {
      main_document.lang = current_translation.locale;
    }

    if (current_translation.hasOwnProperty('dir')) {
      main_document.dir = current_translation.dir;
    } else {
      main_document.dir = default_dir;
    }

    for (var i = 0; i < dom_nodes.length; i++) {
      if (dom_nodes[i] !== 'title') {
        lepet_nodes[dom_nodes[i]].innerHTML = current_translation[dom_nodes[i]];
      } else {
        if (lepet_options.divider.enable === true) {
          lepet_nodes[dom_nodes[i]].innerHTML = current_translation[dom_nodes[i]] + pre + href + post;
        }
      }        
    }     
  }

  function find_locale(locale) {
    for (var i = 0; i < content.length; i++) {
      if (content[i].locale === locale) {
        return content[i];
      }
    }
    return content[0];
  }

  function highlight_current_locale(all, current) {
    for (var i = 0; i < all.length; i++) {
        all[i].className = 'locale';
    }
    current.className = 'locale active';
  }

  function attach_link(current_locale) {
    var href = current_locale.href.slice(-2);
    if (window.addEventListener) {
      available_locales[i].addEventListener("click", function () {
         highlight_current_locale(available_locales, current_locale);
         update_content(href);
      });
    } else {
      available_locales[i].attachEvent("click", function () {
         highlight_current_locale(available_locales, current_locale);
         update_content(href);   
      });
    }
  }

  for (var i = 0; i < available_locales.length; i++) {
    attach_link(available_locales[i]);
  }
            
}(content, lepet_options));