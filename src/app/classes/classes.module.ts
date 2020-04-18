import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesComponent } from './classes.component';
import { RoomsComponent } from '../rooms/rooms.component';
import { RoomInfoComponent } from '../room-info/room-info.component';
import { RoomsListComponent } from '../rooms-list/rooms-list.component';
import { ClassesService } from './services/classes.service'; // over all module
import { FormsModule } from '@angular/forms';
import { ClassFormComponent } from '../class-form/class-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ClassesComponent,
    RoomsComponent,
    RoomInfoComponent,
    RoomsListComponent,
    ClassFormComponent,
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ClassesService],
  exports: [ClassesComponent],
})
export class ClassesModule { }
