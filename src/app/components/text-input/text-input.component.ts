import { Component, ChangeDetectorRef } from '@angular/core';
import { BaseInputComponent } from '../../shared/components/base-input.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent extends BaseInputComponent<string> {

  constructor(cdf: ChangeDetectorRef) {
    super(cdf);
    this.form = this.createFormControl('');
  }

  protected createFormControl(value: string): FormControl {
    return new FormControl(value);
  }

  protected inputIsChanged(value: string): void {
    this.isChanged.emit(value);
  }
}
