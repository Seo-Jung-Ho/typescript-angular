import { Component, OnInit } from '@angular/core';
import { Super } from '../super-class/super';
import { TestService } from '../service/test.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component extends Super implements OnInit {

  constructor(
    private testService: TestService
  ) {
    super(testService);
  }

  ngOnInit() {

    super.showSomeMessage("hello world");
    this.testService.executeTest();

  }

}
