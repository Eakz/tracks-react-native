import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
const signup = (dispatch) => {
    return ({ email, password }) => {
        //make api request to sign up with that email and password
        // if we sign up, modify our state and say are authenticated
        // if signing up fails, we need to reflect an error message
    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        // try to signin
        // handle success by updating this.state.
        // handle failure by showing error message
    };
};
const signout = (dispatch) => {
    return () => {
        //signout
    };
};
export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { isSignedIn: false },
);
