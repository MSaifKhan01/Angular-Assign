import { Component,OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit{

  data:any[]=[]
  SumEle=0
  constructor(private cartService:MenuService){}
  ngOnInit(): void {
    this.getCartData()
  }
  getCartData(){
    this.data=this.cartService.GetCartData()
  }

  IncrementQty(id:string){


    for(let i=0;i<this.data.length;i++){

      if(this.data[i].idCategory==id){
        if(!this.data[i].originalPrice){
          this.data[i].originalPrice = this.data[i].price;
        }


        this.data[i].quantity++;
        this.data[i].price = this.data[i].originalPrice * this.data[i].quantity;
      }
     
    }
    localStorage.setItem("cart",JSON.stringify(this.data))
    this.getCartData()
  }
  DecrementQty(id:string){
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].idCategory==id && this.data[i].quantity>1){
        if (!this.data[i].originalPrice) {
          this.data[i].originalPrice = this.data[i].price;
        }
        this.data[i].quantity--
        // this.data[i].price = this.data[i].price * this.data[i].quantity;
      }
      this.data[i].price = this.data[i].originalPrice * this.data[i].quantity;
    }
    localStorage.setItem("cart",JSON.stringify(this.data))
    this.getCartData()
  }

DeleteFood(id:string){
  for(let i=0;i<this.data.length;i++){
    if(this.data[i].idCategory==id){
      this.data.splice(i,1)
    }
  }

  localStorage.setItem("cart",JSON.stringify(this.data))
  this.getCartData()
  alert("Food is Deleted from Cart")
}

}
