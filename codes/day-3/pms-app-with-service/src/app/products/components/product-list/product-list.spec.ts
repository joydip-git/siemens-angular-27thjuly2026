import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideProductService } from "../../../config/app-providers";
import { ProductList } from './product-list';
import { ProductService } from '../../services/product.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/constants';

describe(
  'ProductList tests',
  () => {

    let fixture: ComponentFixture<ProductList>;

    beforeEach(
      async () => {
        await TestBed.configureTestingModule({
          //providers: [ProductService]
          imports:[ProductList],
          providers: [
            provideProductService()
          ]
        }).compileComponents()
        
        fixture = TestBed.createComponent(ProductList)
      }
    )

    it("during component creation the title signal has received default value: List of Products",
      () => {
        let productList: ProductList = fixture.componentInstance
        expect(productList.title()).toEqual('List of Products')
      }
    )

    it("product list displaying: List of Products in H2 element",
      async () => {
        await fixture.whenStable()

        const h2: HTMLElement = fixture.debugElement.nativeElement.querySelector('h2')
        expect(h2.textContent).toBe('List of Products')
      }
    )
    it("table's tbody element has 5 rows (tr)",
      async () => {
        await fixture.whenStable()

        const trElements: DebugElement[] = fixture.debugElement.queryAll(By.css('tbody tr'))
        expect(trElements.length).toBe(5)
      }
    )
  }
);
