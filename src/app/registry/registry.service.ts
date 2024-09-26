// registry.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registry } from './registry.model';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  private apiUrl = 'http://your-backend-api.com/registry'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  getAllRegistries(): Observable<Registry[]> {
    return this.http.get<Registry[]>(this.apiUrl);
  }

  getRegistryById(id: string): Observable<Registry> {
    return this.http.get<Registry>(`${this.apiUrl}/${id}`);
  }

  createRegistry(registry: Registry): Observable<Registry> {
    return this.http.post<Registry>(this.apiUrl, registry);
  }

  updateRegistry(registry: Registry): Observable<Registry> {
    return this.http.put<Registry>(`${this.apiUrl}/${registry.id}`, registry);
  }

  deleteRegistry(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}