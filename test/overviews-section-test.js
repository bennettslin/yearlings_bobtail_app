import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import OverviewsSection from '../app/components/overviews/overview-section.jsx'

describe('OverviewsSection', () => {
    let overviewsSection

    beforeEach(() => {
        overviewsSection = shallow(<OverviewsSection />)
    })

    it('should exist', () => {
        expect(overviewsSection).to.exist
    })
})
