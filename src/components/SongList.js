import React from 'react';
import { connect } from 'react-redux';
import {selectSong} from '../actions'


class SongList extends React.Component {
    
    renderList () {
        return this.props.songs.map((song)=>{
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={()=>this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }
    
    render(){
        return(
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}


// state param below contains state data from redux store
const mapStateToProps = (state) => {
    // below will give songs as a prop to SongList
    return {
        songs:state.songs
    }
}

// connect() will return a function to which we pass the param songlist
// first param is the state to prop map function which will return 
// props for this component and second one is the actions needed 
export default connect(mapStateToProps, {selectSong:selectSong})(SongList);

 

