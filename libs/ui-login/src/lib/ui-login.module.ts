import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@ekklesia/material';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class UiLoginModule {}
