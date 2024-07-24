import { createSlice } from "@reduxjs/toolkit";

// export const deposit = createAction("balance/deposit");

// export const withdrow = createAction('balance/withdrow');

 const slice = createSlice({
  name: 'balance',
  initialState: {
    value: 0
  },
  reducers: {
    deposit(state, action) {state.value += action.payload},
    withdrow(state,action) {state.value -= action.payload},
  },
 })

export default slice.reducer;

export const { deposit, withdrow } = slice.actions;


// export const balanceReducer = createReducer({
//     value: 0
// }, (builder) => {
//   builder
//     .addCase(deposit, (state, action) => {
//       state.value += action.payload
//     })
//     .addCase(withdrow, (state, action) => {
//       state.value -= action.payload
//     })
//   })


// export const balanceReducer = (state = {
//     value: 0
//   }, action) => {
//   switch (action.type) {
//     case deposit.type:
//       return {
//         value: state.value + action.payload
//       }
    
//     case withdrow.type:
//       return {
//         value: state.value - action.payload
//       }
    
//     default:
//       return state;
//     }
// }