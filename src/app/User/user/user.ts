import { Component } from '@angular/core';
import { RootList } from "../../Listing/root-list/root-list";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FilterEnt } from '../../AllEntities/CommonModels';

@Component({
  selector: 'app-user',
  imports: [RootList,FormsModule,ReactiveFormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  Filter: FilterEnt = new FilterEnt();
 userForm!: FormGroup;
   constructor(private fb: FormBuilder) {}
    ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit(){
    
  }
}
