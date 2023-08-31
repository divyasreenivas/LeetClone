import { type } from 'os';
import {atom} from 'recoil';

type AuthModelState={
    isOpen:boolean;
    type:"login" |"register"| "forgotpassword"
};
const initalAuthModelState:AuthModelState={
    isOpen:false,
    type:"login",

};
export const  authModelState = atom<AuthModelState>({
    key:"authModelstate",
    default:initalAuthModelState,

});