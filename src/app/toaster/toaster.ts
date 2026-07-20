import { Component } from '@angular/core';

@Component({
  selector: 'app-toaster',
  imports: [],
  templateUrl: './toaster.html',
  styleUrl: './toaster.css'
})
export class Toaster {
  Message:any="";
  ngOnInit(){
    // this.showToast(false);
  }
showToast(Called:any,Message:any){
  debugger;
  this.Message= Message;
  if(true){
    const toast:any = document.getElementById("toaster");
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 700);
  }
}
}
