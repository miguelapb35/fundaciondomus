/** @jsx jsx */
import { jsx, Container, Box, Flex } from 'theme-ui';
import { keyframes } from '@emotion/core';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import PriceCard from 'components/price-card';
import ButtonGroup from 'components/button-group';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

import Member1 from 'assets/ayuda/img1.png';
import Member2 from 'assets/ayuda/img2.png';
import Member3 from 'assets/ayuda/img3.png';
import Member4 from 'assets/ayuda/img4.png';
import Member5 from 'assets/ayuda/img5.png';
import Member6 from 'assets/ayuda/img6.png';
import Member7 from 'assets/ayuda/img7.png';
import Member8 from 'assets/ayuda/img8.png';
import Member9 from 'assets/ayuda/img9.png';
import Member10 from 'assets/ayuda/img10.png';
import Member11 from 'assets/ayuda/img11.png';
import Member12 from 'assets/ayuda/img12.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Member1',
    title: 'Member1',
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Member2',
    title: 'Member2',
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Member3',
    title: 'Member3',
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Member4',
    title: 'Member4',
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Member5',
    title: 'Member5',
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: 'Member6',
    title: 'Member6',
  },
  {
    id: 7,
    imgSrc: Member7,
    altText: 'Member7',
    title: 'Member7',
  },
  {
    id: 8,
    imgSrc: Member8,
    altText: 'Member8',
    title: 'Member8',
  },
  {
    id: 9,
    imgSrc: Member9,
    altText: 'Member9',
    title: 'Member9',
  },
  {
    id: 10,
    imgSrc: Member10,
    altText: 'Member10',
    title: 'Member10',
  },
  {
    id: 11,
    imgSrc: Member11,
    altText: 'Member11',
    title: 'Member11',
  },
  {
    id: 12,
    imgSrc: Member12,
    altText: 'Member12',
    title: 'Member12',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Package() {
  

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlay: true,
    autoPlaySpeed: 2000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
    <section id='pricing' sx={{ variant: 'section.pricing' }}>
      <Container>
{/*         <SectionHeader
          slogan='Pricing Plan'
          title='Choose your pricing plan'
        /> */}

        <Box sx={styles.pricingWrapper} className='pricing__wrapper'>
          <Carousel {...sliderParams}>
            
           {data.map((item) => (
              <Box sx={styles.pricingItem}
                key={item.id}
                imgSrc={item.imgSrc}
                altText={item.altText}
                title={item.title}
              />
            ))}

 {/*             {state.pricingPlan.map((packageData) => (
              <Box sx={styles.pricingItem} key={packageData.id}>
                <PriceCard data={packageData} />
              </Box>
            ))} */}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex',
      },
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto',
  },
};
