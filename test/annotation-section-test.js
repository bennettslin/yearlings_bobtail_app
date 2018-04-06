import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Annotation from '../app/components/Annotation/Annotation.jsx'

describe('Annotation', () => {
    let annotationSection

    beforeEach(() => {
        annotationSection = shallow(<Annotation />)
    })

    it('should exist', () => {
        expect(annotationSection).to.exist
    })
})
