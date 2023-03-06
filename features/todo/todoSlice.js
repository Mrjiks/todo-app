import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Read a book",
    done: false,
  },

  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Talk a walk",
    done: false,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571ee9d72",
    title: "Talk a walk",
    done: true,
  },
  {
    id: "50694a0f-3da1-471f-bd96-145571ee9d72",
    title: "Take jack for walk",
    done: false,
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    markDone: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].done = !state[index].done;
    },

    deleteItem: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    removeAllItems: (state) => {
      return (state = []);
    },
  },
});

export const { addItem, markDone, deleteItem, removeAllItems } = todoSlice.actions;

export default todoSlice.reducer;
