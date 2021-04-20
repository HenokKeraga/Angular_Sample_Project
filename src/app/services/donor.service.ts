import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class DonorService {

    constructor(
        private http: HttpClient
    ) {}

    getDonors() {
        return this.http.get("http://localhost:8080/donor/id");
    }

}