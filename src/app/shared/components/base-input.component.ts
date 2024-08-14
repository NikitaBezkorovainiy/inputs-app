import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, Subscription, timer } from 'rxjs';

@Component({
  template: ''
})
export abstract class BaseInputComponent<T> implements OnChanges, OnInit, OnDestroy {
  public form: FormControl = new FormControl();
  public showIsUpdated = false;
  private subscriptions: Subscription = new Subscription();

  @Input() data?: T;
  @Output() isChanged: EventEmitter<T> = new EventEmitter<T>();

  protected constructor(protected readonly cdf: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.cdf.detach();
    this.formListener();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (!changes['data'].firstChange) {
      this.showIsUpdated = true;
      timer(3000).subscribe(() => {
        this.showIsUpdated = false;
        this.cdf.detectChanges();
      });
    }

    this.form.setValue(changes['data'].currentValue, { emitEvent: false });
    this.cdf.detectChanges();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private formListener(): void {
    const formListener = this.form.valueChanges.pipe(debounceTime(1000)).subscribe({
      next: value => this.inputIsChanged(value),
    });
    this.subscriptions.add(formListener);
  }

  protected abstract inputIsChanged(value: T): void;

  protected abstract createFormControl(value: T): FormControl;
}
