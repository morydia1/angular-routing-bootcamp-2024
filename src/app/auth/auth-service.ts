import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs"

interface UniqueUsernameResponse {
    available: true;
    username: string;
}

interface SignupResponse {
    username: string
}

interface SignedinResponse {
    authenticated: boolean;
    username: string;
}

interface SigninResponse {
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

@Injectable({ providedIn: 'root' })
export class AuthService {

    signedIn$ = new BehaviorSubject<any>(null);
    username = '';

    constructor(private http: HttpClient){}

    private host = 'https://api.angular-email.com/auth'

    usernameExists(username: string){
        return this.http.post<UniqueUsernameResponse>(
            this.host+'/username', { username }
        )
    }

    signup(credentials: SignupCredential){
        return this.http.post<UniqueUsernameResponse>(
            `${this.host}/signup`, credentials).pipe(
                tap(({ username }) => {
                    this.signedIn$.next(true);
                    this.username = username;
                })
            )
    }

    checkAuth(){
        return this.http.get<SignedinResponse>(`${this.host}/signedin`).pipe(
            tap(({authenticated, username}) => {
                this.signedIn$.next(authenticated);
                this.username = username;
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
        return this.http.post<SigninResponse>(
            `${this.host}/signin`, credentials).pipe(
            tap(({username}) => {
                this.signedIn$.next(true);
                this.username = username;
            })
        )
    }
}
