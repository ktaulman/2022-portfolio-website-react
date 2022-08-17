import React from "react";
import Section from "@/components/layout/Section";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <Section className="w-full flex justify-center items-center">
      <ContactForm />
    </Section>
  );
}
