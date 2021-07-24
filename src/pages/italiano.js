import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner-it";
import KeyFeature from "../sections/key-feature-it";
import ServiceSection from "../sections/service-section-it";
import Feature from "../sections/feature-it";
import CoreFeature from "../sections/core-feature-it";
import WorkFlow from "../sections/workflow-it";
// import Package from "../sections/package";
import TeamSection from "../sections/team-section-it";
import TestimonialCard from "../sections/testimonial-it";
import MoreHistory from "../sections/more-history-it";
import MoreHistoryFounder from "../sections/more-history-founder-it";
import VoluntariadoSection from "../sections/voluntariado-section-it";
import Servicios from "../sections/servicios-it";
import Donaciones from "../sections/donaciones-it";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Fondazione Domus Colombia" />
        <Banner />
        <KeyFeature />
        <ServiceSection />
        <Feature />
        <CoreFeature />
        <MoreHistory />
        <MoreHistoryFounder />
        <WorkFlow />
        <VoluntariadoSection />
        <TeamSection />
        <Servicios />
        <TestimonialCard />
        <Donaciones />
      </Layout>
    </ThemeProvider>
  );
}
