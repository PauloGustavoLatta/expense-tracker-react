import { Category, Item } from '../types/Types'

export const categories: Category = {
  food: {title: 'Alimentação', color: 'blue', expense: true},
  rent: {title: 'Aluguel', color: 'brown', expense: true},
  salary: {title: 'Salário', color: 'green', expense: false}
}

export const items: Item[] = [
  {date: new Date(2021, 8, 30), category: 'salary', title: 'Salário', value: 3500},
  {date: new Date(2021, 9, 10), category: 'rent', title: 'Aluguel apt', value: 1500},
  {date: new Date(2021, 9, 15), category: 'food', title: 'McDonalds', value: 32.12},
  {date: new Date(2021, 9, 20), category: 'food', title: 'Burguer King', value: 28.99}
]