"use strict";
class ViewCalorifier{
    constructor(calorifier, rootElement){
        this._calorifier = calorifier;
        this._rootElement = rootElement;

        this._state = document.createElement("div");
        this._stateTemp = document.createElement("div");
    }

    stateChange(){
        this._state.innerText = `Сосотояние ${this._calorifier.state ? "вкл." : "выкл."}`;
    }
    tempChange(){
        this._stateTemp.innerText = `Temp: ${this._calorifier.currentTemp}`;
    }
    render(){
        let calorifier = document.createElement("div");
        calorifier.className = "fridge";

        let model = document.createElement("div");
        model.className = "modelId";
        model.innerText = `Model: ${this._calorifier.model}`;

        /*--------------Temperature --------------------*/
        let tmpBtn = document.createElement("button");
        tmpBtn.type = "button";
        tmpBtn.innerText = "Temp +";
        tmpBtn.addEventListener("click", () => {
            this._calorifier.increaseTemp();
            this.tempChange();
        });
        let tmpBtnPlus = document.createElement("button");
        tmpBtnPlus.type = "button";
        tmpBtnPlus.innerText = "Temp +";
        tmpBtnPlus.className = "tempPlus";
        tmpBtnPlus.addEventListener("click", () => {
            this._calorifier.increaseTemp();
            this.tempChange();
        });

        let tmpBtnMin = document.createElement("button");
        tmpBtnMin.type = "button";
        tmpBtnMin.innerText = "Temp -";
        tmpBtnMin.className = "tempMin";
        tmpBtnMin.addEventListener("click", () => {
            this._calorifier.decreaseTemp();
            this.tempChange();
        });
        /*--------------Temperature --------------------*/

        let onBtn = document.createElement("button");
        onBtn.type= "button";
        onBtn.innerText = "On";
        onBtn.className = "on"; // !!!!!!!!! style button
        onBtn.addEventListener("click", () => {
            this._calorifier.on();
            this.stateChange();
        });

        let offBtn = document.createElement("button");
        offBtn.type= "button";
        offBtn.innerText = "Off";
        offBtn.className = "off"; // !!!!!!!! style button
        offBtn.addEventListener("click", () => {
            this._calorifier.off();
            this.stateChange();
        });

        this.stateChange();
        this.tempChange();
        calorifier.appendChild(model);
        calorifier.appendChild(this._state);
        calorifier.appendChild(this._stateTemp);
        calorifier.appendChild(onBtn);
        calorifier.appendChild(offBtn);
        calorifier.appendChild(tmpBtnPlus);
        calorifier.appendChild(tmpBtnMin);
        this._rootElement.appendChild(calorifier);
    }
}