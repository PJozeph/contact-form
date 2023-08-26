import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { EmailService } from '../services/email.service';
import { contactFromAction } from './actions';
import { HttpErrorResponse } from '@angular/common/http';

export const sendEmailEffect = createEffect(
    (actions$ = inject(Actions), emailService = inject(EmailService)) => {
        return actions$.pipe(
            ofType(contactFromAction.sendForm),
            switchMap(({ request }) => {
                return emailService.sendEmail(request).pipe(
                    map(() => contactFromAction.formSentSuccess()),
                    catchError(() => of(contactFromAction.formSentFailure()))
                );
            })
        );
    },
    { functional: true }
);
