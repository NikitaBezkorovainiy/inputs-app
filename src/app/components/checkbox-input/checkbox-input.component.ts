import { Component, ChangeDetectorRef } from '@angular/core';
import {BaseInputComponent} from "../../shared/components/base-input.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss']
})
export class CheckboxInputComponent extends BaseInputComponent<boolean> {

  constructor(cdf: ChangeDetectorRef) {
    super(cdf);
    this.form = this.createFormControl(false);
  }

  protected createFormControl(value: boolean): FormControl {
    return new FormControl(value);
  }

  protected inputIsChanged(value: boolean): void {
    this.isChanged.emit(value);
  }
}
