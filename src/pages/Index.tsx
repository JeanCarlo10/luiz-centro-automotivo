import React, { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// * React.lazy() carrega componentes quando necessário *
const Reviews = React.lazy(() => import("@/components/Reviews"));
const FAQ = React.lazy(() => import("@/components/FAQ"));
const Services = React.lazy(() => import("@/components/Services"));
const About = React.lazy(() => import("@/components/About"));
const Contact = React.lazy(() => import("@/components/Contact"));
const Footer = React.lazy(() => import("@/components/Footer"));
const WhatsAppButton = React.lazy(() => import("@/components/WhatsAppButton"));

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main id="main-content" className="flex-grow">
        <Hero />
        <Suspense fallback={null}>
          <Services />
          <About />
          <Reviews />
          <FAQ />
          <Contact />

          <Footer />
          <WhatsAppButton />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
