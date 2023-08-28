import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { selectEmailIsSent, selectIsSubmitting } from 'src/app/contact-form/store/reducers';

@Component({
    selector: 'app-send-message',
    templateUrl: './send-message.component.html',
    styleUrls: ['./send-message.component.css'],
    standalone: true,
    imports: [CommonModule, MatProgressSpinnerModule],
})
export class SendMessageComponent {
    @Input() contactFromGroup: FormGroup | null = null;

    constructor(private store: Store) {}

    data$ = combineLatest({
        isSubmitting: this.store.select(selectIsSubmitting),
        isEmailSent: this.store.select(selectEmailIsSent),
    });
}
