import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../models/product';
import { ServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  //imports: [ReactiveFormsModule],
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  private svc = inject<ServiceContract>(PRODUCT_SERVICE_TOKEN)
  private router = inject(Router)
  // private formBuilder = inject(FormBuilder)

  // addForm = new FormGroup({
  //   productId: new FormControl('0',),
  //   productName: new FormControl('')
  // })
  // addForm = this.formBuilder.group({
  //   productId: ['0'],
  //   productName: [''],
  //   productCode: [''],
  //   description: [''],
  //   price: ['0'],
  //   starRating: ['0'],
  //   imageUrl: [''],
  //   releaseDate: ['']
  // })
  submit(frm: NgForm) {
    console.log(frm);
    if (window.confirm('want to add?')) {

      this.svc.addProduct(frm.form.value).subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            window.alert('product added')
          } else {
            window.alert('error: ' + apiResponse.message)
          }
        },
        error: (err) => {
          window.alert(err)
        },
        complete: () => {
          this.router.navigate(['/products'])
        }
      })
    }
  }
}
