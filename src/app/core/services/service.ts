import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private tokenKey = 'jwt_token';
  private loggedIn = signal(false);

  constructor(private http: HttpClient) {
    this.loggedIn.set(!!localStorage.getItem(this.tokenKey));
  }

  login(email: string, password: string): Promise<boolean> {
    return this.http.post<any>('https://reqres.in/api/login', {
      email,
      password,
    }).toPromise()
      .then((res) => {
        if (res.token) {
          localStorage.setItem(this.tokenKey, res.token);
          this.loggedIn.set(true);
          return true;
        }
        return false;
      })
      .catch(() => {
        return false;
      });
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.loggedIn.set(false);
  }

  isAuthenticated(): boolean {
    return this.loggedIn();
  }
}
