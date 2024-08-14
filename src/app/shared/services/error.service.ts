import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private errorSubject = new BehaviorSubject<{ errorMessage: string, errorCode: number } | null>(null);
  public error$ = this.errorSubject.asObservable();

  public setError(error: { errorMessage: string, errorCode: number }) {
    this.errorSubject.next(error);
  }
}
