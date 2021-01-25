import React from "react";
import PropTypes from "prop-types";

const TaskCard = ({
  task,
  onComplete,
  onDelete,
  onEdit,
  onSave,
  updatedValue,
  setUpdatedValue,
}) => {
  const { title, isCompleted, isEdited } = task;

  return (
    <li className="task-list-item-container">
      <div style={{ width: "60%" }}>
        {!isEdited ? (
          <h3 style={{ textDecoration: isCompleted && "line-through" }}>
            {title}
          </h3>
        ) : (
          <input
            value={updatedValue}
            onChange={setUpdatedValue}
            className="btn-colored"
          />
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {!isCompleted ? (
          <button onClick={onComplete} className="btn btn-success">
            complete
          </button>
        ) : (
          <button onClick={onComplete} className="btn btn-dark">
            cancel
          </button>
        )}
        <button onClick={onDelete} className="btn btn-danger">
          delete
        </button>
        {!isEdited ? (
          <button className="btn btn-primary" onClick={onEdit}>
            update
          </button>
        ) : (
          <button className="btn btn-primary" onClick={onSave}>
            save
          </button>
        )}
      </div>
    </li>
  );
};


TaskCard.propTypes = {
  task: PropTypes.object,
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onSave: PropTypes.func,
};

export default TaskCard;
