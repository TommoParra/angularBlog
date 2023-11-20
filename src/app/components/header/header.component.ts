import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isScrolled = false;

  constructor(
    private scrollService: ScrollService,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit() {
    // Observes the possition of the scroll and changes the class
    this.scrollService.getScrollPosition().subscribe((scrollPos) => {
      // Check if possition is greater than 0
      this.isScrolled = scrollPos > 0;

      if (this.isScrolled) {
        // Adds the class "scrolled" to the component's element
        this.renderer.addClass(this.el.nativeElement, 'scrolled');
      } else {
        // Removes the class "scrolled" to the component's element
        this.renderer.removeClass(this.el.nativeElement, 'scrolled');
      }
    });
  }
}