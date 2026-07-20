import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private _http :HttpClient,
  ) { }

readonly apiUrl = "http://localhost:56099/";
readonly _restApi = "https://localhost:44375/" + '/api/User/';

  loginUser(Username: string, Password: string){
    debugger
    let params = new HttpParams();
    params = params.append('Username', Username.toString());
    params = params.append('Password', Password.toString());
    return this._http.get(this._restApi+"AuthorizeUser",{params:params});
  }
}
