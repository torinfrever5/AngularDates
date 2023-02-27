import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-date-searcher',
  templateUrl: './date-searcher.component.html',
  styleUrls: ['./date-searcher.component.css']
})
export class DateSearcherComponent {
  private searchTerms = new Subject<string>();

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
}
