import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	products: any;
	constructor(private apiService: ApiService) { }
	ngOnInit() {
		this.apiService.sendGetRequest().subscribe(
      (data) => {
        console.log(data);  
        this.products = data;
      });
  }
}
