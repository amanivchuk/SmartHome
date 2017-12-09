class ViewFridge{
    constructor(fridge, rootElement){
        this._fridge = fridge;
        this._rootElement = rootElement;

        this._state = document.createElement("div");
        this._stateTemp = document.createElement("div");
    }

    stateChange(){
        this._state.innerText = `Сосотояние ${this._fridge.state ? "вкл." : "выкл."}`;
    }
    tempChange(){
        this._stateTemp.innerText = `Temp: ${this._fridge.currentTemp}`;
    }

    render(){
        let fridge = document.createElement("div");
        fridge.className = "fridge"; /* подключаем style.css*/

        let model = document.createElement("div");
        model.className = "modelId";
        model.innerText = `Model: ${this._fridge.model}`;

        /*--------------Temperature --------------------*/
        let tmpBtn = document.createElement("button");
        tmpBtn.type = "button";
        tmpBtn.innerText = "Temp +";
        tmpBtn.addEventListener("click", () => {
            this._fridge.increaseTemp();
            this.tempChange();
        });
        let tmpBtnPlus = document.createElement("button");
        tmpBtnPlus.type = "button";
        tmpBtnPlus.innerText = "Temp +";
        tmpBtnPlus.className = "tempPlus";
        tmpBtnPlus.addEventListener("click", () => {
            this._fridge.increaseTemp();
            this.tempChange();
        });

        let tmpBtnMin = document.createElement("button");
        tmpBtnMin.type = "button";
        tmpBtnMin.innerText = "Temp -";
        tmpBtnMin.className = "tempMin";
        tmpBtnMin.addEventListener("click", () => {
            this._fridge.decreaseTemp();
            this.tempChange();
        });
        /*--------------Temperature --------------------*/

        let onBtn = document.createElement("button");
        onBtn.type= "button";
        onBtn.innerText = "On";
        onBtn.className = "on"; // !!!!!!!!! style button
        onBtn.addEventListener("click", () => {
            this._fridge.on();
            this.stateChange();
        });

        let offBtn = document.createElement("button");
        offBtn.type= "button";
        offBtn.innerText = "Off";
        offBtn.className = "off"; // !!!!!!!! style button
        offBtn.addEventListener("click", () => {
            this._fridge.off();
            // this.render();
            this.stateChange();
        });

        this.stateChange();
        this.tempChange();
        fridge.appendChild(model);
        fridge.appendChild(this._state);
        fridge.appendChild(this._stateTemp);
        fridge.appendChild(onBtn);
        fridge.appendChild(offBtn);
        fridge.appendChild(tmpBtnPlus);
        fridge.appendChild(tmpBtnMin);
        // this._rootElement.innerHTML = "";
        this._rootElement.appendChild(fridge);
    }
}
/*

let f = new Fridge("NORD");
let vf = new ViewFridge(f, document.getElementById("root"));
vf.render();
*/

