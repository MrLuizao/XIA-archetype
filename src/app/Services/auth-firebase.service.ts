import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  // registro Firebase
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
  private apiKey ='AIzaSyBgs2ineSr6ZwecKVdiPGPHNv_C2lkdXZM';

  constructor( private http: HttpClient) { 

  }

  logOutFirebase(){
      
  }

  logInFireBase( user: UserModel){

    const authData = {
      ...user,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}${this.apiKey}`,
      authData
    );


  }
}
