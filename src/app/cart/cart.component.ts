import { Component } from '@angular/core';
import { CartService } from '../cart.service';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name:'',
    address:''
  });

  constructor(
    private cartService:CartService,
    private formBuilder:FormBuilder
  ) { }

    onSubmit(){
      this.items = this.cartService.clearCart();
      const {name,address} = this.checkoutForm.value;
      this.checkoutForm.reset();
      if(name&&address){
        window.alert(`${name} seu pedido foi enviado para ${address}`);
        return;
      }
      window.alert(`Seu pedido foi enviado`);
      
    }
  
}
