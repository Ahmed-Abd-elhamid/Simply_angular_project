import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassesComponent } from './classes.component';
import { ClassFormComponent } from '../class-form/class-form.component';
import { RoomInfoComponent } from '../room-info/room-info.component';
// import { AppComponent } from '../app.component';

const routes: Routes = [{
    path: '',
    // component: AppComponent,
    children: [
      {path: "new", component: ClassFormComponent},
      {path: ":id", component: RoomInfoComponent},
      // { path: ':id', component: ClassInfoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
