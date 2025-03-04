import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { APIResponseModel, ProductList } from '../../model/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  // productList: any[] = [];
  productList: ProductList[]  = []; 
  // httpClient = inject(HttpClient)
  // productList = signal<ProductList []>([]);
  // constructor(private masterService: MasterService) {}

  masterService = inject(MasterService);

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    // this.httpClient.get('https://fakestoreapi.com/products')
    // .subscribe((data: any) => {
    //   this.productList = data;
    // })
    // this.masterService.getAllProducts().subscribe((res: APIResponseModel) => {
    this.masterService.getAllProducts().subscribe((res) => {
        this.productList = res;
      // this.productList.set(res);
      
    })
  }

}
