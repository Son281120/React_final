import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            id: '',
            name: '',
            avatar: '',
            email: '',
            password: '',
            address: '',
            old: ''
        }, statusLogin: false
    },
    reducers: {
        updateUser:(state, action) => {
            state.user.id = action.payload.id;
            state.user.name = action.payload.name;
            state.user.avatar = action.payload.avatar;
            state.user.email = action.payload.email;
            state.user.password = action.payload.password;
            state.user.address = action.payload.address;
            state.user.old = action.payload.old;
        },
        updateStatusLogin: (state, action) => {
            state.statusLogin = action.payload
        }
    }
});

export const { updateUser, updateStatusLogin } = userSlice.actions;

export default userSlice.reducer;