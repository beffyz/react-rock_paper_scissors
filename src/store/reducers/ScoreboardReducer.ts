import { createSlice } from '@reduxjs/toolkit';

const scoreboardSlice = createSlice({
  name: 'scoreboard',
  initialState: {
    userScore: 0,
    tieScore: 0,
    cpuScore: 0,
  },
  reducers: {
    increaseUserScore: (state) => { state.userScore += 1; },
    increaseTieScore: (state) => { state.tieScore += 1; },
    increaseCpuScore: (state) => { state.cpuScore += 1; },
  },
});

export const {
  increaseUserScore, increaseTieScore, increaseCpuScore,
} = scoreboardSlice.actions;

export default scoreboardSlice.reducer;
