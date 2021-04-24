import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginInputModel } from "../models/login.input-model";
import { LoginOutputModel } from "../models/login.output-model";
import { BaseHttpService } from "./base-http.service";

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService extends BaseHttpService {
    constructor(private httpClient: HttpClient) {
        super();
    }

    login(loginInputModel: LoginInputModel): Observable<LoginOutputModel> {
        return this.httpClient.post<LoginOutputModel>(`${this.authorizationUrl}/login`, loginInputModel, this.httpOptions);
    }
}