import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import LyricsVerse from '../app/components/lyrics/lyrics-verse.jsx'

describe('LyricsVerse', () => {
    let lyricsVerse

    beforeEach(() => {
        lyricsVerse = shallow(<LyricsVerse />)
    })

    it('should exist', () => {
        expect(lyricsVerse).to.exist
    })
})
