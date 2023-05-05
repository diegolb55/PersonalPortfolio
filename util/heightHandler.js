import { useState, useEffect } from "react";
/**
 * Class to get window's inner height with 
 * null type check.
 * 
 * 
 */

export default class HeightHandler {
    constructor(){
        this.h = this.getInnerWHeight();
    }
    
    getInnerWHeight(){
        if(typeof window !== 'undefined'){
            return window.innerHeight;
        }
        return "100vh";
    }

 

    get windowHeight(){
        return this.h;
    }

}



