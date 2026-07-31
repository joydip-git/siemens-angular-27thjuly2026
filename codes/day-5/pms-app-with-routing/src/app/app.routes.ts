import { Route, Routes } from '@angular/router';
import { ProductContainer } from './products/components/product-container/product-container';
import { AddProduct } from './products/components/add-product/add-product';
import { ViewProduct } from './products/components/view-product/view-product';
import { Home } from './shared/components/home/home';
import { EditProduct } from './products/components/edit-product/edit-product';
import { PageNotFound } from './shared/components/page-not-found/page-not-found';

// const productRoute: Route = {
//     path: 'products',
//     component: ProductContainer
// }
export const routes: Routes = [
    {
        path: 'products',
        //outlet:'productOutlet',
        children: [
            {
                path: '',
                component: ProductContainer
            },
            {
                path: 'add',
                component: AddProduct
            },
            {
                path: 'view/:id',
                component: ViewProduct
            },
            {
                path: 'edit',
                component: EditProduct
            }
        ]
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: '', pathMatch: 'full', redirectTo: '/home'
    },
    {
        path: '**', component: PageNotFound
    }
];
