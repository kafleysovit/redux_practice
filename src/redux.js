import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    task: "First Task",
    message: [],
  },
  {
    id: 2,
    task: "First Task",
    message: [],
  },
];

export const manageData = createSlice({
  name: "task",
  initialState: { value: initialState },
  reducers: {
    addtask: (state, action) => {
      state.value.push(action.payload);
    },
    removetask: (state, action) => {
      state.value = state.value.filter((data) => data.id !== action.payload.id);
    },
    addmessage: (state, action) => {
      state.value.map((firt) => {
        if (firt.id === parseInt(action.payload.task_id)) {
          firt.message.push({
            id: action.payload.message_id,
            message: action.payload.actual_message,
          });
        }
        // firt.message.map((dt) => console.log(dt));
        return firt; // idk what this will do?
      });
    },
  },
});

export const { addtask, removetask, addmessage } = manageData.actions;

export default manageData.reducer;
