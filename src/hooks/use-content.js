import { useEffect, useState, useContext } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

import { FirebaseContext } from '../context/firebase'

export default function useContent(target) {
  const [content, setContent] = useState([])
  
  // should I move getting the firebase object into useEffect?
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }))

        setContent(allContent);
      })
      .catch(err => console.log(err.message))
  }, []);

  return { [target]: content }
}
