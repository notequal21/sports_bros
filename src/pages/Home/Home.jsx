import { ImgWebp } from '@helpers/imgwebp';
import style from './Home.module.scss';
import { useRef } from 'react';
import './Slider.scss';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';

import mainBg from '@img/main/bg.png';
import mainBg2x from '@img/main/bg@2x.png';
import mainBgWebp from '@img/main/bg.webp';
import mainPhone from '@img/main/phone.png';
import mainPhone2x from '@img/main/phone@2x.png';
import mainPhoneWebp from '@img/main/phone.webp';
import logo from '@img/logo.png';
import logo2x from '@img/logo@2x.png';
import logoWebp from '@img/logo.webp';
import google from '@img/main/google.png';
import google2x from '@img/main/google@2x.png';
import googleWebp from '@img/main/google.webp';
import apple from '@img/main/apple.png';
import apple2x from '@img/main/apple@2x.png';
import appleWebp from '@img/main/apple.webp';
import nfl from '@img/featured/nfl.png';
import nfl2x from '@img/featured/nfl@2x.png';
import nflWebp from '@img/featured/nfl.webp';
import nba from '@img/featured/nba.png';
import nba2x from '@img/featured/nba@2x.png';
import nbaWebp from '@img/featured/nba.webp';
import mlb from '@img/featured/mlb.png';
import mlb2x from '@img/featured/mlb@2x.png';
import mlbWebp from '@img/featured/mlb.webp';
import nhl from '@img/featured/nhl.png';
import nhl2x from '@img/featured/nhl@2x.png';
import nhlWebp from '@img/featured/nhl.webp';
import cfb from '@img/featured/cfb.png';
import cfb2x from '@img/featured/cfb@2x.png';
import cfbWebp from '@img/featured/cfb.webp';
import featuredBg from '@img/featured/bg.png';
import featuredBg2x from '@img/featured/bg@2x.png';
import featuredBgWebp from '@img/featured/bg.webp';
import featuredImg from '@img/featured/img.png';
import featuredImg2x from '@img/featured/img@2x.png';
import featuredImgWebp from '@img/featured/img.webp';
import featuresBg from '@img/features/bg.png';
import featuresBg2x from '@img/features/bg@2x.png';
import featuresBgWebp from '@img/features/bg.webp';
import featuresImg01 from '@img/features/img01.png';
import featuresImg01_2x from '@img/features/img01@2x.png';
import featuresImg01Webp from '@img/features/img01.webp';
import featuresImg01Sub from '@img/features/subimg01.svg';
import featuresImg02 from '@img/features/img02.png';
import featuresImg02_2x from '@img/features/img02@2x.png';
import featuresImg02Webp from '@img/features/img02.webp';
import featuresImg02Sub from '@img/features/subimg02.png';
import featuresImg02Sub2x from '@img/features/subimg02@2x.png';
import featuresImg02SubWebp from '@img/features/subimg02.webp';
import reviewsBg from '@img/reviews/bg.png';
import reviewsBg2x from '@img/reviews/bg@2x.png';
import reviewsBgWebp from '@img/reviews/bg.webp';
import avatar01 from '@img/reviews/avatar01.png';
import avatar01_2x from '@img/reviews/avatar01@2x.png';
import avatar01Webp from '@img/reviews/avatar01.webp';
import avatar02 from '@img/reviews/avatar02.png';
import avatar02_2x from '@img/reviews/avatar02@2x.png';
import avatar02Webp from '@img/reviews/avatar02.webp';
import avatar03 from '@img/reviews/avatar03.png';
import avatar03_2x from '@img/reviews/avatar03@2x.png';
import avatar03Webp from '@img/reviews/avatar03.webp';
import starSvg from '@img/icons/star.svg';
import arrowSvg from '@img/icons/arrow';
import quoteSvg from '@img/icons/quote.svg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <MainSection />
      <FeaturedSection />
      <FeaturesSection />
      <ReviewsSection />
    </>
  );
};

