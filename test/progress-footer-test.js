import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import ProgressFooter from '../app/components/progress/progress-footer.jsx'

describe('ProgressFooter', () => {
    let progressFooter

    beforeEach(() => {
        progressFooter = shallow(<ProgressFooter />)
    })

    it('should exist', () => {
        expect(progressFooter).to.exist
    })
})
