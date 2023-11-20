import { Injectable, ElementRef, Renderer2 } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollObs: Observable<Event>;

  constructor() {
    // Observes the scroll event in window
    this.scrollObs = fromEvent(window, 'scroll');
  }

  // Obtains the current position of the scroll in page
  getScrollPosition(): Observable<number> {
    return this.scrollObs.pipe(
      // Maps the scroll event in the window's position
      map(() => window.scrollY)
    );
  }
}