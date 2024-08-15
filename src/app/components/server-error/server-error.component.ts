import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorService } from '../../shared/services/error.service';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss'],
})
export class ServerErrorComponent implements OnInit, OnDestroy {

  public errorMessage: string = 'Some server error';

  public errorCode?: number;

  private subscriptions: Subscription = new Subscription();

  constructor(private readonly errorService: ErrorService) {
  }

  public ngOnInit(): void {
    this.errorExtraction();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


  private errorExtraction(): void {
    const errorExtraction = this.errorService.error$.subscribe(error => {
      if (error) {
        this.errorMessage = error.errorMessage;
        this.errorCode = error.errorCode;
      }
    });
    this.subscriptions.add(errorExtraction);
  }

}
