import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import ProgressBar from '../app/components/progress/progress-bar.jsx'

describe('ProgressBar', () => {
    let progressBar

    beforeEach(() => {
        progressBar = shallow(<ProgressBar />)
    })

    it('should exist', () => {
        expect(progressBar).to.exist
    })
})
