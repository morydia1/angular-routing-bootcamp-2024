import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs"

interface UniqueUsernameResponse {
    available: true
}

interface SignupResponse {
    username: string
}

interface SignedinResponse {
    authenticated: boolean;
    username: string;
}
export interface SignupCredential {
    username: string;
    password: string;
    passwordConfirmation: string;
}

export interface SigninCredentials {
    username: string;
    password: string;
}

@Injectable({ providedIn: 'root'} )
export class AuthService {

    signedIn$ = new BehaviorSubject(false);

    constructor(private http: HttpClient){}

    private host = 'https://api.angular-email.com/auth'

    usernameExists(username: string){
        return this.http.post<UniqueUsernameResponse>(
            this.host+'/username', { username: username }
        )
    }

    signup(credentials: SignupCredential){
        return this.http.post<UniqueUsernameResponse>(
            `${this.host}/signup`, credentials).pipe(
                tap(() => {
                    this.signedIn$.next(true)
                })
            )
    }

    checkAuth(){
        return this.http.get<SignedinResponse>(`${this.host}/signedin`).pipe(
            tap(({authenticated}) => {
                this.signedIn$.next(authenticated)
            })
        )
    }

    signout(){
        return this.http.post(`${this.host}/signout`, {}).pipe(
            tap(() => {
                this.signedIn$.next(false)
            })
        )
    }

    signin(credentials: SigninCredentials){
        return this.http.post<any>(`${this.host}/signin`, credentials).pipe(
            tap(() => this.signedIn$.next(true))
        )
    }
}
