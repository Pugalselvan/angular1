import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  product:any;
  pdtName;
  pdtImgPath;
  pdtPrice;
  Pdtcolor:any[]=[];;
  Pdtsizes:any[]=[];
  pdtId;
  pdtqty:any[]=[1,2,3];

  constructor(public myroute:ActivatedRoute ,public pdtSer:ProductsService) { }

  ngOnInit() {
    this.myroute.params.subscribe((params:Params)=>{
      console.log(params.pdtId);
      
      if (params.pdtId) {
        this.pdtId=(params.pdtId);
        this.pdtSer.cartItems().subscribe(
          (data:any) =>{
          this.product= data.productsInCart;
          this.pdtImgPath= this.product[this.pdtId-1].p_img;
          this.pdtName= this.product[this.pdtId-1].p_name;
          this.pdtPrice= this.product[this.pdtId-1].p_price;
          this.Pdtcolor=this.product[this.pdtId-1].p_available_options.colors;
          this.Pdtsizes=this.product[this.pdtId-1].p_available_options.sizes;
          
        },
        (error)=>{
          console.log(error);  
        })  
      }
    });
  }

}
