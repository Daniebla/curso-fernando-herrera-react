import { getHeroeById } from "./08-imp-exp";


export const getHeroeByIdAsync = async ( id ) => {

    return new Promise( (resolve, reject) => {

        let a = setTimeout( () =>  {
            const p1 = getHeroeById( id );
            if ( p1 ) {
                //  return p1 
                resolve(p1)
            } else {
                // throw new Error("No se pudo encontrar el héroe")
                resolve("No se pudo encontrar el héroe")
            }
            // clearTimeout(a)
        }, 1000 )
        

       
    });


}
