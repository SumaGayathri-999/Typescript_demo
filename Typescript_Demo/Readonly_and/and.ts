type cardName = {
    card_name : string
}

type cardDate = {
    card_date: string
}

type cardDetails = cardName & cardDate;

let card :cardDetails;

card = {
    card_name : "debit card",
    card_date : "12/12/20012"
}