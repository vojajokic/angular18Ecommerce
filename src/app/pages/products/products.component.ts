import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { APIResponseModel, ProductList } from '../../model/Product';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, OnDestroy {

  // productList: any[] = [];
  productList: ProductList[]  = []; 
  categoryList: string[] = [];

  // categoryList: Observable<string[]> = new Observable<string[]>();
  subscriptionList: Subscription[] = [];
  // httpClient = inject(HttpClient)
  // productList = signal<ProductList []>([]);
  // constructor(private masterService: MasterService) {}

  masterService = inject(MasterService);

  ngOnInit(): void {
    this.loadAllProducts();
    // this.categoryList = this.masterService.getAllCategory().pipe(
    //   map()
    this.masterService.getAllCategory().subscribe((res) => {
        this.categoryList = res;
        console.log(this.categoryList);
      });
        // this.loadAllCategory();
  }

  getProductsByCategory(cat: string) {
    this.masterService.getAllProductsByCategory(cat).subscribe((res: APIResponseModel) => {
      this.productList = res.products;
    })
  }

  loadAllProducts() {
    // this.httpClient.get('https://fakestoreapi.com/products')
    // .subscribe((data: any) => {
    //   this.productList = data;
    // })
    // this.masterService.getAllProducts().subscribe((res: APIResponseModel) => {
      this.subscriptionList.push(this.masterService.getAllProducts().subscribe((res: APIResponseModel) => {
        // this.masterService.getAllProducts().subscribe((res: APIResponseModel) => {
      this.productList = res.products;
      // console.log(this.productList);
  // this.masterService.getAllProducts().subscribe((res) => {
    //     this.productList = res;
      // this.productList.set(res);
      
    }))
  }

  // loadAllCategory() {
  //   this.masterService.getAllCategory().subscribe((res) => {
  //     this.categoryList = res;
  //     console.log(this.categoryList);
  //   })
  // }

  ngOnDestroy(): void {
    this.subscriptionList.forEach(element => {
      element.unsubscribe();
    })
  }

}
