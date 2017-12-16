class ViewLighting{
    constructor(light, rootElement){
        this._light = light;
        this._rootElement = rootElement;

        this._state = document.createElement("div");
    }

    stateChange(){
        this._state.innerText = `Сосотояние ${this._light.state ? "вкл." : "выкл."}`;
    }

    render(){
        let light = document.createElement("div");
        light.className = "fridge"; /* подключаем style.css*/

        let model = document.createElement("div");
        model.className = "modelId";
        model.innerText = `Light in: ${this._light.name}`;

        let onBtn = document.createElement("button");
        onBtn.type= "button";
        onBtn.innerText = "Light On";
        onBtn.className = "on"; // !!!!!!!!! style button
        onBtn.addEventListener("click", () => {
            this._light.on();
            // this.render();
            this.stateChange();
        });

        let offBtn = document.createElement("button");
        offBtn.type= "button";
        offBtn.innerText = "Light Off";
        offBtn.className = "off"; // !!!!!!!! style button
        offBtn.addEventListener("click", () => {
            this._light.off();
            // this.render();
            this.stateChange();
        });


        // fridge.appendChild(state);
        this.stateChange();
        light.appendChild(model);
        light.appendChild(this._state);
        light.appendChild(onBtn);
        light.appendChild(offBtn);
        // this._rootElement.innerHTML = "";
        this._rootElement.appendChild(light);
    }
}
