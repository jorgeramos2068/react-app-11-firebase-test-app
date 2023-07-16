import React from 'react';
import { useDispatch } from 'react-redux';
import { addNoteFirebase, loadNotesFirebase } from '../actions/notes';
import { useForm } from '../hooks/useForm';

const Form = () => {
  const dispatch = useDispatch();

  const initialFormState = {
    title: '',
    description: ''
  };
  const [formValues, handleInputChange, reset] = useForm(initialFormState);
  const {title, description} = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidForm()) {
      const newNote = {
        title,
        description
      }
      dispatch(addNoteFirebase(newNote));
      dispatch(loadNotesFirebase());
      reset(initialFormState);
    }
  }

  const isValidForm = () => {
    if (title.trim().length === 0) {
      return false;
    }
    else if (description.trim().length === 0) {
      return false;
    }
    return true;
  };

  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter a title"
            value={title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={description}
            onChange={handleInputChange}
          >
          </textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export { Form };
