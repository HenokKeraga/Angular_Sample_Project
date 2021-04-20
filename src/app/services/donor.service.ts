import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {DonorDto} from "../model/donorDto.model";

@Injectable({providedIn: "root"})
export class DonorService {
  url = "http://localhost:8080/donors"

  constructor(private http: HttpClient) {
  }

  getDonors() {
    return this.http.get(this.url);
  }

  getDonorById(id):Observable<DonorDto> {
    return this.http.get<DonorDto>(`${this.url}/${id}`)
  }

}
