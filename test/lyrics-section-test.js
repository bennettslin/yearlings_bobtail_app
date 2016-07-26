import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import LyricsSection from '../app/components/lyrics/lyrics-section.jsx'

describe('LyricsSection', () => {
    let lyricsSection

    beforeEach(() => {
        lyricsSection = shallow(<LyricsSection />)
    })

    it('should exist', () => {
        expect(lyricsSection).to.exist
    })
})
