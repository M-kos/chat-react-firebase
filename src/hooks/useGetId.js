import { useEffect, useState } from 'react'

const storageKey = 'userId'

const getRandom = () => {
  return Math.ceil(Math.random() * 10000)
}

export const useGetId = () => {
  const [userId, setId] = useState()

  useEffect(() => {
    try {
      const id = JSON.parse(localStorage.getItem(storageKey))

      if (id) {
        setId(id)
      } else {
        const uId = `${getRandom()}I${getRandom()}`

        localStorage.setItem(storageKey, JSON.stringify(uId))
        setId(uId)
      }
    } catch (error) {}
  }, [])

  return [userId]
}
