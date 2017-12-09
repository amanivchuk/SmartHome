"use strict";
class ViewHeater{
    constructor(heater, rootElement){
        this._heater = heater;
        this._rootElement = rootElement;

        this._state = document.createElement("div");
        this._stateTemp = document.createElement("div");
    }

    stateChange(){
        this._state.innerText = `Сосотояние ${this._heater.state ? "вкл." : "выкл."}`;
    }
    tempChange(){
        this._stateTemp.innerText = `Temp: ${this._heater.currentTemp}`;
    }
    render(){
        let heater = document.createElement("div");
        heater.className = "fridge";

        let model = document.createElement("div");
        model.className = "modelId";
        model.innerText = `Model: ${this._heater.model}`;

        /*--------------Temperature --------------------*/
        let tmpBtn = document.createElement("button");
        tmpBtn.type = "button";
        tmpBtn.innerText = "Temp +";
        tmpBtn.addEventListener("click", () => {
            this._heater.increaseTemp();
            this.tempChange();
        });
        let tmpBtnPlus = document.createElement("button");
        tmpBtnPlus.type = "button";
        tmpBtnPlus.innerText = "Temp +";
        tmpBtnPlus.className = "tempPlus";
        tmpBtnPlus.addEventListener("click", () => {
            this._heater.increaseTemp();
            this.tempChange();
        });

        let tmpBtnMin = document.createElement("button");
        tmpBtnMin.type = "button";
        tmpBtnMin.innerText = "Temp -";
        tmpBtnMin.className = "tempMin";
        tmpBtnMin.addEventListener("click", () => {
            this._heater.decreaseTemp();
            this.tempChange();
        });
        /*--------------Temperature --------------------*/

        let onBtn = document.createElement("button");
        onBtn.type= "button";
        onBtn.innerText = "On";
        onBtn.className = "on"; // !!!!!!!!! style button
        onBtn.addEventListener("click", () => {
            this._heater.on();
            this.stateChange();
        });

        let offBtn = document.createElement("button");
        offBtn.type= "button";
        offBtn.innerText = "Off";
        offBtn.className = "off"; // !!!!!!!! style button
        offBtn.addEventListener("click", () => {
            this._heater.off();
            this.stateChange();
        });

        this.stateChange();
        this.tempChange();
        heater.appendChild(model);
        heater.appendChild(this._state);
        heater.appendChild(this._stateTemp);
        heater.appendChild(onBtn);
        heater.appendChild(offBtn);
        heater.appendChild(tmpBtnPlus);
        heater.appendChild(tmpBtnMin);
        this._rootElement.appendChild(heater);
    }
}