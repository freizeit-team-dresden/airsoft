import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: string = "";
  email: string = "";
  tel: string = "";
  hrefstring: string = "";

  @ViewChild('link')
  link: ElementRef<HTMLElement> = {} as ElementRef;


  constructor() { }

  ngOnInit (): void {
    this.hrefstring = "mailto:example@ex.com?Subject=Airsoft anmeldung&body=Hallo,\r\nich möchte folgenden Person zum Airsoft anmelden: \r\n" + this.name + "\r\n" + this.tel + "\r\n" + this.email;
  }

  onclickBTN () {
    this.hrefstring = "mailto:example@ex.com?Subject=Airsoft anmeldung&body=Hallo,\r\nich möchte folgenden Person zum Airsoft anmelden: \r\n" + this.name + "\r\n" + this.tel + "\r\n" + this.email;
    console.log(this.hrefstring);
    this.link.nativeElement.click();
  }
}
