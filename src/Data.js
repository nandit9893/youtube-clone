export const API_KEY = 'AIzaSyDnoG5aQybGNu33Ll2J_Y8jim4d-ZmFPrg';

export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000) + "M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000) + "K";
    }
    else
    {
        return value;
    }
}