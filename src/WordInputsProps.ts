import SearchWords from './SearchWords'

export interface WordInputsProps {
  didChangeInputs: (newWords: SearchWords) => void
}