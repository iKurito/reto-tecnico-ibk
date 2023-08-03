import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserResponse } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UsersService {
  private baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }
  
  getUsers(): Observable<UserResponse> {
    return this.httpClient.get<UserResponse>(`${this.baseUrl}/users`);
  }

  getUserById(id: string): Observable<User | undefined> {
    return this.httpClient.get<User>(`${ this.baseUrl }/users/${id}`)
      .pipe(catchError(_ => of(undefined)));
  }
  
  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}/users`, user);
  }

  updateUser(user: User): Observable<User> {
    if (!user.uid) throw Error("El id del usuario es requerido");
    return this.httpClient.patch<User>(`${this.baseUrl}/users/${user.uid}`, user);
  }

  deleteUserById(id: string): Observable<boolean> {
    return this.httpClient.delete(`${this.baseUrl}/users/${id}`)
      .pipe(
        catchError(_ => of(false)),
        map(_ => true)
      );
  }
}