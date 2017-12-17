"use strict";

class Calorifier extends Device{
    constructor(model){
        super(model);
    }

    increaseTemp(){
        if(this._currentTemp < 60){
            this._currentTemp +=10;
        }
    }
    decreaseTemp(){
        if(this._currentTemp > 0){
            this._currentTemp -=10;
        }
    }
}