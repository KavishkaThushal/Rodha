import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    error: null,
    loading: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart:(state) => {
            state.loading = true;
        },
        signInSuccess:(state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error=null;
        },
        signInFail:(state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        
        updateStart:(state) => {
            state.loading = true;
        },
        updateSuccess:(state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error=null;
        },
        updateFail:(state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteStart:(state) => {
            state.loading = true;
        },
        deleteSuccess:(state, action) => {
            state.loading = false;
            state.user = null;
            state.error=null;
        },
        deleteFail:(state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signOutStart:(state) => {
            state.loading = true;
        },
        signOutSuccess:(state, action) => {
            state.loading = false;
            state.user = null;
            state.error=null;
        },
        signOutFail:(state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {signInStart, signInSuccess, signInFail,updateFail,updateStart,updateSuccess,deleteFail,deleteStart,deleteSuccess,signOutFail,signOutStart,signOutSuccess} = userSlice.actions;
export default userSlice.reducer;