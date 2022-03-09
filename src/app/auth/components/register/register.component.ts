import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { AuthService } from '../../services/auth.service'
import { registerAction } from '../../store/actions/register.action'
import {
    isSubmittingSelector,
    validationErrorsSelector,
} from '../../store/selectors'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    form: FormGroup
    isSubmitting$: Observable<boolean>
    backendErrors$: Observable<BackendErrorsInterface | null>

    constructor(
        private fb: FormBuilder,
        private store: Store,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.initializeForm()
        this.initializeValues()
    }

    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
        console.log(['isSubmitting$', this.isSubmitting$])
    }

    initializeForm(): void {
        this.form = this.fb.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
        })
        console.log(this.form.valid)
    }

    onSubmit(): void {
        console.log({
            valid: this.form.valid,
            value: this.form.value,
        })

        const request: RegisterRequestInterface = {
            user: this.form.value,
        }

        this.store.dispatch(registerAction({ request }))
    }
}
