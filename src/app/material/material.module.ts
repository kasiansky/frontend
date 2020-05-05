import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, 
} from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'; 
import {MatTabsModule} from '@angular/material'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 






@NgModule({
  declarations: [ ],
  
  imports: [
    CommonModule,
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule,
    MatTableModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,
    MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,MatSidenavModule,
    MatListModule, MatFormFieldModule,MatTabsModule , MatButtonToggleModule,
  ],
  exports: [ CommonModule,
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule,
    MatTableModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,
    MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,MatSidenavModule,
    MatListModule, MatFormFieldModule, MatTabsModule, MatButtonToggleModule,]
})
export class MaterialModule { }
