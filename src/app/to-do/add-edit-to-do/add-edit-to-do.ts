import { Component, Input, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { Toaster } from "../../toaster/toaster";
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-add-edit-to-do',
  imports: [FormsModule, ReactiveFormsModule,NgClass, Toaster,CommonModule],
  templateUrl: './add-edit-to-do.html',
  styleUrl: './add-edit-to-do.css'
})
export class AddEditToDo {
  @ViewChild(Toaster) toaster!: Toaster;


  @Input('ToDoId') ToDoId: any = 0;
  masterForm: UntypedFormGroup;
  showToaster: boolean = false;
  constructor(private formBuilder: FormBuilder,
  ) {
    this.masterForm = formBuilder.group({
      ToDoId: [],
      ToDoName: ['', Validators.required],
      WorkCategoryId: ['', Validators.required],
      Active: [true],
      CreatedDate: [new Date],
      StatusId: [],
      SubTasks: this.formBuilder.array([])
    })
  }
    get SubTasks(): FormArray {
    return this.masterForm.get('SubTasks') as FormArray;
  }
   createTask(): FormGroup {
    debugger;
    return this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      done: [false],
      status: [''],
      completedDate: ['']
    });
  }
  AddUpdateToDo() {
    debugger;
    this.toaster.showToast(true,"Message");
  }
  // add new task to array
  addTask() {
    debugger;
    this.SubTasks.push(this.createTask());
  }
  DeleteSubTask(index:any){
    this.SubTasks.removeAt(index);
  }
  SaveSubTask(SubTask:any){
    debugger;
    console.log(SubTask.value);
  }
}
