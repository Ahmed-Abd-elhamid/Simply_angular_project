import { Component, OnInit, Input } from '@angular/core';
import { ClassesService } from '../classes/services/classes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})

export class RoomsComponent implements OnInit {
  rooms = [];
  courses;
  room;
  pages: any[];
  currentPage: number = 1;

  constructor( private _classesService: ClassesService, private _activatedRoute: ActivatedRoute) {

   }

  ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe((queryParamMap) => {
      // const limit = queryParamMap.get('limit') || 5;
      const params = {};
      queryParamMap.keys.forEach(
        (key) => (params[key] = queryParamMap.get(key))
      );
      // console.log(limit);

    this._classesService.getRooms(params).subscribe((res: any) => {
            if (res.status) {
                this.rooms = [];
                for(let val of res.data){
                  this.rooms.push({id: val.id, number:val.id, name:val.title, available:val.isAvailabel});
                }
                this.currentPage = res.page;
                this.pages = new Array(res.total_pages || 0);
              }
             });
           });
         }

  // this.rooms = this._classesService.getRooms();

  onRoomClick(data){
    // console.log(data);
    this.room= data;
  }


}
