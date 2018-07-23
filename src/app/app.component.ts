import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    positions = ['โปรแกรมเมอร์', 'นักเคราะห์ระบบ', 'นักออกแบบ'];
    form: FormGroup;

    constructor(private builder: FormBuilder) {
        this.form = this.builder.group({
            email: ['', [Validators.required, Validators.email]],
            detail: ['', [Validators.required, Validators.maxLength(15)]],
            position: ['', [Validators.required]]
        });
    }

    // ตรวจสอบ Error Message
    getErrors(formControl: FormControl, errorKey: string) {
        return formControl.invalid
            && formControl.touched
            && errorKey in formControl.errors;
    }
}
