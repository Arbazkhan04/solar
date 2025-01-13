import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
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
        <div
            className="col-span-12 lg:col-span-8 bg-white flex flex-col h-[50vh] lg:h-screen lg:p-16 lg:sticky lg:top-0"
        >
            <div className="flex-grow relative w-full h-full">
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
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                }}
                                className="absolute inset-0 w-full h-full"
                            ></div>
                        </SwiperSlide>
                    ) : (
                        slides.map((slide, index) => (
                            <SwiperSlide key={index} className="relative w-full h-full">
                                <div
                                    style={{
                                        backgroundImage: `url(${slide.imageUrl})`,
                                        backgroundPosition: 'center center',
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                    className="absolute inset-0 w-full h-full"
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
