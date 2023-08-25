import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
})
export class InputComponent implements OnInit {
    @Input() inputFormControl: FormControl = new FormControl();
    @Input() inputTitle: string = '';
    @Input() errorMessage: string = '';
    ngOnInit(): void {
      console.log(this.inputFormControl.value)
    }
}
