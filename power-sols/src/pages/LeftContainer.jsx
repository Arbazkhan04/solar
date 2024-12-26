import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Header from '../components/Header';
import Footer from '../components/Footer';
import defaultImage from '../assets/solar5.jpg';

const LeftContainer = ({ selectedOption, slides }) => {
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
        <div className="col-span-12 lg:col-span-8 sticky top-0 bg-slate-100 flex flex-col h-[40vh] lg:h-screen">
            <div className="flex-none">
                <Header />
            </div>
            <div className="flex-grow relative">
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
                            <img
                                src={defaultImage}
                                alt="Default Slide"
                                className="absolute inset-0 w-full h-full rounded-md object-cover"
                            />
                        </SwiperSlide>
                    ) : (
                        slides.map((slide, index) => (
                            <SwiperSlide key={index} className="relative w-full h-full">
                                <img
                                    src={slide.imageUrl}
                                    alt={slide.label}
                                    className="absolute inset-0 w-full h-full rounded-md object-cover"
                                />
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
            <div className="h-[10%] bg-gray-950 flex items-center justify-center">
                <Footer selectedOption={selectedOption} />
            </div>
        </div>
    );
};

export default LeftContainer;
