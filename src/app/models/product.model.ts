export class Product{
  public manufacturer: string = "Roland";
  constructor(public type: string, public subtype: string, public model: string, public msrp: number, public title: string, public description: string, public image: string){}
}
