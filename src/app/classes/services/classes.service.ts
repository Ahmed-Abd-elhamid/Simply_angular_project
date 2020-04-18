import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })

export class ClassesService {

  private _apiURI = 'https://afternoon-falls-30227.herokuapp.com/api/v1/courses';
  private _RoomData = new BehaviorSubject(null);

  // title = 'Classesservice';
  // private _rooms = [
  //   {id:1, number:25, name:'Alpa', available:true},
  //   {id:2, number:30, name:'Beta', available:true},
  //   {id:3, number:35, name:'Gamma', available:false},
  //   {id:4, number:40, name:'Zeta', available:true},
  //   {id:5, number:22, name:'Pi', available:false},
  // ];

  constructor(private _http: HttpClient) {}


  setRoomData(data) {
    this._RoomData.next(data);
  }

  get RoomData() {
    return this._RoomData.asObservable();
  }

  getRooms(params = {}) {
     // return this._rooms;
     // console.log(params);

     return this._http.get(this._apiURI, { params });
   }

   getRoomById(id) {
     // return this._rooms.find((room) => room.id == id);
    return this._http.get(`${this._apiURI}/${id}`);
  }

  addRoom(room) {
      // this._rooms.push(room);
      let course = {title:room.name, instructor:room.name, price:room.number, isFree:room.available, isAvailabel:room.available};
      return this._http.post(this._apiURI, course);
  }

}
