import {Component, ViewChild, OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DatesService } from '../dates-service.service';
import { DateClass } from '../date-class';
import { ReviewClass } from '../review-class';
import { Router} from '@angular/router';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'address', 'openingHours', 'contactInfo'];
  dataSource = new MatTableDataSource<DateClass>();

  //TODO ensure this workaround is valid
  //@ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;

  constructor(private router: Router, private $date: DatesService) {
    $date.getDates().subscribe( (result: DateClass[]) =>
    {
      this.dataSource = new MatTableDataSource<DateClass>(result);
      this.dataSource.sort = this.sort;
      console.log("retrieved data from server.");
    });
  }


  ngOnInit(): void {

  }

  clickEvent(): void {
    this.router.navigate(['']);
  }
}
