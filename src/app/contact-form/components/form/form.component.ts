import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactInfoComponent } from '../contact-info/contact-info.component';
import { FormControlComponent } from './form-control/form-control.component';
import { SubjectSelectComponent } from './form-control/subject-select/subject-select.component';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    standalone: true,
    imports: [ContactInfoComponent, FormControlComponent, SubjectSelectComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {}
