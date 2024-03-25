import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09 promesas', () => {
    test('getHeroeByIdAsync debe de retornar un heroe', done => {
        

        const id = 1;
         getHeroeByIdAsync(id).then((hero) => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
                
                done()    
        })

    });

    /* test('getHeroeByIdAsync debe de retornar un error si heroe no existe', () => {
        

        const id = 19000;
        return getHeroeByIdAsync(id).then((hero) => {

            expect(hero).toEqual({
                id: 1,
                name: 'Batman!',
                owner: 'DC'
            },)
    
        })

    }); */
});
