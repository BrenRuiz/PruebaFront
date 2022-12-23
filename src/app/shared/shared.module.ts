import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MapComponent } from './map/map.component';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
    declarations: [
        MapComponent
    ],
    exports: [
        MapComponent,
        GoogleMapsModule
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})

export class SharedModule {}