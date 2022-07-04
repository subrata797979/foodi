
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  API_URL = environment.apiUrl;

  headers = { 'content-type': 'application/json'}

  constructor(private http: HttpClient, private router: Router) { }

  getFoodCategories(): Observable<any> {
    return this.http.get(this.API_URL+"/categories.php");
  }
}
