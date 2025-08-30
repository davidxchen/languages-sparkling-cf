import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangDataService {
  private http = inject(HttpClient);
  private dataCache: any | null = null;

  getData(): Observable<any> {
    if (this.dataCache) {
      return of(this.dataCache);
    }

    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    return this.http.get(apiUrl).pipe(
      tap(data => {
        this.dataCache = data;
      })
    );
  }
}
