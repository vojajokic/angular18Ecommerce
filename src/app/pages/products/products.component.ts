import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { APIResponseModel, ProductList } from '../../model/Product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  // productList: ProductList [] = [];
  productList = signal<ProductList []>([]);

  masterService = inject(MasterService);

  ngOnInit(): void {
    
  }

  loadAllProducts() {
    this.masterService.getAllProducts().subscribe((res: APIResponseModel) => {
      //this.productList = res.data;
      this.productList.set(res.data);
      
    })
  }

}
