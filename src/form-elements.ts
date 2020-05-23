import { FormElementsText } from './elements/text/_index.js'
import { FormElementsRadio } from './elements/radio/_index.js'
import { FormElementsCheckbox } from './elements/checkbox/_index.js'

( function( name, global: any, factory ) {

  typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define( factory ) :
  global[ name ] = factory()

}( 'form-elements', window, () => {

  let feature = {
    initializeAll: () => {

      FormElementsText()
      FormElementsRadio()
      FormElementsCheckbox()

    }
  }

  return feature

} ) )
