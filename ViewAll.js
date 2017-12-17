"use strict";

var list = [];

let view = document.getElementById("root");

// list.push(new Fridge("NORD"), view);
list.push(new Fridge("NORD"));
list.push(new Lighting("Lamp Hall"));

/*
list.push(new ViewFridge(new Fridge("NORD"), view));
list.push(new ViewLighting(new Lighting("Lamp Hall"), view));
* */


function show(){
    for(var i = 0; i < list.length; i++) {
        if(list[i].constructor.name === "Fridge"){
            new ViewFridge(list[i], view).render();
        }
        if(list[i].constructor.name === "Lighting"){
            new ViewLighting(list[i], view).render();
            // console.log(list[i]);
        }
        if(list[i].constructor.name === "Heater"){
            new ViewHeater(list[i], view).render();
            // console.log(list[i]);
        }
        if(list[i].constructor.name === "Calorifier"){
            new ViewCalorifier(list[i], view).render();
        }
        // list[i].render();
    }
}

function deleteObject(name, type){

    if(type === 'Lamp'){
        for(var i =0; i < list.length; i++){
            if(list[i].lightName == name){
                var index = list.indexOf(list[i]);
                console.log("--- " + index);
                list = list.filter(function(item) {
                    return item !== list[i];
                });
            }
        }
    }
    else if(type == 'Heater'){
        for(var i =0; i < list.length; i++){
            if(list[i].model == name){
                var index = list.indexOf(list[i]);
                console.log("--- " + index);
                list = list.filter(function(item) {
                    return item !== list[i];
                });
            }
        }
    }else if(type === 'Calorifier'){
        for(var i =0; i < list.length; i++){
            if(list[i].model === name){
                var index = list.indexOf(list[i]);
                console.log("--- " + index);
                list = list.filter(function(item) {
                    return item !== list[i];
                });
            }
        }
    }
    view.innerText="";
    show();
}

function render(name, type){
    if(type === 'Lamp'){
        let l = new Lighting(name);
        // l.render();
        list.push(l);
    }
    else if(type === 'Heater'){
        let h = new Heater(name);
        // h.render();
        list.push(h);
    } else if(type === 'Calorifier'){
        let c = new Calorifier(name);
        list.push(c);
    }
    view.innerText="";
    show();
}


show();