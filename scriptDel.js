"use strict";

function del(){
    var name = document.getElementById('name').value;
    var type = document.getElementById('type').value;

    deleteObject(name, type);
}