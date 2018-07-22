import { Component, OnInit, Input } from '@angular/core';
import { FormGroupDirective, ControlContainer, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-validate',
    templateUrl: './validate.component.html',
    styleUrls: ['./validate.component.css']
})
export class ValidateComponent {
    errorMessage = '';
    subscript: Subscription = new Subscription();
    @Input('for') for: string;

    constructor(private formGroupDirective: FormGroupDirective) { }

    getMessage() {
        let errorMessage: string;
        const formGroup = this.formGroupDirective.control as FormGroup;
        if (formGroup.contains(this.for)) {
            const control = formGroup.controls[this.for];
            if (control.invalid && control.touched) {
                Object.keys(control.errors).forEach(key => {
                    errorMessage = Messages[key] || 'กรุณากรอกข้อมูลให้ถูกต้อง !';
                });
            }
        }
        return errorMessage;
    }
}

const Messages = {
    required: 'กรุณากรอกข้อมูล',
    email: 'กรุณากรอกข้อมูลในรูปแบบอีเมล์'
};
