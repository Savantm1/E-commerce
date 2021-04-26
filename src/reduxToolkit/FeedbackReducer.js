import { createAction, createReducer } from "@reduxjs/toolkit";
// import { API } from '../api/api';


const initialState = {

  feedbackArray: [
    {
      name: "Inna",
      surname: "Perova",
      message:
        " This is an super customers qoute. Don’t worry it works smooth as pie. ",
      avatar: "./../../../assets/img/feedback/ben-parker-nsplash.jpg",  
    },
    {
      name: "Till",
      surname: "Lind",
      message:
        " This is an super space forqoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here ",
      avatar: "./../../../assets/img/feedback/luis-villasmil.jpg",
    },
    {
      name: "Fred",
      surname: "Wisley",
      message:
        " This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here ",
        avatar: "./../../../assets/img/feedback/ben-parker.jpg",
    },
    {
      name: "Harry",
      surname: "Potter",
      message:
        " This is an super space for your customers qoute. You will get all what you need by writiing a text here ",
        avatar: "./../../../assets/img/feedback/sigmund-jzz.jpg",
    },
    {
      name: "Inga",
      surname: "Malova",
      message:
        "  Don’t worry it works smooth as pie. You will get all what you need by writiing a text here ",
      avatar: "./../../../assets/img/feedback/ben-parker.jpg",
    },
    {
      name: "Igor",
      surname: "Sokolov",
      message:
        " Don’t worry it works smooth as pie. You will get.This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here ",
      avatar: "./../../../assets/img/feedback/alex-suprun.jpg",  
    },
  ],
};


export const feedbackSet = createAction("FEEDBACK_SET");

export default createReducer(initialState, {
  [feedbackSet]: (state) => {
    // state = API.getMainPageData();
    return state;
  },
});
