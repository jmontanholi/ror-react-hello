import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const GET_GREETING = 'GET_GREETING'
export const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS'

const getGreeting = async (dispatch) => {
  dispatch({ type: GET_GREETING });
  const response = await fetch('v1/greeting');
  const data = await response.json();
  return dispatch({ type: GET_GREETING_SUCCESS, payload: data.greeting });
}

const HelloWord = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getGreeting(dispatch);
  }, []);

  const greeting = useSelector((state) => state.greeting);
  return (
    <div>
      {greeting}
    </div>
  )
};

export default HelloWord
