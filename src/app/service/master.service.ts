import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel, ProductList } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

//  apiUrl: string = 'https://freeapi.miniprojectideas.com/api/BigBasket/';
  // apiUrl: string = 'https://projectapi.gerasim.in/api/OnlineLearning/';
  apiUrl: string = 'https://dummyjson.com/products';

  
  

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<APIResponseModel> {
  // getAllProducts(): Observable<ProductList[]>{

    // return this.http.get<APIResponseModel>(this.apiUrl + "GetAllCourse");
    return this.http.get<APIResponseModel>(this.apiUrl);
    // return this.http.get<ProductList[]>(this.apiUrl);
  }

  getAllCategory(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl+"/Category-list")
  }

  getAllProductsByCategory(category: string): Observable<APIResponseModel> {
    const url = `${this.apiUrl}/category/${category}`;
    return this.http.get<APIResponseModel>(url);
    // return this.http.get<APIResponseModel>(this.apiUrl+"/category/"+category)
  }
}

