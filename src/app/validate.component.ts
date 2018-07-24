import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-validate',
    template: '<p *ngIf="getErrorMessage" class="text-invalid">{{ getErrorMessage }}</p>',
    styles: ['']
})
export class ValidateComponent {
    @Input('control') control: AbstractControl;
    ERROR_MESSAGES = {
        required: 'กรุณากรอกข้อมูล',
        email: 'กรอกข้อมูลให้อยู่ในรูปแบบอีเมล์',
        maxlength: 'กรุณากรอกข้อมูลไม่เกิน {0} ตัวอักษร'
    };

    // แสดงข้อความ Error
    get getErrorMessage(): string {
        if (this.control) {
            if (this.control.invalid && this.control.touched) {
                let validateMessage: string;
                const errorKeys = Object.keys(this.control.errors);
                errorKeys.forEach(error => {
                    switch (error) {
                        case 'maxlength':
                        case 'minlength':
                            validateMessage = this.ERROR_MESSAGES[error].replace('{0}', this.control.errors[error].requiredLength);
                            break;
                        default:
                            validateMessage = this.ERROR_MESSAGES[error] || 'กรุณากรอกข้อมูลให้ถูกต้อง';
                    }
                });
                return validateMessage;
            }
        }
        return null;
    }

}
