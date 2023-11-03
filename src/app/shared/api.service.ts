import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../modal';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getAllProjects() {
    return this.http.get<Project[]>(
      'https://json-server-avob.onrender.com/projects'
    );
  }
}
