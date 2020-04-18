import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClassesService } from '../classes/services/classes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  @Input() room;
  @Output() RmClick = new EventEmitter();

  constructor(private __service: ClassesService, private _router: Router
) {
  // console.log(__service);
   }
  ngOnInit(): void {
  }

  onRoomClick() {
    this.RmClick.emit(this.room);
    this.__service.setRoomData(this.room);
    this._router.navigate(['classes', this.room.id]);
  }

}