const MainSection = () => {
  return (
    <main className={style.main}>
      <div className={style.main__bg}>
        <div className={`${style.cont} container`}></div>
        <ImgWebp src={mainBg} src2x={mainBg2x} srcWebp={mainBgWebp} />
      </div>
      <div className={`${style.con} container`}>
        <div className={style.mainBody}>
          <div className={style.mainBody__content}>
            <div className={style.mainBody__logo}>
              <ImgWebp src={logo} src2x={logo2x} srcWebp={logoWebp} />
              <span>SPORTS BROS</span>
            </div>
            <div className={`${style.mainBody__title} title title_xl`}>
              Play Your <span>Game</span> <br /> Play With Us
            </div>
            <div className={`${style.mainBody__text} text text_md`}>
              Lorem ipsum dolor sit amet consectetur. Interdum ut lorem morbi
              porttitor amet suspendisse. Sed nec risus mattis egestas
              vestibulum tellus tellus.
            </div>
            <div className={style.mainBody__download}>
              <a href='./' className={style.mainBody__downloadItem}>
                <ImgWebp src={google} src2x={google2x} srcWebp={googleWebp} />
              </a>
              <a href='./' className={style.mainBody__downloadItem}>
                <ImgWebp src={apple} src2x={apple2x} srcWebp={appleWebp} />
              </a>
            </div>
            <div className={style.mainBody__privacy}>
              or see
              <Link to={'policy'} className='link'>
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className={style.mainBody__img}>
            <ImgWebp
              src={mainPhone}
              src2x={mainPhone2x}
              srcWebp={mainPhoneWebp}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

const FeaturedSection = () => {
  return (
    <section className={style.featured} id='games'>
      <div className={style.featured__bg}>
        <ImgWebp
          src={featuredBg}
          src2x={featuredBg2x}
          srcWebp={featuredBgWebp}
        />
      </div>
      <div className='container'>
        <div
          className={`${style.featured__title} title title_sm title_section _right`}
        >
          Featured Games
        </div>
        <div className={style.featuredTop}>
          <div className={style.featuredTop__item}>
            <div className={style.featuredTop__itemImg}>
              <ImgWebp src={nfl} src2x={nfl2x} srcSet={nflWebp} />
            </div>
            <div className={`${style.featuredTop__itemName} ${style.active}`}>
              NFL
            </div>
          </div>
          <div className={style.featuredTop__item}>
            <div className={style.featuredTop__itemImg}>
              <ImgWebp src={nba} src2x={nba2x} srcSet={nbaWebp} />
            </div>
            <div className={`${style.featuredTop__itemName}`}>NBA</div>
          </div>
          <div className={style.featuredTop__item}>
            <div className={style.featuredTop__itemImg}>
              <ImgWebp src={mlb} src2x={mlb2x} srcSet={mlbWebp} />
            </div>
            <div className={`${style.featuredTop__itemName}`}>MLB</div>
          </div>
          <div className={style.featuredTop__item}>
            <div className={style.featuredTop__itemImg}>
              <ImgWebp src={nhl} src2x={nhl2x} srcSet={nhlWebp} />
            </div>
            <div className={`${style.featuredTop__itemName}`}>NHL</div>
          </div>
          <div className={style.featuredTop__item}>
            <div className={style.featuredTop__itemImg}>
              <ImgWebp src={cfb} src2x={cfb2x} srcSet={cfbWebp} />
            </div>
            <div className={`${style.featuredTop__itemName}`}>CFB</div>
          </div>
        </div>
        <div className={style.featuredBody}>
          <div className={style.featuredBody__img}>
            <ImgWebp
              src={featuredImg}
              src2x={featuredImg2x}
              srcWebp={featuredImgWebp}
            />
          </div>
          <div className={style.featuredBody__text}>
            <div className={`${style.featuredBody__textTitle} title title_sm`}>
              National Football League (NFL)
            </div>
            <div className={`${style.featuredBody__textContent} text text_md`}>
              <p>
                The National Football League (NFL) is a professional American
                football league that consists of 32 teams, divided equally
                between the American Football Conference (AFC) and the National
                Football Conference (NFC).
              </p>
              <p>
                The NFL is one of the major professional sports leagues in the
                United States and Canada and the highest professional level of
                American football in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  return (
    <div className={style.features} id='features'>
      <div className={style.features__bg}>
        <ImgWebp
          src={featuresBg}
          src2x={featuresBg2x}
          srcWebp={featuresBgWebp}
        />
      </div>
      <div className='container'>
        <div
          className={`${style.features__title} title title_md title_section`}
        >
          Features
        </div>
        <div className={style.featuresBody}>
          <div className={style.featuresBody__item}>
            <div className={style.featuresBody__text}>
              <div
                className={`${style.featuresBody__textTitle} title title_sm`}
              >
                Bet On Your Favorite Team 👑
              </div>
              <div className={`${style.featuresBody__textText} text text_md`}>
                Show support for the teams you love by betting on them to win!
              </div>
            </div>
            <div className={style.featuresBody__img}>
              <div className={style.featuresBody__imgItem}>
                <ImgWebp
                  src={featuresImg01}
                  src2x={featuresImg01_2x}
                  srcWebp={featuresImg01Webp}
                />
              </div>
              <div className={style.featuresBody__imgSub}>
                <img src={featuresImg01Sub} alt='' />
              </div>
            </div>
          </div>
          <div className={style.featuresBody__item}>
            <div className={style.featuresBody__text}>
              <div
                className={`${style.featuresBody__textTitle} title title_sm`}
              >
                Trash Talk with Your Friends 😈
              </div>
              <div className={`${style.featuresBody__textText} text text_md`}>
                Have fun with your friends by talking about your favorite teams,
                players and matchups!
              </div>
            </div>
            <div className={style.featuresBody__img}>
              <div className={style.featuresBody__imgItem}>
                <ImgWebp
                  src={featuresImg02}
                  src2x={featuresImg02_2x}
                  srcWebp={featuresImg02Webp}
                />
              </div>
              <div className={style.featuresBody__imgSub}>
                <ImgWebp
                  src={featuresImg02Sub}
                  src2x={featuresImg02Sub2x}
                  srcWebp={featuresImg02SubWebp}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className={style.reviews} id='reviews'>
      <div className={style.reviews__bg}>
        <ImgWebp src={reviewsBg} src2x={reviewsBg2x} srcWebp={reviewsBgWebp} />
      </div>
      <div className='container'>
        <div
          className={`${style.reviews__title} title title_md  title_section`}
        >
          What Are People Saying
        </div>
        <div className={style.reviewsBody}>
          <div className={style.reviewsBody__list}>
            <div className={style.reviewsBody__listQuote}>
              <img src={quoteSvg} alt='' />
            </div>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={8}
              slidesPerView={'auto'}
              watchSlidesProgress={true}
              direction='vertical'
              modules={[Navigation, Thumbs]}
              className='mySwiper'
              llowTouchMove={false}
              cssMode={true}
            >
              <SwiperSlide>
                <div className={style.reviewsBody__item}>
                  <div className={style.reviewsBody__itemAvatar}>
                    <ImgWebp
                      src={avatar01}
                      src2x={avatar01_2x}
                      srcWebp={avatar01Webp}
                    />
                  </div>
                  <div className={style.reviewsBody__itemText}>
                    <div
                      className={`${style.reviewsBody__itemName} title title_xs title_polysans`}
                    >
                      Arlene McCoy
                    </div>
                    <div
                      className={`${style.reviewsBody__itemPos} text text_sm`}
                    >
                      Jacksonville Jaguars Fans
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.reviewsBody__item}>
                  <div className={style.reviewsBody__itemAvatar}>
                    <ImgWebp
                      src={avatar02}
                      src2x={avatar02_2x}
                      srcWebp={avatar02Webp}
                    />
                  </div>
                  <div className={style.reviewsBody__itemText}>
                    <div
                      className={`${style.reviewsBody__itemName} title title_xs title_polysans`}
                    >
                      Albert Flores
                    </div>
                    <div
                      className={`${style.reviewsBody__itemPos} text text_sm`}
                    >
                      Phoenix Sans Fans
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.reviewsBody__item}>
                  <div className={style.reviewsBody__itemAvatar}>
                    <ImgWebp
                      src={avatar03}
                      src2x={avatar03_2x}
                      srcWebp={avatar03Webp}
                    />
                  </div>
                  <div className={style.reviewsBody__itemText}>
                    <div
                      className={`${style.reviewsBody__itemName} title title_xs title_polysans`}
                    >
                      Leslie Alexander{' '}
                    </div>
                    <div
                      className={`${style.reviewsBody__itemPos} text text_sm`}
                    >
                      Golden State Warriors Fans
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={style.reviewsBody__content}>
            <div ref={navigationPrevRef} className={style.reviewsBody__navPrev}>
              {arrowSvg()}
            </div>
            <Swiper
              spaceBetween={25}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Thumbs]}
              className={style.swiper}
              grabCursor
            >
              <SwiperSlide>
                <div className={style.review}>
                  <div className={style.reviewsBody__item}>
                    <div className={style.reviewsBody__itemAvatar}>
                      <ImgWebp
                        src={avatar01}
                        src2x={avatar01_2x}
                        srcWebp={avatar01Webp}
                      />
                    </div>
                    <div className={style.reviewsBody__itemText}>
                      <div
                        className={`${style.reviewsBody__itemName} title title_xs title_polysans`}
                      >
                        Arlene McCoy
                      </div>
                      <div
                        className={`${style.reviewsBody__itemPos} text text_sm`}
                      >
                        Jacksonville Jaguars Fans
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${style.review__title} title title_xs title_polysans`}
                  >
                    I was really impressed with the experience.
                  </div>
                  <div className={style.reviewRating}>
                    <div className={style.reviewRating__item}>
                      <img src={starSvg} alt='' />
                    </div>
                    <div className={style.reviewRating__item}>
                      <img src={starSvg} alt='' />
                    </div>
                    <div className={style.reviewRating__item}>
                      <img src={starSvg} alt='' />
                    </div>
                    <div className={style.reviewRating__item}>
                      <img src={starSvg} alt='' />
                    </div>
                    <div className={style.reviewRating__item}>
                      <img src={starSvg} alt='' />
                    </div>
                  </div>
                  <div className={`${style.review__text} text text_md`}>
                    I recently tried out Sports Bros and overall I really like
                    it. The app was easy to navigate and had a clean,
                    user-friendly interface. The live betting feature was
                    especially useful, allowing me to place bets on matches as
                    they were happening in real-time.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.review}>
                  <div className={style.reviewsBody__item}>
                    <div className={style.reviewsBody__itemAvatar}>
                      <ImgWebp
                        src={avatar02}
                        src2x={avatar02_2x}
                        srcWebp={avatar02Webp}
                      />
                    </div>
                    <div className={style.reviewsBody__itemText}>
                      <div
                        className={`${style.reviewsBody__itemName} title title_xs title_polysans`}
                      >
                        Albert Flores
                      </div>
                      <div
                        className={`${style.reviewsBody__itemPos} text text_sm`}
                      >
                        Phoenix Sans Fans
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${style.review__title} title title_xs title_polysans`}
                  >
                    I was really impressed with the experience.
                  </div>
                  <div className={style.reviewRating}>
                    <div className={style.reviewRating__item}>
                      <img src={starSvg} alt='' />
                    </div>
                    <div className={style.reviewRating__item}>
                      <img src={starSvg} alt='' />
                    </div>
                    <div className={style.reviewRating__item}>
                      <img src={starSvg} alt='' />
                    </div>
                    <div className={style.reviewRating__item}>
                      <img src={starSvg} alt='' />
                    </div>
                    <div className={style.reviewRating__item}>
                      <img src={starSvg} alt='' />
                    </div>
                  </div>
                  <div className={`${style.review__text} text text_md`}>
                    I recently tried out Sports Bros and overall I really like
                    it. The app was easy to navigate and had a clean,
                    user-friendly interface. The live betting feature was
                    especially useful, allowing me to place bets on matches as
                    they were happening in real-time.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.review}>
                  <div className={style.reviewsBody__item}>
                    <div className={style.reviewsBody__itemAvatar}>
                      <ImgWebp
                        src={avatar03}
                        src2x={avatar03_2x}
                        srcWebp={avatar03Webp}
                      />
                    </div>
                    <div className={style.reviewsBody__itemText}>
                      <div
                        className={`${style.reviewsBody__itemName} title title_xs title_polysans`}
                      >
                        Leslie Alexander{' '}
                      </div>
                      <div
                        className={`${style.reviewsBody__itemPos} text text_sm`}
                      >
                        Golden State Warriors Fans
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${style.review__title} title title_xs title_polysans`}
                  >
                    I was really impressed with the experience.
                  </div>
                  <div className={style.reviewRating}>
                    <div className={style.reviewRating__item}>
                      <img src={starSvg} alt='' />
                    </div>
                    <div className={style.reviewRating__item}>
                      <img src={starSvg} alt='' />
                    </div>
                    <div className={style.reviewRating__item}>
                      <img src={starSvg} alt='' />
                    </div>
                    <div className={style.reviewRating__item}>
                      <img src={starSvg} alt='' />
                    </div>
                    <div className={style.reviewRating__item}>
                      <img src={starSvg} alt='' />
                    </div>
                  </div>
                  <div className={`${style.review__text} text text_md`}>
                    I recently tried out Sports Bros and overall I really like
                    it. The app was easy to navigate and had a clean,
                    user-friendly interface. The live betting feature was
                    especially useful, allowing me to place bets on matches as
                    they were happening in real-time.
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div ref={navigationNextRef} className={style.reviewsBody__navNext}>
              {arrowSvg()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
