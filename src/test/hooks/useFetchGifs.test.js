import { renderHook, waitFor } from "@testing-library/react"
import useFetchGifs from "../../hooks/useFetchGifs"

// consideraciones:
// Evaluar en hooks: argumentos de entrada y de salida

describe('Pruebas a useFetchGifs hook ', () => { 

    test('Debe de regresar el estado incial', () => {
        // imagenes arrglo vacio, loading true
        const { result } = renderHook(() =>   useFetchGifs("One Punch") )
        //result:  resultado del hook
        // unmount: resultado cunado el hook es desmontado
        //rerender: en caso de querer rerenderizar el hook

        const { images, loadingImages } = result.current

        expect( images.length ).toBe(0)
        expect(loadingImages).toBeTruthy()
    })

    test('Debe de regresar un arreglo de imagenes y el loadingImages en false', async () => {
        // imagenes arrglo vacio, loading true
        const { result } = renderHook(() =>   useFetchGifs("One Punch") )

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
            // {
            //     timeout: 100   // si se desea campurar un error 
            // }
        )

        const { images, loadingImages } = result.current
        expect( images.length ).toBeGreaterThan(0)
        expect(loadingImages).toBeFalsy()
    })

 })