import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { contactFromAction } from 'src/app/contact-form/store/actions';
import { selectIsSubmitting } from 'src/app/contact-form/store/reducers';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { FormRequestInterface } from 'src/app/shared/types/form-request.interface';
import { SubjectSelectComponent } from '../subject-select/subject-select.component';

@Component({
    selector: 'app-form-control',
    templateUrl: './form-control.component.html',
    styleUrls: ['./form-control.component.scss'],
    standalone: true,
    imports: [InputComponent, MatFormFieldModule, ReactiveFormsModule, CommonModule, SubjectSelectComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlComponent implements OnInit {
    constructor(private formBuilder: FormBuilder, private store: Store) {}

    data$ = combineLatest({
        isSubmitting: this.store.select(selectIsSubmitting),
    });

    ngOnInit(): void {
        this.data$.subscribe(console.log);
    }

    public form = this.formBuilder.nonNullable.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]],
        phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
        message: ['', Validators.required],
        subject: ['', Validators.required],
    });

    public onSubmit() {
        const request: FormRequestInterface = this.form.getRawValue();
        this.store.dispatch(contactFromAction.sendForm({ request }));
    }
}
