import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

//  apiUrl: string = 'https://freeapi.miniprojectideas.com/api/BigBasket/';
  apiUrl: string = 'https://projectapi.gerasim.in/api/OnlineLearning/';
  

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(this.apiUrl + "GetAllCourse");
  }
}
