import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadNotesFirebase } from '../actions/notes';

const Notes = () => {
  const dispatch = useDispatch();
  const {notes} = useSelector(state => state.notes);

  useEffect(() => {
    dispatch(loadNotesFirebase());
  }, [dispatch]);

  return (
    <div className="mt-5">
      <hr />
      <h1>Notes</h1>
      {notes.length > 0 &&
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {notes.map(({id, title, description}) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
};

export { Notes };
