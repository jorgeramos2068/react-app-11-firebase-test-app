import Swal from 'sweetalert2';
import { db } from '../firebase/firebaseConfig';
import { types } from '../types/types';

export const addNote = (id, note) => ({
  type: types.notesAdd,
  payload: {
    id,
    ...note
  }
});

export const addNoteFirebase = (newNote) => {
  return async (dispatch) => {
    try {
      const docRef = await db.collection('notes').add(newNote);
      dispatch(addNote(docRef.id, newNote));
      Swal.fire('Saved', 'The note was saved successfully', 'success');
    } catch (error) {
      Swal.fire('Error', 'The note could not be saved', 'error');
      console.log(error);
    }
  };
};

export const loadNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes
});

export const loadNotesFirebase = () => {
  return async (dispatch) => {
    const notesSnap = await db.collection('notes').get();
    let notes = [];
    notesSnap.forEach(noteSnap => {
      notes.push({
        id: noteSnap.id,
        ...noteSnap.data()
      });
    });
    dispatch(loadNotes(notes));
  };
};

export const loadNoteById = (note) => ({
  type: types.noteLoadById,
  payload: note
});

export const loadNoteByIdFirebase = (id) => {
  return async (dispatch) => {
    const docRef = await db.collection('notes').doc(id);
    const doc = await docRef.get();
    const note = {
      id: doc.id,
      ...doc.data()
    }
    dispatch(loadNoteById(note));
  };
};

export const updateNote = (id, note) => ({
  type: types.notesUpdate,
  payload: {
    id,
    note: {
      id,
      ...note
    }
  }
});

export const updateNoteFirebase = (note) => {
  return async (dispatch) => {
    const noteToFirestore = {...note};
    delete noteToFirestore.id;
    await db.doc(`notes/${note.id}`).update(noteToFirestore);
    dispatch(updateNote(note.id, note));
    Swal.fire('Saved', 'The note was saved successfully', 'success');
  };
};

export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id
});

export const deleteNoteFirebase = (id) => {
  return async (dispatch) => {
    await db.doc(`/notes/${id}`).delete();
    dispatch(deleteNote(id));
  };
}
