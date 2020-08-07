
import {combineReducers} from 'redux';

// 1. Static list of songs to display on the main app page

const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4.05'},
        {title: 'Macarena' , duration: '2.30'},
        {title: 'All Star' , duration: '3.15'},
        {title: 'I want it' , duration: '5.00'},
        {title: 'Gagnan Style' , duration: '4.15'}
    ]

};


//2 . Selected song from a list of songs

const selectedSongReducer = (selectedSong=null, action) => {
    
    if (action.type === 'SONG_SELECTED'){
        return action.payload
    }

    return selectedSong;
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})