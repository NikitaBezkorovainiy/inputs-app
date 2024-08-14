import {Injectable} from '@angular/core';
import {InMemoryDbService, ResponseOptions, STATUS} from 'angular-in-memory-web-api';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  private item = {text: "text 1", checkbox: true, radio: "phone"};

  createDb() {
    return {item: this.item};
  }

  get(reqInfo: any): Observable<ResponseOptions> {
    return reqInfo.utils.createResponse$(() => ({
      body: this.item,
      status: STATUS.OK,
    }));
  }

  put(requestInfo: any): Observable<ResponseOptions> | ResponseOptions {
    const updatedFields = requestInfo.utils.getJsonBody(requestInfo.req);
    this.item = {...this.item, ...updatedFields};
    return requestInfo.utils.createResponse$(() => {
      return {
        body: this.item,
        status: STATUS.OK,
      };
    });
  }
}
