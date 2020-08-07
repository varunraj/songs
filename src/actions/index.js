
// Action creator to create a song action
export const selectSong = (song) => {
    return {
        type:'SONG_SELECTED',
        payload:song
    };

};

