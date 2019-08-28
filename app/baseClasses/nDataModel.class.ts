import { area } from '../src/app/models/area.model';
import { task } from '../src/app/models/task.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
area: area;
task: task;
//DECLARE NEW VARIABLE

constructor() {
this.area = new area();
this.task = new task();
//CREATE NEW DM INSTANCE
    }
}