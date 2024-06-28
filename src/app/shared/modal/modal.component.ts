import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{

  constructor(private el: ElementRef){}

  @Output() dimiss = new EventEmitter();

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  ngOnDestroy(){
    this.el.nativeElement.remove();
  }

  onDismissClick(){
    this.dimiss.emit();
  }

}
