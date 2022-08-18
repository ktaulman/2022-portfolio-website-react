import React from "react";
import ContactForm from "@/components/ContactForm";
import Section from "@/components/layout/Section";


export default function ContactPage() {
  return (
    <Section className="flex flex-col justify-center items-center h-screen">
      <ContactForm />
    </Section>
  );
}
