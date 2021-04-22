import React from 'react'
import styled from 'styled-components'

const FormComponent = styled.div `

`

const Form = (props) => {
  return (
    <form>
      <FormComponent>
      <label>Day</label>
      <input type="number" value={props.day} onChange={props.handleChange} />
      </FormComponent>
    </form>
  )
}
export default Form
