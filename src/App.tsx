import React, { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderService from "./services/reminder";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    loadReminders();
    document.title = "TODO app";
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminder();
    setReminders(reminders);
  };

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string, completed: boolean) => {
    const newReminder = await reminderService.addReminder(title, completed);
    setReminders([newReminder, ...reminders]);
  };

  const updateReminder = (id: number, completed: boolean) => {
    const reminderList = [...reminders];
    const index = reminderList.findIndex((r) => r.id === id);
    reminderList[index].completed = completed;
    setCompleted(completed);
    setReminders(reminderList);
  };

  return (
    <div className="App">
      <h1 className="text-center">REMINDERS</h1>
      <div className="row g-3 mb-4">
        <div className="card col-sm-4 mx-2">
          <NewReminder onAddReminder={addReminder} completed={completed} />
        </div>
        <div className="row g-3">
          <div className="col-sm-6">
            <ReminderList
              items={reminders}
              onRemoveReminder={removeReminder}
              onUpdateReminder={updateReminder}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
