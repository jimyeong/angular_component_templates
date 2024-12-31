import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
export const routeConfig: Routes = [
    {
        path: '',
        title: "Home",
        component: HomeComponent
    },
    {
        path: "details/:id",
        title: "Details",
        component: DetailsComponent
    }
];

export default routeConfig;
export const routes: Routes = [];
