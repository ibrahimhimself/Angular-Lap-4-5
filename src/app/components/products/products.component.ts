import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  clientName:string = "Thanks for purchasing from our Store Ibrahim";
  productList:IProduct[];
  storeInfoClass : Store;
constructor(){
  this.storeInfoClass = new Store('ITI Store', ["Mansoura","Smart","Alex","Sohag"], '../../../assets/Natural.jpg');

  this.productList=[
    {ID:1 , Name:'Samsung' , Quantity:10 , Price:10000 , Img:'../../../assets/Natural.jpg' , CateogryID:1},
    {ID:2 , Name:'Iphone' , Quantity:3 , Price:30000 , Img:'../../../assets/Natural.jpg' , CateogryID:1},
    {ID:3 , Name:'Oppo' , Quantity:0 , Price:7000 , Img:'../../../assets/Natural.jpg' , CateogryID:1},
    {ID:10 , Name:'Lenovo' , Quantity:8 , Price:11000 , Img:'../../../assets/Natural.jpg' , CateogryID:2},
    {ID:20 , Name:'HP' , Quantity:7 , Price:12000 , Img:'../../../assets/Natural.jpg' , CateogryID:2},
    {ID:30 , Name:'Dell' , Quantity:6 , Price:15000 , Img:'../../../assets/Natural.jpg' , CateogryID:2},
    {ID:100 , Name:'Lg' , Quantity:0 , Price:5000 , Img:'../../../assets/Natural.jpg' , CateogryID:3},
    {ID:200 , Name:'Samsung' , Quantity:10 , Price:7000 , Img:'../../../assets/Natural.jpg' , CateogryID:3},
    {ID:300 , Name:'Toshiba' , Quantity:12 , Price:9000 , Img:'../../../assets/Natural.jpg' , CateogryID:3}
  ]
}

showMsg:boolean = false;
toggleMsg(){
  this.showMsg =! this.showMsg;
}

showImage:boolean = true;
toggleImage(){

  this.showImage =! this.showImage;
}


  ngOnInit(): void {
  }

}
