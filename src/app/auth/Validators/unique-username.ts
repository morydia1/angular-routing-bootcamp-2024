import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, catchError, filter, map, of } from "rxjs";
import { AuthService } from "../auth-service";

@Injectable( {providedIn: 'root'} )
export class UniqueUsername implements AsyncValidator{

    constructor(private authService: AuthService){}

    validate = (formControl: AbstractControl<any, any>):any => {
        const {value} = formControl;

        return this.authService.usernameExists(value).pipe(
                map( val => {
                    if(val.available)
                        return null
                }),
                catchError( err => {
                    if(err.error.username)
                        return of({ noUniqueUsername: true }) 
                    else
                        return of({ ConnexionError: true })   
                })
            )
    }
    
}
