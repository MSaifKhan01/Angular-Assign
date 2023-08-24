import { Component ,OnInit,ChangeDetectorRef} from '@angular/core';
import { Menu } from '../RestaurentMenu.model';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurent-menu',
  templateUrl: './restaurent-menu.component.html',
  styleUrls: ['./restaurent-menu.component.css']
})
export class RestaurentMenuComponent  implements OnInit{
  arr:any[]=JSON.parse(localStorage.getItem("cart")||"[]");

  foods:Menu[]=[]
  filtereditems: any = [];
  constructor(private cdr: ChangeDetectorRef,private menuservice:MenuService, private route: Router){}

  getData(){
    this.menuservice.GetData().subscribe((data)=>{
      
      this.foods=data.categories
      this.filterItem()
    })
  }
  ngOnInit(): void {
    this.getData()
    this.filtereditems = this.foods;
    this.filterItem();
  }
  HandleClick(food:Menu){
    for(let i=0;i<this.arr.length;i++){
      if(this.arr[i].idCategory==food.idCategory){
        alert("Product already in cart")
        return 
      }
    }
    let random = Math.floor(Math.random() * 100);
    this.arr.push({...food,quantity:1, price: random})
    localStorage.setItem("cart",JSON.stringify(this.arr))
    alert("Product added to cart")
  }

   //for button
  //  redirectToCart() {
  //   this.route.navigate(['cart-page']);
  // }

  //filter by category
  selectedFood: string = 'alldata';

  filterItem() {
    this.getData();

    if (this.selectedFood === 'alldata') {
      this.filtereditems = this.foods;
      console.log(this.filtereditems);
    } else {
      this.filtereditems = this.foods.filter((ele) => {
        return ele.strCategory === this.selectedFood;
      });
      console.log(this.filtereditems);
    }
  }
  logData() {
    console.log('Selected Food:', this.selectedFood);
    console.log('Filtered Items:', this.filtereditems);
  }
}
