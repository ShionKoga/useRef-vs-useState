import React, { useState } from 'react'
import SearchWords from './SearchWords'
import { WordInputs } from './WordInputs'
import { WordInputs2 } from './WordInputs2'

export const App = () => {

  const [searchWords, setSearchWords] = useState<SearchWords>({a:'', b:'', c:''})
  const [searchWords2, setSearchWords2] = useState<SearchWords>({a:'', b:'', c:''})

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    return event.preventDefault()
  }

  const didChangeInputs = (newWords: SearchWords) => {
    setSearchWords(newWords)
  }

  const didChangeInputs2 = (newWords: SearchWords) => {
    setSearchWords2(newWords)
  }

  return (
    <form onSubmit={onSearch}>
      <p>inputs: {searchWords.a} / {searchWords.b} / {searchWords.c}</p>
      <WordInputs didChangeInputs={didChangeInputs} />

      <p>inputs: {searchWords2.a} / {searchWords2.b} / {searchWords2.c}</p>
      <WordInputs2 didChangeInputs={didChangeInputs2} />

      <button>検索</button>
    </form>
  );
}
