import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'admin-footer',
  templateUrl: './admin-footer.component.html',
  styleUrls: []
})
export class AdminFooterComponent implements OnInit {

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
    // console.log();
    
  }

}
