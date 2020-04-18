import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClassesService } from '../classes/services/classes.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.scss']
})
export class RoomInfoComponent implements OnInit {

  room;

  private _routeParamsSubscription: Subscription;

  @Output() roomClick = new EventEmitter<string>();

  constructor(private __service: ClassesService, private _activatedRoute: ActivatedRoute) {
    // console.log(__service);
   }

  ngOnInit(): void {
    this._routeParamsSubscription = this._activatedRoute.paramMap.subscribe( (paramMap) => {

    // console.log(paramMap.get('id'));

    if (paramMap.has('id')) {
      const id = paramMap.get('id');
      this.__service.getRoomById(id).subscribe((res: any) => {
        if (res.status) {
          this.room = {id: res.data.id, number:res.data.price, name:res.data.title, available:res.data.isAvailabel};
          // console.log(this.room);
        }
      });
    }
  }
);
this.__service.RoomData.subscribe((data) => {this.room=data;});
}



  }
