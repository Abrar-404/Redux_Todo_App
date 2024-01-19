import { COLORCHANGED, STATUSCHANGED } from './ActionTypes';
import InitialState from './InitialState';

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };

    case COLORCHANGED:
      // eslint-disable-next-line no-case-declarations
      const { color, changeType } = action.payload;

      switch (changeType) {
        case 'added':
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case 'removed':
          return {
            ...state,
            colors: state.colors.filter(
              existingColor => existingColor !== color
            ),
          };
        default:
          return state;
      }

    default:
      return state;
  }
};

export default reducer;
