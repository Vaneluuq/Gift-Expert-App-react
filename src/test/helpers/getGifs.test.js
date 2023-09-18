import { getGifs } from "../../helpers/getGifts"

describe('Pruebas sobre getGifs()', () => { 
    test('Debe retornar un arreglo de gifts', async () => {

        const gifs = await getGifs("One Punch")
        // consideraciones: 
        // Dado que es una respuesta que vienen de la API no es recomendable comparar el arreglo, dado que este puede cambiar en un futuro 

        expect( gifs.length ).toBeGreaterThan(0)
        expect( gifs[0] ).toEqual({
            title: expect.any( String ),
            id: expect.any( String ),
            url : expect.any( String ) 
        })
    })
 })