import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnChanges {

  @Input() currentCountry!: string | null;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`data-display onChanges triggered. Current Country: ${this.currentCountry}`);
    
  }

}
