import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  
  constructor(private http: HttpClient) {}
  
  search(term: string) {

    const PARAMS = new HttpParams({
      fromObject: {
        action: 'opensearch',
        format: 'json',
        origin: '*'
      }
    });

    const WIKI_URL = 'https://en.wikipedia.org/w/api.php';
    if (term === '') {
      return of([]);
    }

    return this.http
      .get<[any, string[]]>(WIKI_URL, {params: PARAMS.set('search', term)}).pipe(
        map(response => response[1])
      );
  }
}
