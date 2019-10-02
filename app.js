"use strict";

(function() {
    let addButton$ = document.getElementById('addButton');
    let inputSkill$ = document.getElementById('inputSkill');
    let listskills$ = document.getElementById('listskills');
    addButton$.addEventListener('click', () => {
        let value = inputSkill$.value;
        let item$ = document.createElement('li');
        item$.innerText = value;
        listskills$.appendChild(item$);
    });
})();