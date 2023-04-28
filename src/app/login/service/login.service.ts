import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  
  user: User = { username: 'user', password: 'user' }

  available:boolean=false
  button='visually-hidden'

  auth(name: string, password: string) {

    console.log(name,password)

    if (this.user.username == name &&
      this.user.password == password) {
        this.available=true
        this.button=''
        alert("successfully Logged In!!!")
      return true
    }
    else {
      this.available=false
      this.button='visually-hidden'
      alert("Please Enter correct username and password!!!")
      return false
    }
  }

  isloggedin()
  {
    return this.available
  }

  logout()
  {
    this.available=false
    return true
  }
}

export interface User {
  username: string
  password: string
}