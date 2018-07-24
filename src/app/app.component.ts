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
            email: new FormControl('', Validators.required),
            detail: new FormControl(''),
            position: new FormControl(''),
        });
    }

    // ส่งข้อมูล
    onSubmit() {
        if (this.form.valid) {
            console.log(this.form.value);
        }
    }
}
