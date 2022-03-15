import React, { useState } from 'react'
import { WordInputsProps } from './WordInputsProps'

export const WordInputs = (props: WordInputsProps) => {

  const [wordA, setWordA] = useState('')
  const [wordB, setWordB] = useState('')
  const [wordC, setWordC] = useState('')

  const didChangeA = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWordA(event.target.value)
    props.didChangeInputs({a: wordA, b: wordB, c: wordC})
  }

  const didChangeB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWordB(event.target.value)
    props.didChangeInputs({a: wordA, b: wordB, c: wordC})
  }

  const didChangeC = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWordC(event.target.value)
    props.didChangeInputs({a: wordA, b: wordB, c: wordC})
  }

  return (
    <>
      <label>
        a:
        <input type="text" value={wordA} onChange={didChangeA}/>
      </label>
      <label>
        b:
        <input type="text" value={wordB} onChange={didChangeB}/>
      </label>
      <label>
        c:
        <input type="text" value={wordC} onChange={didChangeC}/>
      </label>
    </>
  );
}