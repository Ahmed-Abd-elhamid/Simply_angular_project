import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClassesService } from '../classes/services/classes.service';
import { Class } from '../classes/models/class.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.scss']
})
export class ClassFormComponent implements OnInit {

  class: Class = new Class();

   constructor(
     private _classesService: ClassesService,
     private _router: Router
   ) {}

   ngOnInit(): void {}

   onSubmit(form: NgForm) {
     // console.log(form);
     if (form.valid){
       // const class = { ...this.class };
       // this._classesService.addRoom(form.value);
       this._classesService.addRoom(form.value).subscribe((res: any) => {
         if (res.status) {
           this._router.navigate(['classes', res.data.id]);
         }
         form.reset();
       });
        }
     }
}
