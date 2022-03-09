import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BackendErrorMessagesComponent } from './components/backend-error-messages/backendErrorMessages.component'

@NgModule({
    declarations: [BackendErrorMessagesComponent],
    imports: [CommonModule],
    providers: [],
    exports: [BackendErrorMessagesComponent],
})
export class BackendErrorMessagesModule {}
