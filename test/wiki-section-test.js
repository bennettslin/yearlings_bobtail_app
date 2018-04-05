import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import WikiSection from '../app/components/wiki/Wiki.jsx'

describe('WikiSection', () => {
    let wikiSection

    beforeEach(() => {
        wikiSection = shallow(<WikiSection />)
    })

    it('should exist', () => {
        expect(wikiSection).to.exist
    })
})
