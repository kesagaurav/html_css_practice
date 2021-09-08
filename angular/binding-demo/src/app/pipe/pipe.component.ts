import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  title="hi my name is gaurav";
  curDate=new Date();

  constructor() { }

  ngOnInit() {
  }

}
