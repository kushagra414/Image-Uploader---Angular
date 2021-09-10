import {
  Directive,
  Output,
  Input,
  EventEmitter,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {
  @HostBinding('class.fileOverDragArea') fileOver: boolean = false;
  @Output() fileDropped = new EventEmitter<any>();


  //Drag Over listener
  @HostListener('dragover', ['$event']) onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }
  //Drag Leave listener
  @HostListener('dragleave', ['$event']) onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
  }

  //Drop listener
  @HostListener('drop', ['$event']) onDrop(evt: any){
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    let files = evt.dataTransfer.files;
    if(files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
