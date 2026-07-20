import { Component } from '@angular/core';
import { RootList } from '../Listing/root-list/root-list';
import { FilterEnt } from '../AllEntities/CommonModels';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddEditStatus } from './add-edit-status/add-edit-status';

@Component({
  selector: 'app-status',
  imports: [RootList,NgxPaginationModule,AddEditStatus],
  templateUrl: './status.html',
  styleUrl: './status.css'
})
export class Status {
OpenAddEditComponent:boolean=false;
Filter: FilterEnt = new FilterEnt();
dataList:any[]=[{
    fruits: ['Apple', 'Banana', 'Orange'],
    vegetables: ['Carrot', 'Tomato', 'Broccoli']
  }];
  ngOnInit(){
    this.Filter.IsShowAddNew=true;
  }
  AddNewStatus(){
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
