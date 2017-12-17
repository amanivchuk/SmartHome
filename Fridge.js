"use strict";

class Fridge extends Device{
    constructor(model){
        super(model);
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
}
