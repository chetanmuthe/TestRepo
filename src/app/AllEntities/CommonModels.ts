export class FilterEnt {
  PageNumber: any;
  PageSize: any;
  IsOpen: boolean = true;
  IsOver: boolean = true;
  IsSearchClick:boolean;
  TotalRecords: number;
  IsShowAddNew:boolean=false
  constructor(){
    this.PageNumber=1;
    this.PageSize=10;
    this.IsSearchClick=false
    this.TotalRecords= 10
  }
}