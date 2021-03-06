"use strict";

class Heater extends Device{
    constructor(model){
        super(model);
    }

    increaseTemp(){
        if(this._currentTemp < 6){
            this._currentTemp +=1;
        }
    }
    decreaseTemp(){
        if(this._currentTemp > 0){
            this._currentTemp -=1;
        }
    }
}