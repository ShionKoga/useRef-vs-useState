import { useRef } from 'react'
import { WordInputsProps } from './WordInputsProps'

export const WordInputs2 = (props: WordInputsProps) => {

  const maybeInputA = useRef<HTMLInputElement>(null)
  const maybeInputB = useRef<HTMLInputElement>(null)
  const maybeInputC = useRef<HTMLInputElement>(null)

  const didChangeInput = () => {
    const inputA = maybeInputA.current!
    const inputB = maybeInputB.current!
    const inputC = maybeInputC.current!
    console.log(inputA.value, "--------")
    props.didChangeInputs({a: inputA.value, b: inputB.value, c: inputC.value})
  }

  return (
    <>
      <label>
        a:
        <input type="text" ref={maybeInputA} onChange={didChangeInput}/>
      </label>
      <label>
        b:
        <input type="text" ref={maybeInputB} onChange={didChangeInput}/>
      </label>
      <label>
        c:
        <input type="text" ref={maybeInputC} onChange={didChangeInput}/>
      </label>
    </>
  )
}