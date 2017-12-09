"use strict";

class Switch{
    constructor(){
        this._state = false;
    }

    on(){
        this._state = true;
    }
    off(){
        this._state = false;
    }
    get state(){
        return this._state;
    }
}