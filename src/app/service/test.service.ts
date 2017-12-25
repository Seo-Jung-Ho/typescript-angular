import { Injectable } from "@angular/core";

@Injectable()
export class TestService {

    constructor() { }

    executeTest(): void {
        console.log("test excuting...");
    }
}
