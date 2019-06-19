import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addTrick = (trick) => ({
  type: 'ADD_TRICK',
  trick
});

export const startAddTrick = (trickData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = trickData;
    const trick = { description, note, amount, createdAt };

    return database.ref(`users/${uid}/tricks`).push(trick).then((ref) => {
      console.log(ref);
      dispatch(addTrick({
        id: ref.key,
        ...trick
      }));
    });
  };
};

// REMOVE_TRICK
export const removeTrick = ({ id } = {}) => ({
  type: 'REMOVE_TRICK',
  id
});

export const startRemoveTrick = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/tricks/${id}`).remove().then(() => {
      dispatch(removeTrick({ id }));
    });
  };
};

// EDIT_EXPENSE
export const editTrick = (id, updates) => ({
  type: 'EDIT_TRICK',
  id,
  updates
});

export const startEditTrick = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/tricks/${id}`).update(updates).then(() => {
      dispatch(editTrick(id, updates));
    });
  };
};

// SET_EXPENSES
export const setExpenses = (tricks) => ({
  type: 'SET_TRICKS',
  tricks
});

export const startSetTricks = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/tricks`).once('value').then((snapshot) => {
      const tricks = [];

      snapshot.forEach((childSnapshot) => {
        tricks.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setExpenses(tricks));
    });
  };
};
