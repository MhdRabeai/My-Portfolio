import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/modal';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  projects: Project[] = [];
  hostUrl!: any[];
  sanitize: any;
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getAllProjects().subscribe(
      (res) => {
        this.projects = res.reverse();
        // console.log(this.projects);
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  getSantizeUrl(url: string) {
    return this.sanitize.bypassSecurityTrustUrl(url);
  }
}
