"use strict";

class Fridge extends Switch{
    constructor(model){
        super();
        this._model = model;
        this._currentTemp = 0;
    }

    get model(){
        return this._model;
    }

    increaseTemp(){
        if(this._currentTemp < 6){
            this._currentTemp +=2;
        }
    }
    decreaseTemp(){
        if(this._currentTemp > -10){
            this._currentTemp -=2;
        }
    }
    get currentTemp(){
        return this._currentTemp;
    }
}
