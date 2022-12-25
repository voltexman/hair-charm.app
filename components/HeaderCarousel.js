var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

export default function HeaderCarousel() {
    return (
        <OwlCarousel
            className='brands-carousel'
            items={10}
            nav={false}
            loop
            margin={5}
            dots={false}
            autoplay={true}
            autoplaySpeed={2000}
            autoplayTimeout={3500}
        >
            <div class="brand-logo">
                <img class="img-fluid rounded" src="images/carousel/carousel-1.jpg" alt="brand-logo" />
            </div>

            <div class="brand-logo">
                <img class="img-fluid rounded" src="images/carousel/carousel-2.jpg" alt="brand-logo" />
            </div>

            <div class="brand-logo">
                <img class="img-fluid rounded" src="images/carousel/carousel-3.jpg" alt="brand-logo" />
            </div>

            <div class="brand-logo">
                <img class="img-fluid rounded" src="images/carousel/carousel-4.jpg" alt="brand-logo" />
            </div>

            <div class="brand-logo">
                <img class="img-fluid rounded" src="images/carousel/carousel-5.jpg" alt="brand-logo" />
            </div>

            <div class="brand-logo">
                <img class="img-fluid rounded" src="images/carousel/carousel-6.jpg" alt="brand-logo" />
            </div>

            <div class="brand-logo">
                <img class="img-fluid rounded" src="images/carousel/carousel-7.jpg" alt="brand-logo" />
            </div>

            <div class="brand-logo">
                <img class="img-fluid rounded" src="images/carousel/carousel-8.jpg" alt="brand-logo" />
            </div>

            <div class="brand-logo">
                <img class="img-fluid rounded" src="images/carousel/carousel-9.jpg" alt="brand-logo" />
            </div>

            <div class="brand-logo">
                <img class="img-fluid rounded" src="images/carousel/carousel-10.jpg" alt="brand-logo" />
            </div>

            <div class="brand-logo">
                <img class="img-fluid rounded" src="images/carousel/carousel-11.jpg" alt="brand-logo" />
            </div>

            <div class="brand-logo">
                <img class="img-fluid rounded" src="images/carousel/carousel-12.jpg" alt="brand-logo" />
            </div>

            <div class="brand-logo">
                <img class="img-fluid rounded" src="images/carousel/carousel-13.jpg" alt="brand-logo" />
            </div>

            <div class="brand-logo">
                <img class="img-fluid rounded" src="images/carousel/carousel-14.jpg" alt="brand-logo" />
            </div>

            <div class="brand-logo">
                <img class="img-fluid rounded" src="images/carousel/carousel-15.jpg" alt="brand-logo" />
            </div>
        </OwlCarousel >
    )
}