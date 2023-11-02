import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  ngOnInit(): void {
    this.addEventListeners();
  }

  addEventListeners(): void {
    let paths = document.querySelectorAll('path');

    for(let i = 0; i < paths.length; i++) {
      paths[i].addEventListener('mouseover', () => {
        let name: string | null = paths[i].getAttribute('name');

        if (name != null) {
          this.getCountryData(name);
        }
      })
    }
  }

  getCountryData(name: string) {
    console.log(`name: ${name}`);
    
  }
}
