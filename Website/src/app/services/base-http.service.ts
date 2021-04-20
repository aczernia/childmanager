import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseHttpService {
  protected teacherUrl: string = environment.apiUrl + '/teacher';
  protected classUrl: string = environment.apiUrl + '/class';
  protected studentUrl: string = environment.apiUrl + '/student';
  protected subjectUrl: string = environment.apiUrl + '/subject';
  protected lessonPlanUrl: string = environment.apiUrl + '/lesson-plan';

  constructor() { }
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  public toHttpParams(obj: object): HttpParams {
    let httpParams = new HttpParams();
    if (obj) {
      Object.keys(obj).forEach(key => {
        if (obj[key] !== undefined && obj[key] !== '') {
          httpParams = httpParams.append(key, obj[key]);
        }
      });
    }
    return httpParams;
  }
  public getCreatedResourceUrl(url: string): string {
    return (url.split('/').pop());
  }
  public appendAuthorizationHeader(token: string) {
    if (this.httpOptions.headers.has('Authorization')) {
      this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
    }
    this.httpOptions.headers = this.httpOptions.headers.append('Authorization', 'Bearer' + ' ' + token);
  }
}
