import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightNumber]',
})
export class HighlightNumberDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const textContent = this.el.nativeElement.textContent;
    const words = textContent.split(/\b/);
    console.log('Words ' + words);
    this.renderer.setProperty(this.el.nativeElement, 'textContent', '');
    for (const word of words) {
      if (!isNaN(Number(word))) {
        console.log(`Word ${word}`);
        const span = this.renderer.createElement('span');
        this.renderer.addClass(span, 'highlighted-number');
        this.renderer.setStyle(span, 'color', 'red');
        const textNode = this.renderer.createText(word);
        this.renderer.appendChild(span, textNode);
        this.renderer.appendChild(this.el.nativeElement, span);
      } else {
        const textNode = this.renderer.createText(word);
        this.renderer.appendChild(this.el.nativeElement, textNode);
      }
    }
  }
}
