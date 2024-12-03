import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ViacepResult } from '../_models/Viacepresult';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  apiUrl: string = environment.url;

  constructor(private http: HttpClient) { }

  getEnderecoByCep(cep: string){
    return this.http.get<ViacepResult>
    (this.apiUrl + cep + "/json/")
    .pipe(
      map( (Response) => {
        return Response;
      })
    )
  }

}
