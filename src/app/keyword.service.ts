import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Keyword } from './keyword';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

getKeywords(id: number): Observable<Keyword[]> {
  return this.http.get<Keyword[]>('http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.keywordsview/findcharid/'+id);  

}

/*async getKeywords(id: number) {
  var keywords: Keyword[];
  keywords = await this.http.get<Keyword[]>('http://carnevalegame.com:8080/carnevalelistbuildapi/webresources/carnevalelistbuildapi.keywordsview/findcharid/'+id).toPromise();  
  return keywords;
}*/

  constructor(
    private http: HttpClient,
  ) { }
}
