export const API_KEY = 'AIzaSyD8Kq4-e_jTgTRSb8qI61OAX78LsUlmrfQ';

export const value_convertor = (value) => {
    if(value >= 1000000){
        return Math.floor(value/1000000) + "M";
    }else if(value >= 1000){
        return Math.floor(value/1000) + "K";
    }else{
        return value;
    }
}