import React from 'react';
import ContactForm from "@/components/Contact/ContactForm"
import Section from "@/components/General/Section"

export default function ContactPage(){
    return(
        <Section className="flex justify-center">
            <ContactForm/>
        </Section>
    )
}