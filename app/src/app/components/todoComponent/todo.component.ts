/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { listService } from "../../services/list/list.service";
import { task } from '../../models';

/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

/**
* 
* Serivice Designer import Example - Service Name - HeroService
* import { HeroService } from 'app/sd-services/HeroService';
*/

@Component({
    selector: 'bh-todo',
    templateUrl: './todo.template.html'
})

export class todoComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    areas;
    show = false;
    item;
    areaID;
    tasks;
    currentAreaID;
    currentArea;
    status = ['Not Started', 'In Progress', 'Abandoned', 'Complete']

    constructor(private bdms: NDataModelService,
        private listService: listService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.areas = this.listService.getAreas();
        this.currentArea = JSON.parse(sessionStorage.getItem('current'))
        if (this.currentArea) {
            this.display(this.currentArea)

        }
    }

    display(area) {
        console.log(area)
        this.tasks = area.task;
        this.currentAreaID = area.id;
        this.currentArea = area;
        sessionStorage.setItem('current', JSON.stringify(this.currentArea));
    }

    change() {
        this.show = !this.show
    }

    add() {
        this.dm.task.id = this.listService.makeid();
        this.dm.task.status = "Not Started";
        this.listService.addTask(this.dm.task, this.areaID);
        this.change();
        this.areas = this.listService.getAreas();
        for (var i = 0; i < this.areas.length; i++) {
            if (this.areas[i].id === this.areaID) {
                this.display(this.areas[i]);
            }
        }

        this.dm.task = new task();
    }

    removeTask(task) {
        this.listService.removeTask(task, this.currentAreaID);

        this.areas = this.listService.getAreas();
        for (var i = 0; i < this.areas.length; i++) {
            if (this.areas[i].id === this.currentAreaID) {
                this.display(this.areas[i]);
            }
        }
    }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.mm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.mm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.mm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.mm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete(dataModelName, filter) {
        this.mm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.mm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.mm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
