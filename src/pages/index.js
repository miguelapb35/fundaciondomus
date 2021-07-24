import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import KeyFeature from "../sections/key-feature";
import ServiceSection from "../sections/service-section";
import Feature from "../sections/feature";
import CoreFeature from "../sections/core-feature";
import WorkFlow from "../sections/workflow";
import Package from "../sections/package";
import TeamSection from "../sections/team-section";
import TestimonialCard from "../sections/testimonial";
import MoreHistory from "../sections/more-history";
import MoreHistoryFounder from "../sections/more-history-founder";
import VoluntariadoSection from "../sections/voluntariado-section";
import Servicios from "../sections/servicios";
import Donaciones from "../sections/donaciones";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Fundación Domus Colombia" />
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
