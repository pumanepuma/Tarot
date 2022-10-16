export const REACT_APP_API_URL = 'http://localhost:5000'

interface IDictionary {
    [prop:string]:string
}
export const rus_suits :IDictionary = {
    swords:'Мечи',
    pentacles:'Пентакли',
    cups:'Кубки',
    wands:'Жезлы'
}

export const rus_types:IDictionary = {
    major:'Старшие',
    minor:'Младшие'
}
    