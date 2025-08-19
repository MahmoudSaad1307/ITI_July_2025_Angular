import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[] = [
    { image: 'https://www.shipbob.com/wp-content/uploads/2022/06/PRODUCT-RANGE.jpg', title: 'Product A', quantity: 2 },
    { image: 'https://www.shipbob.com/wp-content/uploads/2022/06/PRODUCT-RANGE.jpg', title: 'Product B', quantity: 1 },
    { image: 'https://glopackjsm.com/wp-content/uploads/2023/06/foamers.jpg', title: 'Product C', quantity: 0 },
  ];
}
