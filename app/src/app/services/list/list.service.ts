/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material'

@Injectable()
export class listService {

    constructor(private snackbar : MatSnackBar){

    }

    addArea(area : object){

        let list = []

        if(localStorage.getItem('list')){
           list = JSON.parse(localStorage.getItem('list'))
        }else{
            list.push(area);
            localStorage.setItem('list',JSON.stringify(list));
            this.notify('Area added');
            return
        }

        list.unshift(area);
        localStorage.setItem('list',JSON.stringify(list))
        this.notify('Area added');
        return
    }

    getAreas(){
        return JSON.parse(localStorage.getItem('list'))
    }

    notify(message : string,action? : string){
        if(!action){
            action = 'close';
        }
        this.snackbar.open(message,action,{duration : 3000})
    }

}
