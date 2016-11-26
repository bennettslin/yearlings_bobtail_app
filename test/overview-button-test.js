import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import OverviewButton from '../app/components/overview/overview-button.jsx'

describe('OverviewButton', () => {
    let overviewButton

    beforeEach(() => {
        overviewButton = shallow(<OverviewButton />)
    })

    it('should exist', () => {
        expect(overviewButton).to.exist
    })
})
