import { dataActionTypes } from '../../constants/dataActionTypes'

export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case dataActionTypes.loading:
      return {
        ...state,
        isLoading: true
      }
    case dataActionTypes.success:
      console.log('3', payload)
      return {
        ...state,
        isLoading: false,
        messages: payload.messages
      }
    case dataActionTypes.error:
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    default:
      throw new Error()
  }
}
