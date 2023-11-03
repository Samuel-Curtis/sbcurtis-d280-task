import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Output() countryNameEmitter: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit(): void {
    this.addEventListeners();
  }

  addEventListeners(): void {
    let paths = document.querySelectorAll('path');

    for(let i = 0; i < paths.length; i++) {
      paths[i].addEventListener('mouseover', () => {
        let name: string | null = paths[i].getAttribute('name');
        let countryCode: string | null = paths[i].getAttribute('id');

        if (name != null && countryCode != null) {
          this.getCountryData(countryCode);
        }
      })
    }
  }

  getCountryData(name: string) {
    // console.log(`name: ${name}`);
    this.countryNameEmitter.emit(name)
  }
}
