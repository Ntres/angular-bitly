import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShortUrlService {
  URL = 'https://api-ssl.bitly.com/v4/shorten';

  constructor(private http: HttpClient) {}

  getUrlShort(nombreUrl: String): Observable<any> {
    const body = {
      long_url: nombreUrl,
    };

    // const tokenHeader = new HttpHeaders({
    //   Authorization: 'Bearer ' + this.token,
    // });

    return this.http.post(this.URL, body);
  }
}
