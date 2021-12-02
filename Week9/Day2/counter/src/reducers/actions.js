export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';

export const addOne = () => {
  return {
    type:INCREASE_COUNT
  }
}

export const minusOne = () => {
  return {
    type: DECREASE_COUNT
  }
}
