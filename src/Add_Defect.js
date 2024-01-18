import React, { useState } from 'react';

const AddDefect = ({ onAddDefect }) => {
  const [newDefect, setNewDefect] = useState({
    defect_category: '',
    description: '',
    priority: '',
    status: '',
    change_status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDefect((prevDefect) => ({ ...prevDefect, [name]: value }));
  };

  const handleSubmit = () => {
    onAddDefect(newDefect);
    setNewDefect({
      defect_category: '',
      description: '',
      priority: '',
      status: '',
      change_status: '',
    });
  };

  return (
    <div>
      <h2>Add New Defect</h2>
      <label>
        Defect Category:
        <input
          type="text"
          name="defect_category"
          value={newDefect.defect_category}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={newDefect.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Priority:
        <input
          type="text"
          name="priority"
          value={newDefect.priority}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Status:
        <input
          type="text"
          name="status"
          value={newDefect.status}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Change Status:
        <input
          type="text"
          name="change_status"
          value={newDefect.change_status}
          onChange={handleChange}
        />
      </label>
      <br />
      <button onClick={handleSubmit}>Add Defect</button>
    </div>
  );
};

export default AddDefect;
