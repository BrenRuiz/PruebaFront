import { NgModule } from "@angular/core";
import { CreateComponent } from './pages/create/create.component';
import { ReadComponent } from './pages/read/read.component';
import { UpdateComponent } from './pages/update/update.component';
import { CustomerInputComponent } from './components/customer-input/customer-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CreateComponent,
        ReadComponent,
        UpdateComponent,
        CustomerInputComponent,
    ],
    exports: [
        CreateComponent,
        ReadComponent,
        UpdateComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ]
})

export class CustomerModule {}