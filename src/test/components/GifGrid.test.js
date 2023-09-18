const { render, screen } = require("@testing-library/react")
const { default: GifGrid } = require("../../components/GifGrid")
const { default: useFetchGifs } = require("../../hooks/useFetchGifs")

// useFetchGifs

// 1. Se le establece haga un mock completo de la ruta pasada
jest.mock("../../hooks/useFetchGifs")

describe('Pruebas de GifGrid componente', () => { 

    const category = "One Punch"


    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [], loadingImages: true
        })


        render( <GifGrid category={category} /> )

        expect( screen.getByText( "...Cargando" ) )
        expect( screen.getByText( category) )
      
    })

    test('Debe de mostrar items cuando se cargan las imagenes de useFetchGifs', () => {

        const gifs = [{
            id: "ABC",
            title: "Saitama",
            url: "httopls:23r234"
        },
        {
            id: "ABC1",
            title: "Saitamas",
            url: "httopls:23r234s"
        },
    ]

        useFetchGifs.mockReturnValue({
            images: gifs, loadingImages: false
        })

        render( <GifGrid category={category} /> )

        expect( screen.getAllByRole("img").length ).toBe(2)

      
    })
    
    
    
})