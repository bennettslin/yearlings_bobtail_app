import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import OverviewToggle from '../app/components/overview/overview-button.jsx'

describe('OverviewToggle', () => {
    let overviewButton

    beforeEach(() => {
        overviewButton = shallow(<OverviewToggle />)
    })

    it('should exist', () => {
        expect(overviewButton).to.exist
    })
})
