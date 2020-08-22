import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatDialogModule } from '@angular/material/dialog';

const MaterialComponents = [MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatDividerModule, MatExpansionModule, MatSidenavModule, MatListModule, MatSnackBarModule, MatDialogModule]

@NgModule({
  imports:[MaterialComponents],
  exports:[MaterialComponents]
  
})
export class MaterialModule { }
