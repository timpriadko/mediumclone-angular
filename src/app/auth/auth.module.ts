import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { RegisterComponent } from 'src/app/auth/components/register/register.component'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/reducers'
import { AuthService } from './services/auth.service'
import { EffectsModule } from '@ngrx/effects'
import { RegisterEffects } from './store/effects/register.effect'
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module'

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
]

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([RegisterEffects]),
        BackendErrorMessagesModule,
    ],
    providers: [AuthService],
})
export class AuthModule {}
