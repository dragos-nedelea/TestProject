import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { groupBy } from 'rxjs/internal/operators/groupBy';
import jsonData from '../assets/things.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  title = 'sarcina';

  things: Record<string, any> = jsonData.reduce((r, a) => {
    r[a.areaId] = r[a.areaId] || [];
    r[a.areaId].push(a);
    return r;
}, Object.create(null));

status = open;
noStatus = close;

ngOnInit(): void {
  console.log(this.things);
 }
}