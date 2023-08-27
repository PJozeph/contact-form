import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { selectEmailIsSent, selectIsSubmitting } from 'src/app/contact-form/store/reducers';

@Component({
    selector: 'app-send-message',
    templateUrl: './send-message.component.html',
    styleUrls: ['./send-message.component.css'],
    standalone: true,
    imports : [CommonModule]
})
export class SendMessageComponent implements OnInit {
    constructor(private store: Store) {}

    data$ = combineLatest({
        isSubmitting: this.store.select(selectIsSubmitting),
        isEmailSent: this.store.select(selectEmailIsSent),
    });

    ngOnInit() {}
}
