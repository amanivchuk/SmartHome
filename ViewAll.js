"use strict";

let view = document.getElementById("root");

let f = new Fridge("NORD");
let vf = new ViewFridge(f, view);
vf.render();


let lampHall = new Lighting("Lamp Hall");
let lh = new ViewLighting(lampHall, view);
lh.render();

function render(name, type){
    if(type === 'Lamp'){
        let l = new ViewLighting(new Lighting(name), view);
        l.render();
    }
    else if(type === 'Heater'){
        let h = new ViewHeater(new Heater(name), view);
        h.render();
    }
}


