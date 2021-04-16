import { BaseHttpService } from './base-http.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseRestHttpService<TInput, TOutput> extends BaseHttpService {
  constructor(protected httpClient: HttpClient) {

    super();
    
  }

  abstract getEndpointUrl(): string;

  private appendAuthorizationToRequest() {
    /*const token = this.loginService.getAccessToken();
    this.appendAuthorizationHeader(token);*/
  }

  public add(inputModel: TInput): Observable<HttpResponse<any>> {
    this.appendAuthorizationToRequest();
    return this.httpClient
      .post(this.getEndpointUrl(), inputModel, {
        ...this.httpOptions,
        observe: 'response'
      });
  }

  public update(id: number, inputModel: TInput): Observable<Response> {
    this.appendAuthorizationToRequest();
    return this.httpClient
      .put<Response>(`${this.getEndpointUrl()}/${id}`, inputModel, this.httpOptions);
  }

  public delete(id: number): Observable<Response> {
    this.appendAuthorizationToRequest();
    return this.httpClient
      .delete<Response>(`${this.getEndpointUrl()}/${id}`, this.httpOptions);
  }

  public get(): Observable<TOutput[]> {
    return this.httpClient
      .get<TOutput[]>(`${this.getEndpointUrl()}`, this.httpOptions);
  }

  public getAll(): Observable<TOutput[]> {
    return this.httpClient
      .get<TOutput[]>(this.getEndpointUrl(), this.httpOptions);
  }

  public getById(id: number): Observable<TOutput> {
    return this.httpClient
      .get<TOutput>(`${this.getEndpointUrl()}/${id}`, this.httpOptions);
  }
}
