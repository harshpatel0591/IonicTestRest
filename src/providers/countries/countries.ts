import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CountriesProvider {

  constructor(public http: Http) {
    console.log('Hello CountriesProvider Provider');
  }


  getCountries()
  {
    return this.http.get('https://restcountries.eu/rest/v2/all').map(data => data.json());
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

}
