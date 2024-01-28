import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('08-imp.exp.test', () => { 

    test('primer test', () => { 

        const id = 1;
        
        const hero = getHeroeById(id)

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })

     })


     // Heroes de DC toEqual y  length 3

     test('Heroes dc', () => { 

        const receivedHeroes = getHeroesByOwner("DC")
        
        expect(receivedHeroes.length).toBe(3)

        expect(receivedHeroes[0]).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
        expect(receivedHeroes[1]).toEqual({
            id: 3,
            name: 'Superman',
            owner: 'DC'
        })
        expect(receivedHeroes[2]).toEqual({
            id: 4,
            name: 'Flash',
            owner: 'DC'
        },)
        
     })

     
     test('marvel length 2', () => {
        
        const receivedHeroes = getHeroesByOwner("Marvel")

        expect(receivedHeroes.length).toBe(2)
     });
     // Heroes marvel length 2


 })