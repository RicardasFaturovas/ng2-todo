import {Itodo} from './interfaces/itodo';
export class Todo implements Itodo {

  constructor(
    public id: number,
    public message: string,
    public status: boolean,
    public priority: number,
    public editing: boolean
  ) { }
}
