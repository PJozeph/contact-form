import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { contactFromAction } from 'src/app/contact-form/store/actions';
import { selectEmailIsSent, selectIsSubmitting } from 'src/app/contact-form/store/reducers';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { FormRequestInterface } from 'src/app/shared/types/form-request.interface';
import { SendMessageComponent } from './send-message/send-message.component';
import { SubjectSelectComponent } from './subject-select/subject-select.component';

@Component({
    selector: 'app-form-control',
    templateUrl: './form-control.component.html',
    styleUrls: ['./form-control.component.scss'],
    standalone: true,
    imports: [InputComponent, MatFormFieldModule, ReactiveFormsModule, CommonModule, SubjectSelectComponent, SendMessageComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlComponent {
    constructor(private formBuilder: FormBuilder, private store: Store) {}

    data$ = combineLatest({
        isSubmitting: this.store.select(selectIsSubmitting),
        isEmailSent: this.store.select(selectEmailIsSent),
    });

    public onSubjectSelect(subject: string): void {
        this.form.patchValue({ subject });
    }

    public form = this.formBuilder.nonNullable.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]],
        phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
        message: ['', Validators.required],
        subject: ['Lets work together', Validators.required],
    });

    public onSubmit() {
        const request: FormRequestInterface = this.form.getRawValue();
        this.store.dispatch(contactFromAction.sendForm({ request }));
    }
}
