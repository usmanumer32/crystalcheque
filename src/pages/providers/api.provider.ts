import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {
    apiHost = 'https://crystalchequewebapi.azurewebsites.net/';

    apiUrlPath(): string {
        return this.apiHost + 'api/';
    }
}