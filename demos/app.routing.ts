import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { SwitchSampleComponent } from "./switch/switchsample.component";
import { RippleSampleComponent } from "./ripple/ripplesample.component";
import { FilterSampleComponent } from "./filter/filtersample.component";
import { RadioSampleComponent } from "./radio/radiosample.component";
import { InputsSampleComponent } from "./inputs/inputssample.component";
import { LayoutSampleComponent } from "./layout/layoutsample.component";
import { CarouselSampleComponent } from "./carousel/carouselsample.component";
import { TabBarSampleComponent } from "./tabbar/tabbarsample.component";
import { ListSampleComponent } from "./list/listsample.component";
import { ButtonsSampleComponent } from "./button/buttonssample.component";
import { AvatarSampleComponent } from "./avatar/avatarsample.component";
import { NavbarSampleComponent } from "./navbar/navbarsample.component";
import { DialogSampleComponent } from "./dialog/dialogsample.component";
import { ProgressbarSampleComponent } from "./progressbar/progressbar.component";

const appRoutes: Routes = [
    {
        path: "switch",
        component: SwitchSampleComponent
    },
    {
        path: "radio",
        component: RadioSampleComponent
    },
    {
        path: "carousel",
        component: CarouselSampleComponent
    },
    {
        path: "tabbar",
        component: TabBarSampleComponent
    },
    {
        path: "list",
        component: ListSampleComponent
    },
    {
        path: '',
        redirectTo: '/switch',
        pathMatch: 'full'
    },
    {
        path: "avatar",
        component: AvatarSampleComponent
    },
    {
        path: "buttons",
        component: ButtonsSampleComponent
    },
    {
        path: "filter",
        component: FilterSampleComponent
     },
     {
         path: "ripple",
         component: RippleSampleComponent
    },
    {
         path: "layout",
         component: LayoutSampleComponent
     },
     {
         path: "inputs",
         component: InputsSampleComponent
     },
     {
         path: "navbar",
         component: NavbarSampleComponent
     },
     {
        path: "dialog",
        component: DialogSampleComponent
    },
    {
        path: "progressbar",
        component: ProgressbarSampleComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);