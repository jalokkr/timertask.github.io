import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: 'users',
    initialState: [
        {
            taskTitle: 'Creating Website',
            taskDescription: 'Alok completed this website in 30mins',
            time: '04:30:32'
        }
    ],
    reducers: {
        addTask(state, actions) {
            state.push(actions.payload);
        }
    }
});

export default taskSlice.reducer;
export const { addTask } = taskSlice.actions;