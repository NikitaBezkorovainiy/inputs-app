import { Component, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RadioEnum } from '../../shared/enum/radio.enum';
import { BaseInputComponent } from '../../shared/components/base-input.component';


@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss'],
})
export class RadioInputComponent extends BaseInputComponent<RadioEnum> {

  constructor(cdf: ChangeDetectorRef) {
    super(cdf);
    this.form = this.createFormControl(RadioEnum.phone);
  }

  protected createFormControl(value: RadioEnum): FormControl {
    return new FormControl(value);
  }

  protected inputIsChanged(value: RadioEnum): void {
    this.isChanged.emit(value);
  }
}
