import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AssignmentService } from './services/assignment.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private fb = inject(FormBuilder);
  form = this.fb.group({});

  questions: any[] = [];
  isLoaded = false;
  constructor(
    private service: AssignmentService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.form.addControl('fullname', this.fb.control('', Validators.required));

    this.service.getQuestions().subscribe({
      next: (res) => {
        console.log('ดึงคำถามสำเร็จ', res);
        this.questions = res;
        this.setForm();
        this.cdr.detectChanges();
      },
    });
  }

  onlyText(event: KeyboardEvent) {
    const char = event.key;
    const regex = /^[A-Za-zก-๙\s]$/;

    if (!regex.test(char)) {
      event.preventDefault();
    }
  }

  setForm() {
    this.questions.forEach((q, i) => {
      const controlName = 'q' + i;

      if (!this.form.contains(controlName)) {
        this.form.addControl(controlName, this.fb.control('', Validators.required));
      }
    });
  }

  resultText = '';
  showbt = false;
  isSubmitted = false;

  onSubmit() {
    const fullname = this.form.get('fullname')?.value || '';

    const answers = this.questions.map((_, i) => this.form.get('q' + i)?.value);

    const data = {
      fullname: fullname,
      answers: answers,
    };

    this.service.submitAssignment(data).subscribe({
      next: (res) => {
        console.log('ส่งผลสอบสำเร็จ', res);
        this.resultText = `คุณ ${res.fullname} สอบได้คะแนน : ${res.score}/2`;
        this.showbt = true;
        this.isSubmitted = true;
        this.form.disable();
      },
      error: (err) => {
        console.log('ส่งผลสอบไม่สำเร็จ', err);
        console.log('FORM VALUE:', this.form.value);
        console.log('ANSWERS:', answers);
      },
    });
  }

  onReset() {
    this.form.reset();
    this.isSubmitted = false;
    this.form.enable();
    this.resultText = '';
    this.showbt = false;
  }
}
