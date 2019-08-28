import {JsonProperty, JsonObject} from '../lib/tj.deserializer'
import { task } from './task.model';

@JsonObject
export class area {
  @JsonProperty('name', String, true)
  public name: string = undefined;

  @JsonProperty('description', String, true)
  public description: string = undefined;

  @JsonProperty('startDate', Date, true)
  public startDate: Date = undefined;

  @JsonProperty('endDate', Date, true)
  public endDate: Date = undefined;

  @JsonProperty('task', [task], true)
  public task: task[] = [];

  @JsonProperty('id', String, true)
  public id: string = undefined;

}