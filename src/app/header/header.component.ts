import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

   @ViewChild('hideIt') hideIt?: ElementRef<HTMLInputElement>;

  
  ngAfterViewInit() {
    document.addEventListener('click', () => {
      this.hideIt?.nativeElement.classList.remove('show');
    });
  }

}
