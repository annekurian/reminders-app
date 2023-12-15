import React from "react";
import Reminder from "../models/reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
  onUpdateReminder: (id: number, completed: boolean) => void;
}

function getItemClass(item: Reminder) {
  let classes = "form-check-label ";
  return (classes += item.completed ? "text-decoration-line-through" : "");
}

function ReminderList({
  items,
  onRemoveReminder,
  onUpdateReminder,
}: ReminderListProps) {
  return (
    <div className="card">
      <div className="card-header bg-primary">Reminders</div>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item.id}>
            <input
              type="checkbox"
              className="form-check-input me-1"
              id="completed"
              checked={item.completed}
              onChange={(e) => onUpdateReminder(item.id, e.target.checked)}
            />
            <label htmlFor="completed" className={getItemClass(item)}>
              {item.title}
            </label>
            <button
              className="btn btn-outline-danger mx-2 rounded-pill float-end"
              onClick={() => onRemoveReminder(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReminderList;
