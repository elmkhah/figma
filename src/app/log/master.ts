import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import {HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Master {
  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string):Observable<HttpResponse<any>> {

    return this.http.post<any>('https://sang-e-saboor-production.ir/registery/login/',
      {
       "email":email,
       "password": password
      },
      {observe: 'response'}
    )
  }


  signup(username: string,email: string, password: string):Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(
      'https://sang-e-saboor-production.ir/registery/signup/',
      {
        email: email,
        password: password,
        name: username
      },
      {
        headers,
        observe: 'response'
      }
    );
  }


  buycoin(coin:number):Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get('https://sang-e-saboor-production.ir/registery/buycoin/?coin='+coin ,
      {headers,observe: 'response'});
  }

  chatbot(text:string):Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.post(
      'https://sang-e-saboor-production.ir/chatbot/CBTchatbot/',
      { input:text },
      {
        headers: headers,
        observe: 'response'
      }
    );
  }

  logout(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`})

    localStorage.removeItem('token');
    localStorage.setItem('isLoggedIn', 'false');

    this.http.get('https://sang-e-saboor-production.ir/registery/logout/' ,
      {headers,observe: 'response'});
    this.router.navigate(['/login']);
  }

  searchUsers(text: string, pageNum: number, pageSize: number): Observable<HttpResponse<any>> {
    const params = new HttpParams()
      .set('searchText', text)
      .set('pageNumber', pageNum.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<any>('https://api.freeprojectapi.com/api/UserApp/searchUsers', {
      params,
      observe: 'response'
    });
}
}
