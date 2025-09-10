import React from "react";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { ProcessSection } from "./sections/ProcessSection/ProcessSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";

export const FractionalCmoNew = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start relative"
      data-model-id="2330:1362"
    >
      <NavigationSection />
      <AboutSection />
      <ProcessSection />
      <ServicesSection />
      <HeroSection />
      <TestimonialsSection />
      <FeaturesSection />
      <ContactSection />
    </div>
  );
};
