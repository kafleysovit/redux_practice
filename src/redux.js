import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    task: "Welcome",
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
        return firt;
      });
    },
  },
});

export const { addtask, removetask, addmessage } = manageData.actions;

export default manageData.reducer;
