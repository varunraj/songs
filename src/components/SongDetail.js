import React from 'react'
import {connect} from 'react-redux';

const SongDetail = (props) => {
    
    if (props.song)
        return (
            <div>
                <h3>Details for: </h3>
                <p>
                    {props.song.title}
                    <hr />
                    {props.song.duration}

                </p>

            </div>
        )
    return <div>Select a Song</div>
}

const mapStateToProp = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProp)(SongDetail)