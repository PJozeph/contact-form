import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { selectEmailIsSent, selectEmailSentSuccess, selectIsSubmitting } from 'src/app/contact-form/store/reducers';

@Component({
    selector: 'app-send-message',
    templateUrl: './send-message.component.html',
    styleUrls: ['./send-message.component.css'],
    standalone: true,
    imports: [CommonModule, MatProgressSpinnerModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SendMessageComponent {
    @Input() isFormValid: boolean | null = false;

    constructor(private store: Store) {}

    data$ = combineLatest({
        isSubmitting: this.store.select(selectIsSubmitting),
        isEmailSent: this.store.select(selectEmailIsSent),
        isEmailSentSuccess: this.store.select(selectEmailSentSuccess),
    });
}
