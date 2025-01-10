import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Header from '../../components/Header';
import banner from '../../assets/banner.png';

const LeftContainer = ({ selectedOptions, slides }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiperInstance = swiperRef.current.swiper;
            if (swiperInstance) {
                swiperInstance.params.navigation.prevEl = prevRef.current;
                swiperInstance.params.navigation.nextEl = nextRef.current;
                swiperInstance.navigation.init();
                swiperInstance.navigation.update();
                swiperInstance.slideTo(0); // Reset to first slide when slides change
            }
        }
    }, [slides]);

    return (
        <div className="col-span-12 lg:col-span-8 sticky top-0 bg-slate-100 flex flex-col h-[30vh] ssm:h-[30vh] msm:h-[33vh] lsm:h-[36vh] sm:h-[40vh] lg:h-screen  ">
            <Header />
            <div className="flex-grow relative lg:pb-20">
                <Swiper
                    ref={swiperRef}
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    modules={[Pagination, Navigation]}
                    className="w-full h-full"
                >
                    {!slides || slides.length === 0 ? (
                        <SwiperSlide className="relative w-full h-full">
                            <div
                                style={{
                                    backgroundImage: `url(${banner})`,
                                    backgroundPosition: 'center center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                }}
                                className="absolute inset-0 w-full h-full rounded-md"
                            ></div>
                        </SwiperSlide>
                    ) : (
                        slides.map((slide, index) => (
                            <SwiperSlide key={index} className="relative w-full h-full">
                                <div
                                    style={{
                                        backgroundImage: `url(${slide.imageUrl})`,
                                        backgroundPosition: 'center center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                    className="absolute inset-0 w-full h-full rounded-md"
                                ></div>
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>
                <div
                    ref={prevRef}
                    className="custom-prev absolute top-1/2 left-4 transform -translate-y-1/2 flex justify-center items-center cursor-pointer bg-gray-500 hover:bg-gray-600 text-white rounded-full w-10 h-10 shadow-md"
                >
                    &#8592;
                </div>
                <div
                    ref={nextRef}
                    className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 flex justify-center items-center cursor-pointer bg-gray-500 hover:bg-gray-600 text-white rounded-full w-10 h-10 shadow-md"
                >
                    &#8594;
                </div>
            </div>
        </div>

    );
};

export default LeftContainer;
