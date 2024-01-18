import React from "react";
import "./view_defects.css";

function ViewDefects() {
  let defects_Details = [
    {
      defect_category: "UI",
      description: "Submit button coming to extrem left refer the screeenshots",
      priority: "2",
      status: "open",
      change_status: "close defect",
    },
    {
      defect_category: "Functional",
      description:
        "While submiiting the data a confirmation pop up should appear. Refer scs",
      priority: "1",
      status: "open",
      change_status: "close Defect",
    },
    {
      defect_category: "Change Request",
      description: "Add remove user functionality",
      priority: "3",
      status: "closed",
      change_status: "No pending action",
    },
  ];
  const logOut = () => {
    window.location.reload();
  };
  return (
    <React.Fragment>
      <h1> Defect Section</h1>
      <div>
        <button onClick={logOut}>LogOut</button>
        <button>Add Defect</button>
        <button>View Defects</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Defect Category</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          {defects_Details.map((defect) => (
            <tr key={defect.defect_category}>
              <td>{defect.defect_category}</td>
              <td>{defect.description}</td>
              <td>{defect.priority}</td>
              <td>{defect.status}</td>
              <td>
                <button>{defect.change_status}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default ViewDefects;
