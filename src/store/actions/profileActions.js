export const createProfile = (newprofile) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    const docid = authorId
    firestore.collection("users").doc(docid).update({...newprofile});

    
  }
}

export const editName = (newprofile) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    const docid = authorId
    console.log('pppppppppppp',newprofile)
    firestore.collection("users").doc(docid).update({...newprofile});

  }
}