import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import AnnotationSection from '../app/components/annotation/annotation-section.jsx'

describe('AnnotationSection', () => {
    let annotationSection

    beforeEach(() => {
        annotationSection = shallow(<AnnotationSection />)
    })

    it('should exist', () => {
        expect(annotationSection).to.exist
    })
})
