import { Component ,OnInit} from '@angular/core';
import { Menu } from '../RestaurentMenu.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-restaurent-menu',
  templateUrl: './restaurent-menu.component.html',
  styleUrls: ['./restaurent-menu.component.css']
})
export class RestaurentMenuComponent  implements OnInit{
  arr:any[]=JSON.parse(localStorage.getItem("cart")||"[]");

  foods:Menu[]=[]
  constructor(private menuservice:MenuService){}

  getData(){
    this.menuservice.GetData().subscribe((data)=>{
      this.foods=data.categories
    })
  }
  ngOnInit(): void {
    this.getData()
  }
  HandleClick(food:Menu){
    for(let i=0;i<this.arr.length;i++){
      if(this.arr[i].idCategory==food.idCategory){
        alert("Product already in cart")
        return 
      }
    }
    this.arr.push({...food,quantity:1})
    localStorage.setItem("cart",JSON.stringify(this.arr))
    alert("Product added to cart")
  }
}
