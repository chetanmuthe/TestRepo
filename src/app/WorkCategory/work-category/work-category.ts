import { Component, Input } from '@angular/core';
import { RootList } from '../../Listing/root-list/root-list';
import { AddEditWorkCategory } from "../add-edit-work-category/add-edit-work-category";
import { FilterEnt } from '../../AllEntities/CommonModels';
import { NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-work-category',
  imports: [RootList, AddEditWorkCategory,NgClass,FormsModule,ReactiveFormsModule,NgxPaginationModule],
  templateUrl: './work-category.html',
  styleUrl: './work-category.css'
})
export class WorkCategory {
  CategoryId:any=0;
  OpenAddEditComponent:boolean=false;
  Filter: FilterEnt = new FilterEnt();
  dataList:any[]=[{
    fruits: ['Apple', 'Banana', 'Orange'],
    vegetables: ['Carrot', 'Tomato', 'Broccoli']
  }];
  ngOnInit(){
    this.Filter.IsShowAddNew=true;
  //     this.dataList = {
  //   fruits: ['Apple', 'Banana', 'Orange'],
  //   vegetables: ['Carrot', 'Tomato', 'Broccoli']
  // };
  }

  Edit(item:any){

  }
  Delete(item:any){

  }
  GetAuditrail(item:any){

  }
  AddNewCategory(){
    debugger;
    this.OpenAddEditComponent=false;
    setTimeout(() => {
      this.OpenAddEditComponent=true;
    }, 100);
  }
}
