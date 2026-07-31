import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideProductService } from "../config/app-providers";
import { ProductList } from '../products/components/product-list/product-list';
import { ProductService } from '../products/services/product.service';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //providers: [ProductService]
      imports: [App],
      providers:[provideProductService()]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
