import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import LyricsStanza from '../app/components/lyrics/lyrics-stanza.jsx'

describe('LyricsStanza', () => {
    let lyricsStanza

    beforeEach(() => {
        lyricsStanza = shallow(<LyricsStanza />)
    })

    it('should exist', () => {
        expect(lyricsStanza).to.exist
    })
})
