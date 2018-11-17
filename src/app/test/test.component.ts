import { Component, OnInit } from '@angular/core';
import { Color } from '../color';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit { 

  colors: Color[];

  constructor(private testService: TestService) { }
  
  getColors(): void {
	  this.colors = this.testService.getColors();
	} 
    
  ngOnInit(){
    this.getColors();
  }
};
