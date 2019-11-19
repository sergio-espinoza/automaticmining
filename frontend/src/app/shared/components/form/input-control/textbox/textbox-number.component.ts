import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textbox-number-control',
  templateUrl: './textbox-number.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxNumberControlComponent implements OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() form: FormGroup;
  @Input() controlName = '';
  @Input() required = false;
  @Input() errorMessage = '';
  @Input() matHintEnd = '';
  @Input() matHintStart = '';
  @Input() matIconPrefix = '';
  @Input() matPrefix = '';
  @Input() matSuffix = '';
  @Input() matIconSuffix = '';
  @Input() maxLength = 1000;
  @Input() minLength = 0;
  @Input() max = 100000;
  @Input() min = 0;
  @Input() type = 'number';
  @Input() matIconButtonPrefix = '';
  @Input() matIconButtonSuffix = '';

  @Output() clickButtonPrefix = new EventEmitter<void>();
  @Output() clickButtonSuffix = new EventEmitter<void>();

  constructor() { }

  ngOnInit() { }

  onClickButtonPrefix(): void {
    this.clickButtonPrefix.emit(null);
  }
  onClickButtonSuffix(): void {
    this.clickButtonSuffix.emit(null);
  }
}
