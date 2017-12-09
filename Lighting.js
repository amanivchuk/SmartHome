"use strict";

class Lighting extends Switch{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}