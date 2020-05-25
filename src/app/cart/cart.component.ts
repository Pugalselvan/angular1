import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  cartItems:any[]=[];

  cartTotalPrice:any = 0;

  constructor(public pdtSer:ProductsService ) { }

  ngOnInit() {

    this.pdtSer.cartItems().subscribe(
      (data:any) =>{
      console.log(data.productsInCart);
      this.cartItems= data.productsInCart
         
      for(var x in this.cartItems)
      {
        this.cartTotalPrice += this.cartItems[x].p_price;
      }
    },
    (error)=>{
      console.log(error);  
    })  
  }
  editProduct(i)
  {
  console.log(i);
  }

}
