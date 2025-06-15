import React from 'react'
import { HeroSection } from '../component/HeroSection'
import  DetailCard  from '../component/DetailCard'
import { About } from '../component/About'
import Accordion from '../component/Accordion'
import  Course  from '../component/Course'
import {Teacher} from '../component/Teacher'
import {Testimonial} from '../component/Testimonial'
import { Job } from './Job'
export const Home = () => { 
    return <>
    <HeroSection />
    <DetailCard />
    <About></About>
    <Accordion />
    <Course />
    <Teacher></Teacher>
    <Testimonial></Testimonial>
    <Job></Job>
    </>
}