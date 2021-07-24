import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import BannerEnglish from '../sections/banner-en';
import KeyFeatureEnglish from '../sections/key-feature-en';
import ServiceSectionEnglish from '../sections/service-section-en';
import FeatureEnglish from '../sections/feature-en';
import CoreFeatureEnglish from '../sections/core-feature-en';
import WorkFlowEnglish from '../sections/workflow-en';
import TeamSectionEnglish from '../sections/team-section-en';
import TestimonialCardEnglish from '../sections/testimonial-en';
import MoreHistoryEnglish from '../sections/more-history-en';
import MoreHistoryFounderEnglish from '../sections/more-history-founder-en';
import VoluntariadoSectionEnglish from '../sections/voluntariado-section-en';
import ServiciosEnglish from '../sections/servicios-en';
import DonacionesEnglish from '../sections/donaciones-en';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Domus Colombia Foundation" />
          <BannerEnglish />
          <KeyFeatureEnglish /> 
          <ServiceSectionEnglish />
          <FeatureEnglish />
          <CoreFeatureEnglish />
          <MoreHistoryEnglish />
          <MoreHistoryFounderEnglish />
          <WorkFlowEnglish />
          <VoluntariadoSectionEnglish />
          <TeamSectionEnglish />
          <ServiciosEnglish />
          <TestimonialCardEnglish />
          <DonacionesEnglish />
        </Layout>
    </ThemeProvider>
  );
}
