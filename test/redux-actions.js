import { expect } from 'chai'
import { SONG_INDEX,
         ANNOTATION_INDEX,
         OVERVIEW_INDEX,
         DEFAULT_OVERVIEW_INDEX,
         WIKI_URL } from '../app/helpers/constants'
import { selectSongIndex,
         selectAnnotationIndex,
         selectOverviewIndex,
         selectWikiUrl } from '../app/redux/actions'

describe('actions', () => {
    
    describe('selectSongIndex', () => {
        it('has the correct type', () => {
            const action = selectSongIndex()
            expect(action.type).to.equal(SONG_INDEX)
        })

        it ('has a default payload of 0', () => {
            const action = selectSongIndex()
            expect(action.payload).to.equal(0)
        })

        it('returns the new payload', () => {
            const NEW_INDEX = 5,
                action = selectSongIndex(NEW_INDEX)
            expect(action.payload).to.equal(NEW_INDEX)
        })
    })

    describe('selectAnnotationIndex', () => {
        it('has the correct type', () => {
            const action = selectAnnotationIndex()
            expect(action.type).to.equal(ANNOTATION_INDEX)
        })

        it ('has a default payload of 0', () => {
            const action = selectAnnotationIndex()
            expect(action.payload).to.equal(0)
        })

        it('returns the new payload', () => {
            const NEW_INDEX = 7,
                action = selectAnnotationIndex(NEW_INDEX)
            expect(action.payload).to.equal(NEW_INDEX)
        })
    })

    describe('selectOverviewIndex', () => {
        it('has the correct type', () => {
            const action = selectOverviewIndex()
            expect(action.type).to.equal(OVERVIEW_INDEX)
        })

        it ('has a default payload of 1', () => {
            const action = selectOverviewIndex()
            expect(action.payload).to.equal(DEFAULT_OVERVIEW_INDEX)
        })

        it('returns the new payload', () => {
            const NEW_INDEX = 3,
                action = selectOverviewIndex(NEW_INDEX)
            expect(action.payload).to.equal(NEW_INDEX)
        })
    })

    describe('selectWikiUrl', () => {
        it('has the correct type', () => {
            const action = selectWikiUrl()
            expect(action.type).to.equal(WIKI_URL)
        })

        it ('has a default payload of null', () => {
            const action = selectWikiUrl()
            expect(action.payload).to.equal(null)
        })

        it('returns the new payload', () => {
            const NEW_WIKI_URL = 'Velociraptor',
                action = selectWikiUrl(NEW_WIKI_URL)
            expect(action.payload).to.equal(NEW_WIKI_URL)
        })
    })
})
