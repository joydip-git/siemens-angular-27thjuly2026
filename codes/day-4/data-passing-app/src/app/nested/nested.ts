import { Component, EventEmitter, input, Input, InputSignal, signal, Output, output, OutputEmitterRef, OnChanges, SimpleChanges, computed } from '@angular/core';

@Component({
  selector: 'app-nested',
  imports: [],
  templateUrl: './nested.html',
  styleUrl: './nested.css',
})
export class Nested //implements OnChanges 
{

  //@Input('titleData') titleValue = signal('')
  //@Output('titleDataChanged') titleValueChanged = new EventEmitter<string>()

  titleValueChanged: OutputEmitterRef<string> = output<string>({ alias: 'titleDataChanged' })
  titleValue: InputSignal<string> = input('', { alias: 'titleData' })
  //titleToDisplay = '';
  titleToDisplay = computed(() => 'Title: ' + this.titleValue())

  updateTitleValue(newTitle: string) {
    this.titleValueChanged.emit(newTitle)
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.titleToDisplay = 'Title: ' + this.titleValue()
  // }
}
