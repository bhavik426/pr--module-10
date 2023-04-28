import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  opt=this.ser.button
  username: string=''
  password: string=''
  val=this.ser.isloggedin()

  user!:string
  constructor(private ser:LoginService,private router:Router)
  {

  }
  
  login()
  {

    // this.ser.auth(this.username,this.password)
    if(this.ser.auth(this.username,this.password))
    {
      this.router.navigate(['/admin'])
      this.opt=''
    }
    else{
      this.opt='visually-hidden'
    }
        
  }

  loghimout()
  {
    if(this.ser.logout())
    {
      this.opt='visually-hidden'
      this.val=this.ser.isloggedin()
    }
  }
}
