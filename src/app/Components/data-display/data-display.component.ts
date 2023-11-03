import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiResponse } from 'src/app/Models/api-response.interface';
import { CountryData } from 'src/app/Models/country-data.interface';
import { CountryDataService } from 'src/app/Services/country-data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnChanges {

  @Input() currentCountryCode!: string | null;
  country!: CountryData;

  constructor(private service: CountryDataService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.currentCountryCode) {
      this.getCountryData(this.currentCountryCode)
    }
  }

  getCountryData(countryCode: string) {
    this.service.getCountryData(countryCode).subscribe({
      next: (data: ApiResponse) => {
        
        this.country = {
          name: data.name,
          capital: data.capitalCity,
          region: data.region.value,
          incomeLevel: data.incomeLevel.value,
          iso2Code: data.iso2Code,
          latitude: data.latitude,
          longitude: data.longitude,
        }
      },
      error: () => {
        console.log(`Show Error`);
        
      }
    })
  }

}
