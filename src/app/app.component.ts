import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            detail: new FormControl('', [Validators.required, Validators.maxLength(15)]),
            position: new FormControl('', Validators.required),
        });
    }

    // ส่งข้อมูล
    onSubmit() {
        if (this.form.valid) {
            console.log(this.form.value);
        }
    }

    // ตรวจสอบ Property error ของ FormControl
    isError(control: FormControl, errorKey: string) {
        if (control.invalid && control.touched) {
            return errorKey in control.errors;
        }
        return false;
    }
}
