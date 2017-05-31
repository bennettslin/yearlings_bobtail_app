import { expect } from 'chai'
import { SELECTED_SONG_INDEX,
         SELECTED_ANNOTATION_INDEX,
         SELECTED_VERSE_INDEX,
         SELECTED_OVERVIEW_INDEX } from '../app/constants/state'
import { SongIndexReducer,
         AnnotationIndexReducer,
         LineIndexReducer,
         OverviewIndexReducer } from '../app/redux/reducers'

describe('reducers', () => {

    describe('SongIndexReducer', () => {

        /**
         * FIXME: This expect doesn't work because storage helper seems to know
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
                action = { type: SELECTED_SONG_INDEX, payload: NEW_INDEX }
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
                action = { type: SELECTED_ANNOTATION_INDEX, payload: NEW_INDEX }
            expect(AnnotationIndexReducer(undefined, action)).to.equal(NEW_INDEX)
        })
    })

    describe('LineIndexReducer', () => {
        it('returns current index if passed unknown type', () => {
            const CURRENT_INDEX = 14
            expect(LineIndexReducer(CURRENT_INDEX, {})).to.equal(CURRENT_INDEX)
        })

        it('handles action type of annotation index', () => {
            const NEW_INDEX = 9,
                action = { type: SELECTED_VERSE_INDEX, payload: NEW_INDEX }
            expect(LineIndexReducer(undefined, action)).to.equal(NEW_INDEX)
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
                action = { type: SELECTED_OVERVIEW_INDEX, payload: NEW_INDEX }
            expect(OverviewIndexReducer(undefined, action)).to.equal(NEW_INDEX)
        })
    })
})
