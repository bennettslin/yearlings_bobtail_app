import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import WikiPopup from '../app/components/wiki/wiki-popup.jsx'

describe('WikiPopup', () => {
    let wikiPopup

    beforeEach(() => {
        wikiPopup = shallow(<WikiPopup />)
    })

    it('should exist', () => {
        expect(wikiPopup).to.exist
    })
})
