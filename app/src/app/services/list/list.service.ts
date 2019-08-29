/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material'

@Injectable()
export class listService {

    constructor(private snackbar: MatSnackBar) {

    }

    getData(type: string) {
        if (type === 'area') {
            return JSON.parse(localStorage.getItem('list'))
        }
    }

    storeData(data) {
        localStorage.setItem('list', JSON.stringify(data));
    }

    addArea(area: object) {
        console.log(area);

        let list = []

        if (localStorage.getItem('list')) {
            list = this.getData('area');
        } else {
            list.push(area);
            this.storeData(list)
            this.notify('Area added');
            return
        }

        list.unshift(area);
        localStorage.setItem('list', JSON.stringify(list))
        this.notify('Area added');
        return
    }

    addTask(task, areaID) {

        let areas = this.getAreas();

        for (var i = 0; i < areas.length; i++) {
            if (areas[i].id == areaID) {
                areas[i].task.unshift(task);
                this.notify('Task added');
            }
        }
        this.storeData(areas)
        
    }


    removeTask(task,areaID){
        let areas = this.getAreas();
        console.log(areas)
        for (var i = 0; i < areas.length; i++) {
            if (areas[i].id == areaID) {
                for(var j = 0; j < areas[j].task.length; j++){
                    if(task.id === areas[i].task[j].id){
                        areas[i].task.splice(j,1)
                    }
                }
                this.notify('Task removed');
            }
        }
        console.log(areas)

        this.storeData(areas)
    }

    getAreas() {
        return JSON.parse(localStorage.getItem('list'))
    }

    notify(message: string, action?: string) {
        if (!action) {
            action = 'close';
        }
        this.snackbar.open(message, action, { duration: 3000 })
    }

    makeid() {
        let length = 12;
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

}
