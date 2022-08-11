import { cheese, milk } from '@assets/images';
import { CreateRecipeActionTypes } from '@redux/actionTypes';

const INITIAL_STATE = {
  error: { show: false, messsage: '' },
  selectedIngredients: [
    {
      id: 1,
      qty: 2,
      unit: 'cup',
      data: {
        id: 1,
        title: 'Cheese',
        desc: 'feta, whole milk, crumbled',
        img: cheese,
        stats: { protein: 37, carbs: 65, fat: 5 },
        weight: 10,
      },
    },
    {
      id: 2,
      qty: 2,
      unit: 'grams',
      data: {
        id: 2,
        title: 'Almond Milk',
        desc: 'unsweetened, plain, refrigerated',
        img: milk,
        stats: { protein: 37, carbs: 65, fat: 5 },
        weight: 10,
      },
    },
  ],
  isLoading: false,
};
export interface INITIAL_STATE_TYPE {
  error?: typeof INITIAL_STATE.error;
  selectedIngredients?: typeof INITIAL_STATE.selectedIngredients;
  isLoading?: boolean;
}
interface Action {
  payload: any;
  type: string;
}
const CreateRecipeReducer = (
  state: object | INITIAL_STATE_TYPE = INITIAL_STATE,
  action: Action,
): object => {
  switch (action.type) {
    case CreateRecipeActionTypes.LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case CreateRecipeActionTypes.SAVE_INGREDIENT: {
      return { ...state, selectedIngredients: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default CreateRecipeReducer;
