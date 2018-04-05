import React from 'react';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import AnnotationCard from '../app/components/Annotation/annotation-card.jsx'

describe('AnnotationCard', () => {
    let annotationCard

    beforeEach(() => {
        annotationCard = shallow(<AnnotationCard />)
    })

    it('should exist', () => {
        expect(annotationCard).to.exist
    })
})
