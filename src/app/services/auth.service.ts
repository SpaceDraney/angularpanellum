import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  signInWithEmailAndPassword,
  signOut,
  User,
} from '@angular/fire/auth';
import { map, Observable } from 'rxjs';
import { Userdata } from '../models/userdata';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {
    authState(this.auth).subscribe((user: User | null) => {
      if (user) {
        console.log('User is Signed In:', user);
      } else {
        console.log('No User Logged In');
      }
    });
  }

  async login(userData: Userdata): Promise<void> {
    try {
      await signInWithEmailAndPassword(
        this.auth,
        userData.email,
        userData.password
      );

      console.log('Login Successful');
    } catch (error) {
      console.error('Login Error:', error);
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      console.log('Logout Successful');
    } catch (error) {
      console.error('Logout Error:', error);
    }
  }

  isLoggedIn(): Observable<boolean> {
    return authState(this.auth).pipe(map((user: User | null) => !!user));
  }
}
