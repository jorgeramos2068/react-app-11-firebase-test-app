import React from 'react';

import { Form } from './Form';
import { Notes } from './Notes';

const Main = () => {
  return (
    <div className="container">
      <h1>React/Firebase Integration App</h1>
      <Form />
      <Notes />
    </div>
  );
}

export { Main };
