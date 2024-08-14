import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../shared/services/data.service";
import {pipe, Subscription, tap} from "rxjs";
import {InputInterface} from "../shared/interfaces/input.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit, OnDestroy {

  public inputs?: InputInterface
  private subscriptions: Subscription = new Subscription()

  constructor(
    private readonly dataService: DataService,
    private readonly cdf: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    this.cdf.detach()
    this.getData()
  }

  public updateData(value: string | boolean, type: string): void {
    const updateData = this.dataService.updateItem({[type]: value}).subscribe({
      next: (inputs) => {
        this.inputs = inputs
        this.cdf.detectChanges()
      }
    })

    this.subscriptions.add(updateData)
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  private getData(): void {
    const getData = this.dataService.getItem().subscribe({
      next: value => {
        this.inputs = value
        this.cdf.detectChanges()
      },
    })
    this.subscriptions.add(getData)
  }

}
