import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tours-travels-listing',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './tours-travels-listing.html',
  styleUrl: './tours-travels-listing.css'
})
export class ToursTravelsListing {
  events: any[] = [];

  constructor(private http: HttpClient) {}

}
