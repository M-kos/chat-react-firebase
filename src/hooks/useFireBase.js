import { useEffect, useReducer } from 'react'
import * as firebase from 'firebase'
import { dataActionTypes } from '../constants/dataActionTypes'

import { dataReducer } from './reducers/dataReducer'

const firebaseConfig = {
  apiKey: 'AIzaSyD5k5JbjRoDwDr8Dp0psbiAz4O2wvS3yJA',
  authDomain: 'chat-react-firebase-a4c05.firebaseapp.com',
  databaseURL: 'https://chat-react-firebase-a4c05.firebaseio.com',
  projectId: 'chat-react-firebase-a4c05',
  storageBucket: 'chat-react-firebase-a4c05.appspot.com',
  messagingSenderId: '276753583404',
  appId: '1:276753583404:web:cd17c510af382a139df089'
}

export const useFireBase = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    messages: [],
    isLoading: false,
    isError: false
  })

  useEffect(() => {
    dispatch({ type: dataActionTypes.loading })

    firebase.initializeApp(firebaseConfig)

    try {
      const messages = []

      firebase
        .database()
        .ref('/messages')
        .on('value', (snapshot) => {
          snapshot.forEach((snap) => {
            messages.push(snap.val())
          })

          dispatch({
            type: dataActionTypes.success,
            payload: {
              messages
            }
          })
        })
    } catch (error) {
      dispatch({ type: dataActionTypes.error })
    }
  }, [])

  return [state]
}
