import { Component, OnInit } from '@angular/core';
import { EmailService, EmailSummary } from '../email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css']
})
export class EmailIndexComponent implements OnInit{

  emails: EmailSummary[] = [];

  constructor(private emailService: EmailService){
    this.emails = [];
  }

  ngOnInit(){
    this.emailService.getEmails().subscribe((res) => {
        this.emails = res;
    })
  }

}
