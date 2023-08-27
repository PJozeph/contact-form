import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-subject-select',
    templateUrl: './subject-select.component.html',
    styleUrls: ['./subject-select.component.scss'],
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectSelectComponent {

    @Output() selectedSubjectEvent = new EventEmitter<string>();

    subjects: string[] = ['Lets work together', 'Hey', 'I want to build a website', 'I need you to add a new feature'];

    public selectedSubject: number = 0;

    public isSelected(index: number): boolean {
        return index === this.selectedSubject;
    }

    public selectSubject(index: number): void {
        this.selectedSubject = index;
        this.selectedSubjectEvent.emit(this.subjects[index]);
    } 
}
