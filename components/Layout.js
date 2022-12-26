import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import HeaderCarousel from '../components/HeaderCarousel'
// import OwlCarousel from 'react-owl-carousel';
import Script from 'next/script';

const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <title>sdsfdh</title>
            </Head>

            <div id="loader-wrapper">
                <div id="loading">
                    <div className="cssload-loader">
                        <div className="fancy-spinner">
                            <div className="ring"></div>
                            <div className="ring"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="page" className="page">

                <header id="header" className="header tra-menu navbar-light">
                    <div className="header-wrapper" style={{ background: 'rgba(0, 0, 0, .35)' }}>

                        <div className="wsmobileheader clearfix">
                            <span className="smllogo"><Image src="/images/logo-01.png" width="170" height="50" alt="mobile-logo" /></span>
                            <a id="wsnavtoggle" className="wsanimated-arrow"><span></span></a>
                        </div>

                        <div className="wsmainfull menu clearfix">
                            <div className="wsmainwp clearfix">

                                <div className="desktoplogo"><a href="demo-7.html#hero-7" className="logo-black"><Image src="/images/logo-01.png" width="170" height="50" alt="header-logo" /></a></div>
                                <div className="desktoplogo"><a href="demo-7.html#hero-7" className="logo-white"><Image src="/images/logo-white.png" width="170" height="50" alt="header-logo" /></a></div>

                                <nav className="wsmenu clearfix">
                                    <ul className="wsmenu-list">

                                        <li className="nl-simple" aria-haspopup="true"><a href="contacts.html">Home</a></li>

                                        <li className="nl-simple" aria-haspopup="true"><a href="contacts.html">Gallery</a></li>

                                        <li className="nl-simple" aria-haspopup="true"><a href="contacts.html">Contacts</a></li>

                                        <li className="nl-simple header-phone" aria-haspopup="true">
                                            <a href="tel:380931501651"><span className="bg-color-09 white-color"><i className="fas fa-phone"></i></span>+380 93 150 16 51</a>
                                        </li>

                                        <li className="nl-simple" aria-haspopup="true">
                                            <a href="#" className="btn btn-color-02 tra-color-02-hover last-link">Book Now</a>
                                        </li>

                                        <li className="nl-simple txt-color-03 header-socials clearfix" aria-haspopup="true">
                                            {/* <span><a href="#" className="ico-facebook"><i className="fab fa-facebook-f"></i></a></span> */}
                                            {/* <span><a href="#" className="ico-twitter"><i className="fab fa-twitter"></i></a></span> */}
                                            {/* <span><a href="#" className="ico-instagram"><i className="fab fa-instagram"></i></a></span> */}
                                            {/* <span><a href="#" className="ico-dribbble"><i className="fab fa-yelp"></i></a></span> */}
                                        </li>

                                    </ul>
                                </nav>

                            </div>
                        </div>

                    </div>
                </header>

                <section id="hero-7" className="hero-section division overflow-hidden" data="height: 100vh;">

                    <div className="slider h-100">

                        <ul className="slides h-100">

                            <li id="slide-1">

                                <Image src="/images/slideshow/slide-1.jpg" width="800" height="600" alt="slide-background" className="img-fluid" />

                                <div className="caption d-flex align-items-center">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="caption-txt txt-color-01">
                                                    <h2 className="fs-3">Luxury elite Slavic virgin hair cut on the territory of Ukraine and Russia. Unique opportunity to buy hair straight from the tin</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>

                        </ul>

                    </div>
                </section>

                <div id="brands-1" className="bg-color-02 brands-section division">
                    <div className="row">
                        <div className="col-md-12 text-center">

                            <div className="owl-carousel brands-carousel">

                                <div className="brand-logo">
                                    <Image className="img-fluid rounded" src="/images/carousel/carousel-1.jpg" width="150" height="150" alt="brand-logo" />
                                </div>

                                <div className="brand-logo">
                                    <Image className="img-fluid rounded" src="/images/carousel/carousel-2.jpg" width="150" height="150" alt="brand-logo" />
                                </div>

                                <div className="brand-logo">
                                    <Image className="img-fluid rounded" src="/images/carousel/carousel-3.jpg" width="150" height="150" alt="brand-logo" />
                                </div>

                                <div className="brand-logo">
                                    <Image className="img-fluid rounded" src="/images/carousel/carousel-4.jpg" width="150" height="150" alt="brand-logo" />
                                </div>

                                <div className="brand-logo">
                                    <Image className="img-fluid rounded" src="/images/carousel/carousel-5.jpg" width="150" height="150" alt="brand-logo" />
                                </div>

                                <div className="brand-logo">
                                    <Image className="img-fluid rounded" src="/images/carousel/carousel-6.jpg" width="150" height="150" alt="brand-logo" />
                                </div>

                                <div className="brand-logo">
                                    <Image className="img-fluid rounded" src="/images/carousel/carousel-7.jpg" width="150" height="150" alt="brand-logo" />
                                </div>

                                <div className="brand-logo">
                                    <Image className="img-fluid rounded" src="/images/carousel/carousel-8.jpg" width="150" height="150" alt="brand-logo" />
                                </div>

                                <div className="brand-logo">
                                    <Image className="img-fluid rounded" src="/images/carousel/carousel-9.jpg" width="150" height="150" alt="brand-logo" />
                                </div>

                                <div className="brand-logo">
                                    <Image className="img-fluid rounded" src="/images/carousel/carousel-10.jpg" width="150" height="150" alt="brand-logo" />
                                </div>

                                <div className="brand-logo">
                                    <Image className="img-fluid rounded" src="/images/carousel/carousel-11.jpg" width="150" height="150" alt="brand-logo" />
                                </div>

                                <div className="brand-logo">
                                    <Image className="img-fluid rounded" src="/images/carousel/carousel-12.jpg" width="150" height="150" alt="brand-logo" />
                                </div>

                                <div className="brand-logo">
                                    <Image className="img-fluid rounded" src="/images/carousel/carousel-13.jpg" width="150" height="150" alt="brand-logo" />
                                </div>

                                <div className="brand-logo">
                                    <Image className="img-fluid rounded" src="/images/carousel/carousel-14.jpg" width="150" height="150" alt="brand-logo" />
                                </div>

                                <div className="brand-logo">
                                    <Image className="img-fluid rounded" src="/images/carousel/carousel-15.jpg" width="150" height="150" alt="brand-logo" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <section id="about-2" className="bg-color-01 wide-70 about-section division">
                    <div className="container">
                        <div className="row d-flex align-items-center m-row">

                            <div className="col-md-7 col-lg-6 m-top">
                                <div className="txt-block left-column pc-15 mb-40">

                                    <h2 className="section-id text-lowercase txt-color-02">SLAVIC HAIR IS THE MOST POPULAR TYPE OF HAIR IN THE WORLD. MILLIONS OF CUSTOMERS IN EUROPE AND THE UNITED STATES DREAM OF RUSSIAN HAIR EXTENSIONS.</h2>

                                    <h4 className="h3-md txt-color-01">CHARM HAIR COMPANY.<br />RUSSIAN HAIR EXTENSIONS SUPPLIERS.</h4>

                                    <p className="txt-color-05">Charm Hair is one of the leaders in market for selling REAL <b>raw virgin hair</b>. Our employees make various products from them. We are based in Ukraine, work directly with donors and collect Slavic hair, which we inspect to ensure the best quality possible. If you need a direct <b>Russian hair extensions supplier</b> of quality goods, without second-hand dealers, then our company is exactly what you were looking for.</p>
                                    <p className="txt-color-05">We are professionals and have high qualifications and years of experience, regularly cooperate with leading European companies and master new advanced techniques of working with material. Customers around the world have already appreciated quality of our work. We work with customers from England, France, Italy, Poland, USA and many other countries.</p>

                                </div>
                            </div>

                            <div className="col-md-5 col-lg-6 m-bottom overflow-hidden">
                                <div className="img-block right-column pc-15 mb-40 position-relative">

                                    <div className="bg-color-02 rounded p-3 position-absolute shadow" data="width: 55%;">
                                        <Image className="img-fluid rounded" src="/images/section-1_1.jpg" width="500" height="500" alt="about-image" />
                                    </div>

                                    <div className="bg-color-02 rounded p-3 position-absolute shadow" data="right: 18%;z-index: 10;bottom: 0;width:65%">
                                        <Image className="img-fluid rounded" src="/images/section-1_2.jpg" width="500" height="500" alt="about-image" />
                                    </div>

                                    <div className="bg-color-02 rounded p-3 position-absolute shadow" data="top: 15%;right: 0;z-index: 20;width: 60%">
                                        <Image className="img-fluid rounded" src="/images/section-1_3.jpg" width="500" height="500" alt="about-image" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="services-1" className="bg-color-02 wide-60 services-section division">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="section-title mb-60 text-center">

                                    <h2 className="tra-header txt-color-02">Feel Special</h2>

                                    <h3 className="h3-xl txt-color-01">Making You More Stylish</h3>

                                    <p className="p-lg txt-color-05">There are a lot of the advantages of cooperation with our company.<br />Let’s see the most important:</p>

                                </div>
                            </div>
                        </div>

                        <div className="sbox-1-wrapper">
                            <div className="row">

                                <div className="col-md-4">
                                    <div className="sbox-1">

                                        <Image className="img-fluid shadow border border-5 w-75" src="/images/section-2_1.jpg" width="400" height="400" data="border-radius: 50%;" alt="service-image" />

                                        <h5 className="h5-md txt-color-01">Aromatherapy</h5>

                                        <p className="txt-color-05">One of the most important pluses is working only with non-mixed strands. Our principle - one person - one <b>bulk hair</b>. Therefor, we achieve a homogeneous structure of material, our goods are exclusively <b>remy hair extensions</b>. As a result, we get a combed quality cut hair that fully complies with the world standards and is ready to hair extension or manufacture products.</p>

                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="sbox-1">

                                        <Image className="img-fluid shadow border border-5 w-75" src="/images/section-2_2.jpg" width="400" height="400" data="border-radius: 50%;" alt="service-image" />

                                        <h5 className="h5-md txt-color-01">Relax</h5>

                                        <p className="txt-color-05">Second important point is using only natural materials when processing. Employees disinfect strands and prepare for sale with our own technology, without using silicone and other harmful ingredients. For this reason, your hairstyle will look attractive for many years.</p>

                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="sbox-1">

                                        <Image className="img-fluid shadow border border-5 w-75" src="/images/section-2_3.jpg" width="400" height="400" data="border-radius: 50%;" alt="service-image" />

                                        <h5 className="h5-md txt-color-01">Massage</h5>

                                        <p className="txt-color-05">Third, what separates us from other companies? It is material that is collected from donors. It must intact, healthy, with perfect structure. Subsequently, you get a product that does not have damaged scales and looks real on the clients head.</p>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                <section id="about-6" className="bg-01 about-section division">
                    <div className="container">
                        <div className="row d-flex align-items-center">

                            <div className="col-md-7 col-lg-6">
                                <div className="txt-block">

                                    <h3 className="h3-lg txt-color-01">MAIN VIRGIN SHADES. EXCLUSIVE BLOND.</h3>

                                    <p className="p-xl txt-color-01">A great advantage of our company is a wide choice of various shades of strands. There is an opportunity to choose from the main <b>virgin shades</b> - this is:</p>

                                    <ul className="pricing-list">

                                        <li className="pricing-list-txt">
                                            <h5 className="h5-md txt-color-01">5 / 0</h5>
                                            <h4 className="h4-xs pricing-list-amount txt-color-01">dark brown</h4>
                                        </li>

                                        <li className="pricing-list-txt">
                                            <h5 className="h5-md txt-color-01">6 / 0</h5>
                                            <h4 className="h4-xs pricing-list-amount txt-color-01">medium brown</h4>
                                        </li>

                                        <li className="pricing-list-txt">
                                            <h5 className="h5-md txt-color-01">7 / 0</h5>
                                            <h4 className="h4-xs pricing-list-amount txt-color-01">light brown</h4>
                                        </li>

                                        <li className="pricing-list-txt">
                                            <h5 className="h5-md txt-color-01">8 / 0</h5>
                                            <h4 className="h4-xs pricing-list-amount txt-color-01">dark brown</h4>
                                        </li>

                                        <li className="pricing-list-txt">
                                            <h5 className="h5-md txt-color-01">9 / 0</h5>
                                            <h4 className="h4-xs pricing-list-amount txt-color-01">blond</h4>
                                        </li>

                                    </ul>

                                </div>
                            </div>

                            <div className="col-md-5 col-lg-6">
                                <div className="about-6-img">
                                    <Image className="img-fluid w-100" src="/images/section-3.jpg" width="400" height="400" alt="about-image" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="bg-color-01 wide-70 about-section division">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="section-title mb-60 text-center">

                                    <h2 className="tra-header txt-color-02">Charm Hair</h2>

                                    <h3 className="h3-xl txt-color-01">Hair Extensions Manufacture</h3>

                                </div>
                            </div>
                        </div>

                        <div className="row d-flex align-items-center m-row">

                            <div className="col-md-5 col-lg-6 m-bottom">
                                <div className="d-flex img-block light-column pc-15 mb-40">

                                    <div className="bg-color-06 me-3 p-3 shadow rounded overflow-hidden col-6 col-lg-4">
                                        <div className="overflow-hidden">
                                            <Image src="/images/section-1_1.jpg" width="400" height="400" alt="about-image" />
                                        </div>
                                    </div>

                                    <div className="bg-color-06 me-3 p-3 shadow rounded overflow-hidden col-6 col-lg-4 position-relative" data="top: 40px">
                                        <div className="overflow-hidden">
                                            <Image src="/images/section-1_1.jpg" width="400" height="400" alt="about-image" />
                                        </div>
                                    </div>

                                    <div className="bg-color-06 p-3 shadow rounded overflow-hidden d-none d-lg-block col-lg-4 position-relative" data="top: -20px">
                                        <div className="overflow-hidden">
                                            <Image src="/images/section-1_1.jpg" width="400" height="400" alt="about-image" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-7 col-lg-6 m-bottom">
                                <div className="txt-block left-column pc-15 mb-40">

                                    <p className="txt-color-05">Charm Hair company not only sells first-class materials, but also independently produces products from it. We are confident that you will be able to appreciate our <b>wigs and ponytails, wefts,</b> which are created by machine or handtied, hair on barrettes and ribbons, individual strands for hair extension.</p>
                                    <p className="txt-color-05">The entire production process takes place at our manufacture facilities. For production of goods, we have created our own <b>hair extensions manufacture,</b> which meets the highest quality standards and meets all correct and fair regulations. The best equipment, from miniature sewing needles to professional machines, which allows us to create a truly exclusive product! We are ready to offer clients our amazing bundles and many other interesting products - <b>full lace wigs, lace closure, lace front wigs, topper made with silk , mono top ...</b></p>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="team-1" className="bg-color-06 wide-60 team-section division">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="section-title mb-60 text-center">

                                    <h2 className="tra-header txt-color-02">Charm Hair</h2>

                                    <h3 className="h3-xl txt-color-01">About hand tied wefts</h3>

                                    <p className="p-lg txt-color-05">The service of making <b>wefts</b> is very popular among our customers. This is quite a complicated job, which requires high qualification, as well as taking into account all requirements of customer. For example, some of our partners prefer dense thick wefts, about 50 grams in one <b>hand tied weft</b> (such products are mainly shipped to the UK). For customers from the United States we selected fine tresses, which are ideal for the producing hairpieces and wigs. Our specialists are able to fulfill any of your requirements. The advantage of our hand tied wefts is the hair does not shed.</p>

                                </div>
                            </div>
                        </div>

                        <div className="tm-wrapper">
                            <div className="row">

                                <div className="col-6 col-md-6 col-lg-3">
                                    <div className="team-member">

                                        <div className="team-member-photo">
                                            <div className="hover-overlay">

                                                <Image className="img-fluid rounded" src="/images/section-4_1.jpg" width="400" height="400" alt="team-member-foto" />

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-6 col-md-6 col-lg-3">
                                    <div className="team-member">

                                        <div className="team-member-photo">
                                            <div className="hover-overlay">

                                                <Image className="img-fluid rounded" src="/images/section-4_2.jpg" width="400" height="400" alt="team-member-foto" />

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-6 col-md-6 col-lg-3">
                                    <div className="team-member">

                                        <div className="team-member-photo">
                                            <div className="hover-overlay">

                                                <Image className="img-fluid rounded" src="/images/section-4_3.jpg" width="400" height="400" alt="team-member-foto" />

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-6 col-md-6 col-lg-3">
                                    <div className="team-member">

                                        <div className="team-member-photo">
                                            <div className="hover-overlay">

                                                <Image className="img-fluid rounded" src="/images/section-4_4.jpg" width="400" height="400" alt="team-member-foto" />

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                <footer id="footer-4" className="bg-color-01 footer division">
                    <div className="container">

                        <div className="row">

                            <div className="col-md-5 col-lg-4">
                                <div className="footer-info mb-40">

                                    <Image src="/images/logo-01.png" width="204" height="60" alt="footer-logo" />

                                    <p className="txt-color-05 mt-20">Aliquam nullam tempor sapien at gravida donec congue ipsum a porta magna and
                                        justo velna auctor sapien and augue
                                    </p>

                                </div>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3">
                                <div className="footer-contacts mb-40">

                                    <h6 className="h6-lg txt-color-01">Lets Talk</h6>

                                    <p className="txt-color-05">121 King Street, Melbourne,</p>
                                    <p className="txt-color-05">Victoria 3000 Australia</p>

                                    <div className="txt-color-05 mt-15">

                                        <p className="foo-email">E: <a href="mailto:yourdomain@mail.com">hello@yourdomain.com</a></p>

                                        <p>Phone: +12 9 8765 4321</p>
                                        <p>Skype : <a href="tel:123456789">support.spamagic</a></p>

                                    </div>

                                </div>
                            </div>

                            <div className="col-md-3 col-lg-2">
                                <div className="footer-links mb-40">

                                    <h6 className="h6-lg txt-color-01">Quick Links</h6>

                                    <ul className="txt-color-05 clearfix">
                                        <li>
                                            <p><a href="demo-7.html#">About Us</a></p>
                                        </li>
                                        <li>
                                            <p><a href="demo-7.html#">Advertising</a></p>
                                        </li>
                                        <li>
                                            <p><a href="demo-7.html#">Help & FAQs</a></p>
                                        </li>
                                        <li>
                                            <p><a href="demo-7.html#">Appointments</a></p>
                                        </li>
                                        <li>
                                            <p><a href="demo-7.html#">Gift Cards</a></p>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className="col-md-12 col-lg-3">
                                <div className="footer-img mb-40">

                                    <h6 className="h6-lg txt-color-01">Instagram</h6>

                                    <ul className="text-center clearfix">
                                        <li><a href="demo-7.html#" target="_blank"><Image className="insta-img" src="/images/instagram/img-01.jpg" width="100" height="100" alt="insta-img" /></a></li>
                                        <li><a href="demo-7.html#" target="_blank"><Image className="insta-img" src="/images/instagram/img-02.jpg" width="100" height="100" alt="insta-img" /></a></li>
                                        <li><a href="demo-7.html#" target="_blank"><Image className="insta-img" src="/images/instagram/img-03.jpg" width="100" height="100" alt="insta-img" /></a></li>
                                        <li><a href="demo-7.html#" target="_blank"><Image className="insta-img" src="/images/instagram/img-04.jpg" width="100" height="100" alt="insta-img" /></a></li>
                                        <li><a href="demo-7.html#" target="_blank"><Image className="insta-img" src="/images/instagram/img-05.jpg" width="100" height="100" alt="insta-img" /></a></li>
                                        <li><a href="demo-7.html#" target="_blank"><Image className="insta-img" src="/images/instagram/img-06.jpg" width="100" height="100" alt="insta-img" /></a></li>
                                    </ul>

                                </div>
                            </div>

                        </div>

                        <div className="bottom-footer txt-color-05">
                            <div className="row d-flex align-items-center">

                                <div className="col-lg-6">
                                    <div className="footer-copyright">
                                        <p>&copy; 2020 Spa Magic. All Rights Reserved</p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <ul className="bottom-footer-list text-right clearfix">
                                        <li>
                                            <p className="first-list-link"><a href="demo-7.html#"><i className="fab fa-facebook-f"></i> Facebook</a></p>
                                        </li>
                                        <li>
                                            <p><a href="demo-7.html#"><i className="fab fa-twitter"></i> Twitter</a></p>
                                        </li>
                                        <li>
                                            <p><a href="demo-7.html#"><i className="fab fa-instagram"></i> Instagram</a></p>
                                        </li>
                                        <li>
                                            <p className="last-li"><a href="demo-7.html#"><i className="fab fa-yelp"></i> Yelp</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Layout;