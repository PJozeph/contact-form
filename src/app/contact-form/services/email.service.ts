import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormRequestInterface } from 'src/app/shared/types/form-request.interface';

@Injectable({
    providedIn: 'root',
})
export class EmailService {
    constructor(private http: HttpClient) {}

    sendEmail(formRequest: FormRequestInterface): Observable<any> {
        return this.http.post('https://contact-form-service-bvfckqryxa-uc.a.run.app/email', formRequest);
    }
}
