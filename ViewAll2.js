/*
"use strict";

var list = [];

let view = document.getElementById("root");

list.push(new ViewFridge(new Fridge("NORD"), view));
list.push(new ViewLighting(new Lighting("Lamp Hall"), view));


function show(){
    for(var i = 0; i < list.length; i++){
        list[i].render();
    }
}

function deleteObject(name, type){
    console.log("Aaaaaaaaa");
    if(type == 'Lamp'){
        let l = new ViewLighting(new Lighting(name), view);
        for(var i =0; i < list.length; i++){
            if(list[i] === l){
                list[i].pop();
            }
        }
    }
    else if(type == 'Heater'){
        let h = new ViewHeater(new Heater(name), view);
        for(var i =0; i < list.length; i++){
            if(list[i] === h){
                list[i].pop();
            }
        }
    }
    view.innerText="";
    show();
}

function render(name, type){
    if(type === 'Lamp'){
        let l = new ViewLighting(new Lighting(name), view);
        // l.render();
        list.push(l);
    }
    else if(type === 'Heater'){
        let h = new ViewHeater(new Heater(name), view);
        // h.render();
        list.push(h);
    }
    view.innerText="";
    show();
}


// show();*/
