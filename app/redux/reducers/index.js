import { combineReducers } from 'redux'
import SongIndexReducer from './reducer-song-index.js'
import AnnotationIndexReducer from './reducer-annotation-index.js'
import OverviewIndexReducer from './reducer-overview-index.js'
import WikiUrlReducer from './reducer-wiki-url.js'

const rootReducer = combineReducers({
    activeSongIndex: SongIndexReducer,
    activeAnnotationIndex: AnnotationIndexReducer,
    activeOverviewIndex: OverviewIndexReducer,
    activeWikiUrl: WikiUrlReducer
})

export default rootReducer
