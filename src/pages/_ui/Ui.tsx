import style from "./Ui.module.scss";

const UiPage = () => {
  return (
    <div className={style.ui}>
      <div className="container">
        <div className={style.uiBody}>
          <div className={style.uiBody__row}>
            <div className="title title_xl">
              Title xl with <span>span</span>
            </div>
          </div>
          <div className={style.uiBody__row}>
            <div className="title title_md">Title md: Lorem, ipsum dolor.</div>
          </div>
          <div className={style.uiBody__row}>
            <div className="title title_sm">Title sm: Lorem, ipsum dolor.</div>
          </div>
          <div className={style.uiBody__row}>
            <div className="title title_xs title_polysans">
              Title xs with polysans
            </div>
          </div>
          <div className={style.uiBody__row}>
            <div className="title title_sm title_polysans">
              Title sm with polysans
            </div>
          </div>
          <div className={style.uiBody__row}>
            <div className="title title_md title_section">Section title md</div>
          </div>
          <div className={style.uiBody__row}>
            <div className="text text_md">
              Text md: Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
          <div className={style.uiBody__row}>
            <div className="text text_sm">
              Text sm: Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
          <div className={style.uiBody__row}>
            <a href="./" className="link">
              link Lorem.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiPage;
