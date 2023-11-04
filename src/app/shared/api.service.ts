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
      'https://script.googleusercontent.com/macros/echo?user_content_key=yQy9IOMqIV5Dhdg0Wpb2HoVSa6Khd1k9j6V1uS5KHHrowv4C0YOiIFFOCgTdZc1gXhPeYJoDU_1lj1Z0AOI6_QUFzjHD_sERm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnO_DSRQGSoSxiBRUhUdn8-vM7pBVloS8mru3SVzfh-FOGJCRV4caOYuDKJu20LfUmpTu9ZV3pkyt2TIBeGKHTAN83Jo8K37auQ&lib=Mm0gWmx197_msY1ESVzuxQdoOYNoxojT-'
    );
  }
}
