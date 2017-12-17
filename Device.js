"use strict";

class Device extends Switch{
    constructor(model){
        super();
        this._model = model;
        this._currentTemp = 0;
    }
    get model(){
        return this._model;
    }

    increaseTemp(){}

    decreaseTemp(){}

    get currentTemp(){
        return this._currentTemp;
    }
}