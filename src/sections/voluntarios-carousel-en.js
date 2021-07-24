/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';

import Member1 from 'assets/voluntariado/voluntarios/1.jpg';
import Member2 from 'assets/voluntariado/voluntarios/2.jpg';
import Member3 from 'assets/voluntariado/voluntarios/3.jpg';
import Member4 from 'assets/voluntariado/voluntarios/4.jpg';
import Member5 from 'assets/voluntariado/voluntarios/5.jpg';
import Member6 from 'assets/voluntariado/voluntarios/6.jpg';
import Member7 from 'assets/voluntariado/voluntarios/7.jpg';
import Member8 from 'assets/voluntariado/voluntarios/8.jpg';
import Member9 from 'assets/voluntariado/voluntarios/9.jpg';
import Member10 from 'assets/voluntariado/voluntarios/10.jpg';


const data = [
  {
    id: 1,
    title: 'Member1',
    avatar: Member1,
  },
  {
    id: 2,
    title: 'Member2',
    avatar: Member2,
  },
  {
    id: 3,
    title: 'Member3',
    avatar: Member3,
  },
  {
    id: 4,
    title: 'Member4',
    avatar: Member4,
  },
  {
    id: 5,
    title: 'Member5',
    avatar: Member5,
  },
  {
    id: 6,
    title: 'Member6',
    avatar: Member6,
  },
  {
    id: 7,
    title: 'Member7',
    avatar: Member7,
  },
  {
    id: 8,
    title: 'Member8',
    avatar: Member8,
  },
  {
    id: 9,
    title: 'Member9',
    avatar: Member9,
  },
  {
    id: 10,
    title: 'Member10',
    avatar: Member10,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom:0,
  arrows: false,
  autoPlay: true,
  autoPlaySpeed: 3000,
  centerMode:false,
  className:"",
  containerClass:"carousel-container",
  customButtonGroup:<ButtonGroup />,
  dotListClass:"",
  draggable: true,
  focusOnSelect:false,
  infinite:true,
  itemClass:"",
  keyBoardControl: true,
  minimumTouchDrag:80,
  renderButtonGroupOutside: true,
  renderDotsOutside:false,
  responsive:responsive,
  showDots:false,
  sliderClass:"",
  slidesToSlide:1,
}

export default function VoluntariosCardEnglish() {
  return (
    <section sx={{ variant: 'section.testimonial' }}>
      <Container css={{ textAlign: 'center' }} >
        <SectionHeader
          slogan='Domus Colombia Foundation'
          title='Our Volunteers'
        />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel {...carouselParams}>
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={item.id}>
              <Image src={item.avatar} alt='Imagen Voluntarios' />
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    bg: 'white',
    textAlign: 'left',
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
  },

};
