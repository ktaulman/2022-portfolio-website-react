import React from 'react';
import Section from "@/components/General/Section"
import ContactForm from '../Contact/ContactForm';

export default function HomeContact(){
    return(
        <Section className='w-full flex justify-center items-center'>
            <ContactForm/>
        </Section>
    )
}