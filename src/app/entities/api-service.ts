import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DataDTO } from "./analisys-data-dto";
import { Registro } from "./registry-dto";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'http://localhost:8081/api/registries'; // Substitua pela URL da sua API

    constructor(private http: HttpClient) { }

    // Método para obter os dados da API
    getData(): Observable<DataDTO[]> {
        return this.http.get<DataDTO[]>(this.apiUrl+"/listAll", {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    // Método para enviar dados para a API (opcional)
    postData(data: Registro): Observable<Registro> {
        return this.http.post<Registro>(this.apiUrl, data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }
}