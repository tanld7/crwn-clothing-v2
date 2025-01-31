import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

/**
  CHECK_USER_SESSION: "user/CHECK_USER_SESSION",
  GOOGLE_SIGN_IN_START: "user/GOOGLE_SIGN_IN_START",
  EMAIL_SIGN_IN_START: "user/EMAIL_SIGN_IN_START",
  SIGN_IN_SUCCESS: "user/SIGN_IN_SUCCESS",
  SIGN_IN_FAILED: "user/SIGN_IN_FAILED",
  SIGN_UP_START: "user/SIGN_UP_START",
  SIGN_UP_SUCCESS: "user/SIGN_UP_START",
  SIGN_UP_FAILED: "user/SIGN_UP_FAILED",
  SIGN_OUT_START: "user/SIGN_OUT_START",
  SIGN_OUT_SUCCESS: "user/SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILED: "user/SIGN_OUT_FAILED",
 */

export const checkUserSession = () => {
  return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
};

// SIGN IN actions
export const googleSignInStart = () => {
  return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
};

export const emailSignInStart = (email, password) => {
  return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
    email,
    password,
  });
};

export const signInSuccess = (user) => {
  return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
};

export const signInFailed = (error) => {
  return createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);
};

// SIGN UP actions
export const signUpStart = (email, password, displayName) => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });
};

export const signUpSuccess = (user, additionalDetails) => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
    user,
    additionalDetails,
  });
};

export const signUpFailed = (error) => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);
};

// SIGN OUT actions
export const signOutStart = () => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_START);
};

export const signOutSuccess = () => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
};

export const signOutFailed = (error) => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
};
