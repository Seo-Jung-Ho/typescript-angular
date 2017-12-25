import { TestService } from "../service/test.service";


export abstract class Super {

    constructor(testService: TestService) { }

    showSomeMessage(message: string) {
        console.log(message);
    }
}
