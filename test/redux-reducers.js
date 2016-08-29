import { expect } from 'chai'
import { ACTIVE_SONG_INDEX,
         ACTIVE_ANNOTATION_INDEX,
         ACTIVE_OVERVIEW_INDEX,
         DEFAULT_OVERVIEW_INDEX,
         ACTIVE_WIKI_URL } from '../app/helpers/constants'
import { SongIndexReducer,
         AnnotationIndexReducer,
         OverviewIndexReducer,
         WikiUrlReducer } from '../app/redux/reducers'

describe('reducers', () => {

    describe('SongIndexReducer', () => {

        /**
         * FIXME: This expect doesn't work because session helper seems to know
         * a different window object?
         * See: http://stackoverflow.com/questions/29324888/working-with-global-window-variable-in-mocha-js-from-node
         */
        //  it('returns stored index if initial state', () => {
        //      const STORED_INDEX = 15
        //      expect(SongIndexReducer(undefined, {})).to.equal(STORED_INDEX)
        //  })

        it('returns current index if passed unknown type', () => {
            const CURRENT_INDEX = 11
            expect(SongIndexReducer(CURRENT_INDEX, {})).to.equal(CURRENT_INDEX)
        })

        it('handles action type of song index', () => {
            const NEW_INDEX = 6,
                action = { type: ACTIVE_SONG_INDEX, payload: NEW_INDEX }
            expect(SongIndexReducer(undefined, action)).to.equal(NEW_INDEX)
        })
    })

    describe('AnnotationIndexReducer', () => {
        it('returns current index if passed unknown type', () => {
            const CURRENT_INDEX = 13
            expect(AnnotationIndexReducer(CURRENT_INDEX, {})).to.equal(CURRENT_INDEX)
        })

        it('handles action type of annotation index', () => {
            const NEW_INDEX = 8,
                action = { type: ACTIVE_ANNOTATION_INDEX, payload: NEW_INDEX }
            expect(AnnotationIndexReducer(undefined, action)).to.equal(NEW_INDEX)
        })
    })

    // TODO: Write unit tests for dot keys reducer.

    describe('OverviewIndexReducer', () => {
        it('returns current index if passed unknown type', () => {
            const CURRENT_INDEX = 2
            expect(OverviewIndexReducer(CURRENT_INDEX, {})).to.equal(CURRENT_INDEX)
        })

        it('handles action type of overview index', () => {
            const NEW_INDEX = 2,
                action = { type: ACTIVE_OVERVIEW_INDEX, payload: NEW_INDEX }
            expect(OverviewIndexReducer(undefined, action)).to.equal(NEW_INDEX)
        })
    })

    describe('WikiUrlReducer', () => {
        it('returns current url if passed unknown type', () => {
            const CURRENT_URL = 'Pterodactylus'
            expect(WikiUrlReducer(CURRENT_URL, {})).to.equal(CURRENT_URL)
        })

        it('handles action type of wiki url', () => {
            const NEW_WIKI_URL = 'Tyrannosaurus',
                action = { type: ACTIVE_WIKI_URL, payload: NEW_WIKI_URL }
            expect(WikiUrlReducer(undefined, action)).to.equal(NEW_WIKI_URL)
        })
    })
})
