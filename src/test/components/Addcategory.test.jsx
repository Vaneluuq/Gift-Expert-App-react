import { fireEvent, render, screen } from "@testing-library/react"
import Addcategory from "../../components/Addcategory"

describe('Pruebas de Addcategory componente', () => { 

    test('Debe de cambiar el valor de la caja de texto', () => {

        const onNewCategory = jest.fn()
        render( <Addcategory onNewValue={onNewCategory} /> )

        const input = screen.getByRole("textbox")
        fireEvent.input( input, { target: { value: "Saitama" } } )

        expect( input.value ).toBe("Saitama")
      
    })

    test('Debe de llamar onNewCategoy si el input tiene un valor', () => {

     const onNewCategory = jest.fn()
     const inputValue = "Saitama"

      render( <Addcategory onNewValue={onNewCategory} /> )

      const input = screen.getByRole("textbox")
      const form = screen.getByRole("form")

      fireEvent.input( input, { target: { value: inputValue } } )
      fireEvent.submit( form )

      expect( input.value ).toBe("")

      expect( onNewCategory ).toHaveBeenCalled()
      expect( onNewCategory ).toHaveBeenCalledTimes(1)
      expect( onNewCategory ).toHaveBeenCalledWith( inputValue )
    })

    test('Debe de llamar onNewCategoy si el input tiene un valor', () => {

        const onNewCategory = jest.fn()
   
        render( <Addcategory onNewValue={onNewCategory} /> )

        const form = screen.getByRole("form")
        fireEvent.submit( form )

        expect( onNewCategory ).toHaveBeenCalledTimes(0)
        expect( onNewCategory ).not.toHaveBeenCalled()

       })
 })