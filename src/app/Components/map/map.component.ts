import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Output() countryCodeEmitter: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit(): void {
    this.addEventListeners();
  }

  addEventListeners(): void {
    let paths = document.querySelectorAll('path');

    for(let i = 0; i < paths.length; i++) {
      paths[i].addEventListener('mouseover', () => {
        let countryCode: string | null = paths[i].getAttribute('id');

        if (countryCode != null) {
          this.getCountryData(countryCode);
        }
      })
    }
  }

  getCountryData(countryCode: string) {
    this.countryCodeEmitter.emit(countryCode)
  }
}
