import { Observable, Observer, count } from "rxjs";

const observer:Observer<any> = {
    next:value => console.log("next:", value),
    error:error => console.warn("error:", error),
    complete: () => console.info("completado")
}

const intervalo$ = new Observable<number>( subs => {

    //Contador 1,2,3...
    let cont = 0

    const interval = setInterval( () => {
        //cada segundo
        cont++
        subs.next( cont )

    }, 1000 )

    setTimeout( ()=>{
        subs.complete()
    }, 2500)


    return() =>{
        clearInterval( interval )
        console.log('Intervalo destruido')
    }
})


const sub1 = intervalo$.subscribe( observer )
const sub2 = intervalo$.subscribe( observer )
const sub3 = intervalo$.subscribe( observer )

sub1.add( sub2 )
sub2.add( sub3 ) 


setTimeout(() => {
    sub1.unsubscribe()
    /* sub2.unsubscribe()
    sub3.unsubscribe( )*/

    console.log('Completado Timeout')

}, 3000)



