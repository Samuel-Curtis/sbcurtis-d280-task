import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  currentCountryCode!: string | null;

  updateCountryCode(countryCode: string): void {
    this.currentCountryCode = countryCode;
  }
}
