import { render, screen } from "@testing-library/react"
import GifCard from "../../components/GifCard"

describe('Pruebas de GifCard componente', () => { 

    const title = "Este es el titulo"
    const url = "https://giphy.com/embed/uBRwFMpdukW1hf8yqS"

    test('debe hacer match con el snapshot ', () => {

        const { container } = render( <GifCard title={title} url={url} /> )
        expect( container ).toMatchSnapshot()
      
    })

    test('Debe de mostrar la imagen con el URL y el alt indicado', () => {
        render( <GifCard title={title} url={url} />)
        // screen.debug() 

        // por cada elemento
        // expect( screen.getByRole("img").src ).toBe( url )
        // expect( screen.getByRole("img").alt ).toBe( title )

        // desestructurando el elemento a evaluar
        const { src, alt } = screen.getByRole("img")
        expect( src ).toBe( url )
        expect( alt ).toBe( title )

    })

    test('Debe de mostrar el titulo en el componente', () => {

        render( <GifCard title={title} url={url} />)
        expect( screen.getByText( title ) ).toBeTruthy()
      
    })
    
    
})