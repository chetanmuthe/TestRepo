import { Component } from '@angular/core';
import { RootList } from '../Listing/root-list/root-list';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterEnt } from '../AllEntities/CommonModels';
import { AddEditToDo } from "./add-edit-to-do/add-edit-to-do";

@Component({
  selector: 'app-to-do',
  imports: [RootList, NgxPaginationModule, AddEditToDo],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css'
})
export class ToDo {
OpenAddEditComponent:boolean=false;
Filter: FilterEnt = new FilterEnt();
  dataList:any[]=[{
    fruits: ['Apple', 'Banana', 'Orange'],
    vegetables: ['Carrot', 'Tomato', 'Broccoli']
  }];
  ngOnInit(){
    this.Filter.IsShowAddNew=true;
  }
AddNewToDo(){
  this.OpenAddEditComponent= false;
  setTimeout(() => {
    this.OpenAddEditComponent=true;
  }, 100);
}
Edit(item:any){

}
Delete(item:any){

}
}
