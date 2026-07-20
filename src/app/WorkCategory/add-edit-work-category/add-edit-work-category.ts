import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-work-category',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './add-edit-work-category.html',
  styleUrl: './add-edit-work-category.css'
})
export class AddEditWorkCategory {
@Input('CategoryId')CategoryId:any=0;
masterForm:UntypedFormGroup;
constructor(private formBuilder:FormBuilder,
){
this.masterForm= formBuilder.group({
  WorkCategoryId:[],
  WorkCategoryCode:['',Validators.required],
  WorkCategoryName:['',Validators.required],
  Active:[true],
  CreatedDate:[new Date]
})
}
ngOnInit(){
  debugger;
  console.log(this.CategoryId);
}
AddUpdateWorkCategory(){
  debugger;
  console.log(this.masterForm);
  alert("Saved"); 
}
}