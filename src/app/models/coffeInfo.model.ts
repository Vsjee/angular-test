export interface CoffeeInfo {
  id: number;
  title: string;
  image: string;
  description: string;
  ingredients: string[];
}

export const initializeCoffeeInfo = {
  id: 0,
  title: '',
  image: '',
  description: '',
  ingredients: [''],
};
