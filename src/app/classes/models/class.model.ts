import { v1 as uuidv1 } from 'uuid';
export class Class {
  // idn = uuidv1();
  constructor(
    // public id: number = uuidv1(),
    public number: number = null,
    public name: string = '',
    public available: boolean = true
  ) {
  }
}
