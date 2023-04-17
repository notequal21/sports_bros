import style from './Footer.module.scss';
import { ImgWebp } from '@helpers/imgwebp';

// imgs
import logo from '@img/logo.png';
import logo2x from '@img/logo@2x.png';
import logoWebp from '@img/logo.webp';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className='container'>
        <div className={style.footerBody}>
          <div className={style.footerBody__col}>
            <div className={style.footerBody__logo}>
              <ImgWebp src={logo} src2x={logo2x} srcWebp={logoWebp} />
              <span>SPORTS BROS</span>
            </div>
            <div className={`${style.footerBody__text} text text_sm`}>
              The Ultimate Sports Experience
            </div>
          </div>
          <div className={style.footerBody__col}>
            <div className={`${style.footerBody__colTitle}`}>Contact Us on</div>
            <div className={`${style.footerBody__colText} text text_sm`}>
              Sports Bros Holdings, LLC, 320 Gold Ave. SW Ste. 620 PMB 2502
              <br />
              <a href='mailto:General@sportsbrosapp.com'>
                General@sportsbrosapp.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
