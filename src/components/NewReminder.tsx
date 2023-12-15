import React, { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string, completed: boolean) => void;
  completed: boolean;
}

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddReminder(title, completed);
    setTitle("");
  };

  return (
    <div className="card-body">
      <form onSubmit={submitForm}>
        <label htmlFor="title"></label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          type="text"
          className="form-control"
        />
        <div className="form-check mt-3">
          <label htmlFor="status">Completed</label>
          <input
            checked={completed}
            type="checkbox"
            id="status"
            className="form-check-input"
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </div>
        <button className="btn btn-primary my-3">Add Reminder</button>
      </form>
    </div>
  );
}

export default NewReminder;
