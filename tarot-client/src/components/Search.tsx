import { Dispatch, SetStateAction } from "react"

interface InputProps{
    value: string | number,
  setValue: Dispatch<SetStateAction<string>>
}


const Search:React.FC<InputProps> = ({value,setValue}) => {
  return(
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)}
        placeholder='Поиск...'/>
    </div>
  )
}

export default Search