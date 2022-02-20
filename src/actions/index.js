import { username,password,email } from "../secret";
export const RECIEVE_MEMES = 'RECIEVE_MEMES';
export const NEW_MEME = 'NEW_MEME';


function recieveMemes(json){
    const {memes} = json.data;
    return {
        type: RECIEVE_MEMES,
        memes
    }
}
function fetchMemesJson(){
    return fetch('https://api.imgflip.com/get_memes')
        .then(response=>response.json())
}

export function fetchMemes(){
    return function(dispatch){
        return fetchMemesJson()
                .then(json=>dispatch(recieveMemes(json)))
    }
}

function newMeme(meme){
    return {
        type: NEW_MEME,
        meme
    }
}

function postMemeJson(params){
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("text0", params.text0);
urlencoded.append("text1", params.text1);
urlencoded.append("username", username);
urlencoded.append("password", password);
urlencoded.append("template_id", params.template_id);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

    

    

    return fetch("https://api.imgflip.com/caption_image",requestOptions)
            .then(response=>response.json())
}
export function createMeme(new_meme_obj){
    return function (dispatch){
        return postMemeJson(new_meme_obj)
                .then(new_meme=>dispatch(newMeme(new_meme)))
    }
}