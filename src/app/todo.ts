import {Itodo} from './itodo';
export class Todo implements Itodo {

  constructor(
    public id: number,
    public message: string,
    public status: boolean,
    public priority: number
  ) { }
}
