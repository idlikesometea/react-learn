import { combineReducers } from 'redux';

const songsReducer = () => {
    return [{
            title: 'Imagine',
            duration: '3:45'
        }, {
            title: '(Just Like) Starting Over',
            duration: '4:01'
        }, {
            title: 'Mind Games',
            duration: '3:57'
        }, {
            title: '#9 Dream',
            duration: '5:13'
        }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    switch(action.type) {
        case 'SELECT_SONG':
            return action.payload;
        default:
            return selectedSong;
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});