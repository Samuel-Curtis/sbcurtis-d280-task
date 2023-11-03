import { Injectable } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { CountryData } from '../Models/country-data.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ApiResponse } from '../Models/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryDataService {

  constructor(private httpClient: HttpClient) { }

  getCountryData(countryCode: string): Observable<ApiResponse> {

    let endpoint = `https://api.worldbank.org/v2/country/${countryCode}?format=json`
    
    return this.httpClient.get<ApiResponse>(endpoint).pipe(
      map((resp: any) => {
        return resp[1][0];
      })
    )
  }
}
