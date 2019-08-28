import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class task {
  @JsonProperty('name', String, true)
  public name: string = undefined;

  @JsonProperty('description', String, true)
  public description: string = undefined;

  @JsonProperty('startDate', Date, true)
  public startDate: Date = undefined;

  @JsonProperty('endDate', Date, true)
  public endDate: Date = undefined;

  @JsonProperty('status', String, true)
  public status: string = undefined;

  @JsonProperty('id', String, true)
  public id: string = undefined;

}