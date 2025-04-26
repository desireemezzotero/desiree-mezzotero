import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';



function Project() {
  return (
    <>
      <div className="container border-t-2 border-neutral-900 mx-auto max-w-screen-xl w-52 mt-8">
      </div>
      <div className="max-w-screen-xl container mx-auto p-6">
        <h2 className="mb-6 text-6xl text-neutral-500 dancing-script">Project with Boolean</h2>

        <p className="text-white">
          Thanks to the course, I acquired a number of skills and during the six months of training I worked on numerous projects, some of them in collaboration with a team. Below is a selection of my work: click on each project to view the details.
        </p>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper mt-7"
        >

          <SwiperSlide className='border border-neutral-400 justify-items-center justify-center p-3'>
            <h2 className="mb-6 text-3xl text-neutral-500 dancing-script">Doctor</h2>
            <p>Development of complete web solutions ranging from user interface (UI) design to backend logic management</p>
          </SwiperSlide>

          <SwiperSlide className='border-2 border-neutral-400 justify-items-center justify-center p-3'>
            <h2 className="mb-6 text-3xl text-neutral-500 dancing-script">Front-End Development</h2>
            <p>I create intuitive and engaging user experiences, with responsive designs that fit any device. I use modern technologies like React, Bootstrap, and Tailwind CSS to build elegant and functional interfaces.</p>
          </SwiperSlide>

          <SwiperSlide className='border-2 border-neutral-400 justify-items-center justify-center p-3'>
            <h2 className="mb-6 text-3xl text-neutral-500 dancing-script">Back-end Development</h2>
            <p>Build secure and scalable systems for the server side of your website. I use technologies like Node.js, Express.js and PHP to ensure optimal performance and efficient data management.</p>
          </SwiperSlide>

          <SwiperSlide className='border-2 border-neutral-400 justify-items-center justify-center p-3'>
            <h2 className="mb-6 text-3xl text-neutral-500 dancing-script">Design with Figma</h2>
            <p>Design interactive layouts and prototypes with Figma, turning ideas into visually appealing and easily navigable designs optimized for the user experience.</p>
          </SwiperSlide>

          <SwiperSlide className='border-2 border-neutral-400 justify-items-center justify-center p-3'>
            <h2 className="mb-6 text-3xl text-neutral-500 dancing-script">Poster Design</h2>
            <p>I offer graphic design services for the creation of posters and promotional materials, with a focus on visibility and visual impact for your brand or event.</p>
          </SwiperSlide>

          <SwiperSlide className='border-2 border-neutral-400 justify-items-center justify-center p-3'>
            <h2 className="mb-6 text-3xl text-neutral-500 dancing-script">Web Page Management</h2>
            <p>I manage and continuously update your website and social media, ensuring that they are always up to date, performing and relevant</p>
          </SwiperSlide>
        </Swiper>
      </div>


      <div className="text-white flex  mt-4">
        <i class="fa-solid fa-graduation-cap text-white text-2xl mr-3"></i>

        <p className="font-bold mr-2">
          Technical and Vocational Diploma:
        </p>
        <p>
          Administration, Finance and Marketing Art. International Relations for Marketing
        </p>
      </div>


    </>
  )
}

export default Project