import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const API_URL = 'http://192.168.102.128:3000/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  get httpOptions(): any {
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.tokenStorage.getToken(),
      }),
    };
  }
  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
  ) {}

  // LEMBUR
  get(id: any): Observable<any> {
    return this.http.get(`${API_URL}lembur/${id}`, this.httpOptions);
  }

  getAll(): Observable<any> {
    return this.http.get(API_URL + 'lembur/', this.httpOptions);
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(API_URL + 'lembur/', data, this.httpOptions);
  }

  updateOvertime(id: any, data: any): Observable<any> {
    return this.http.patch(`${API_URL}lembur/${id}`, data, this.httpOptions);
  }

  updateStatus(id: any, data: any): Observable<any> {
    return this.http.patch(
      `${API_URL}lembur/approval/${id}`,
      data,
      this.httpOptions
    );
  }

  // CUTI
  createcuti(data): Observable<any> {
    return this.http.post<any>(API_URL + 'cuti/', data, this.httpOptions);
  }

  getcuti(): Observable<any> {
    return this.http.get(API_URL + 'cuti/', this.httpOptions);
  }

  getcutiId(id): Observable<any> {
    return this.http.get(`${API_URL}cuti/${id}`, this.httpOptions);
  }

  cutiStatus(id: any, data: any): Observable<any> {
    return this.http.patch(
      `${API_URL}cuti/approval/${id}`,
      data,
      this.httpOptions
    );
  }

  updatecuti(id: any, data: any): Observable<any> {
    return this.http.patch(`${API_URL}cuti/${id}`, data, this.httpOptions);
  }

  // SAKIT
  public upload(date: any, description: string, image: File): Observable<any> {
    const formData = new FormData();

    formData.append('date', date);
    formData.append('description', description);
    formData.append('image', image);

    return this.http.post(API_URL + 'sickLeave/', formData, this.httpOptions);
  }

  getsakit(): Observable<any> {
    return this.http.get(API_URL + 'sickLeave/', this.httpOptions);
  }

  getsakitId(id): Observable<any> {
    return this.http.get(`${API_URL}sickLeave/${id}`, this.httpOptions);
  }

  sakitStatus(id: any, data: any): Observable<any> {
    return this.http.patch(
      `${API_URL}sickLeave/accept/${id}`,
      data,
      this.httpOptions
    );
  }

  public updatesakit(
    id,
    date: any,
    description: string,
    image: File
  ): Observable<any> {
    const formData = new FormData();

    formData.append('date', date);
    formData.append('description', description);
    formData.append('image', image);

    return this.http.patch(
      `${API_URL}sickLeave/${id}`,
      formData,
      this.httpOptions
    );
  }

  // PROFILE
  getManager(): Observable<any> {
    return this.http.get(API_URL + 'user/manager', this.httpOptions);
  }

  getAllUser(): Observable<any> {
    return this.http.get(API_URL + 'user/allUser', this.httpOptions);
  }

  change(oldPassword, password): Observable<any> {
    return this.http.patch(
      API_URL + 'user/profile/password',
      {
        oldPassword: oldPassword,
        password: password,
      },
      this.httpOptions
    );
  }

  changepro(fullName): Observable<any> {
    return this.http.patch(
      API_URL + 'user/profile',
      {
        fullName: fullName,
      },
      this.httpOptions
    );
  }
}
