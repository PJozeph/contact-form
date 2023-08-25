import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { SubjectSelectComponent } from '../subject-select/subject-select.component';

@Component({
    selector: 'app-form-control',
    templateUrl: './form-control.component.html',
    styleUrls: ['./form-control.component.scss'],
    standalone: true,
    imports: [InputComponent, MatFormFieldModule, ReactiveFormsModule, CommonModule, SubjectSelectComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class FormControlComponent {
    constructor(private formBuilder: FormBuilder) {}

    public form = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]],
        phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
        message: ['', Validators.required],
    });

    public onSubmit() {
        console.log(this.form.value);
    }
}
