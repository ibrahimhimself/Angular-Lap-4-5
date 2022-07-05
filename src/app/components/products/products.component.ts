import { Component, HostListener, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { NationalIDBirthYearPipe } from 'src/app/Pipes/national-id-birth-year.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  clientName:string = " Ibrahim Saad";
  msg:string = "Thanks for purchasing from our Store";

  productList:IProduct[];
  storeInfoClass : Store;
  dateNow:Date = new Date();
  nationalID:number = 29906011601918;

constructor(){

  this.storeInfoClass = new Store('ITI Store', ["Mansoura","Smart","Alex","Sohag"], '../../../assets/Natural.jpg');
  this.productList=[
    {ID:1 , Name:'Samsung' , Quantity:10 , Price:10000 , Img:'../../../assets/Natural.jpg' , CateogryID:1},
    {ID:2 , Name:'Iphone' , Quantity:1 , Price:30000 , Img:'../../../assets/Natural.jpg' , CateogryID:1},
    {ID:3 , Name:'Oppo' , Quantity:0 , Price:7000 , Img:'../../../assets/Natural.jpg' , CateogryID:1},
    {ID:10 , Name:'Lenovo' , Quantity:2 , Price:11000 , Img:'../../../assets/Natural.jpg' , CateogryID:2},
    {ID:20 , Name:'HP' , Quantity:7 , Price:12000 , Img:'../../../assets/Natural.jpg' , CateogryID:2},
    {ID:30 , Name:'Dell' , Quantity:1 , Price:15000 , Img:'../../../assets/Natural.jpg' , CateogryID:2},
    {ID:100 , Name:'Lg' , Quantity:0 , Price:5000 , Img:'../../../assets/Natural.jpg' , CateogryID:3},
    {ID:200 , Name:'Samsung' , Quantity:3 , Price:7000 , Img:'../../../assets/Natural.jpg' , CateogryID:3},
    {ID:300 , Name:'Toshiba' , Quantity:2 , Price:9000 , Img:'../../../assets/Natural.jpg' , CateogryID:3}
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

increaseQuantity(item:IProduct){

  return item.Quantity--;
}


  ngOnInit(): void {
  }

}
