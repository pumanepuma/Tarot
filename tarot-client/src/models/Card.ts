export interface ICard{
    _id:string,
    name:string,
    short_name:string,
    img:string,
    type: string,
    suit: string,
    meaning: string
}

enum CardTypes  {
    MINOR = 'minor',
    MAJOR = 'major'
}

enum CardSuits {
    SWORDS = 'swords',
    CUPS = 'cups',
    WANDS = 'wands',
    PENTACLES = 'pentacles'
}
