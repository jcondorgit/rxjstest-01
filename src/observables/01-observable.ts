import { Observable, Observer } from "rxjs";

const observer:Observer<any> = {
    next:value => console.log("next [next]:", value),
    error:error => console.warn("error [obs]:", error),
    complete:() => console.log("Completado [obs]:")
}


const obs$ = new Observable<string>( subs =>{

    subs.next('Hola')
    subs.next('Mundo')
    
    subs.next('Hola')
    subs.next('Mundo')

    subs.complete()

    subs.next('Hola')
    subs.next('Mundo')

})


obs$.subscribe( observer )