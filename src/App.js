import './styles.scss'
import './font.css';
import first from './img/first.svg'
import house from './img/house.svg'
import arrow from './img/arrow.svg'
import arrowLight from './img/arrowLight.svg'
import arrowLeft from './img/arrowLeft.svg'
import firstBuild from './img/firstBuild.svg'
import secondBuild from './img/secondBuild.svg'
import thirdBuild from'./img/thirdBuild.svg'
import one from './img/one.svg'
import two from './img/two.svg'
import man from './img/man.svg'
import enter from './img/enter.svg'
import logoLignt from './img/logoLight.svg'
import phone from './img/phone.svg'
import geo from './img/geo.svg'
import mail from './img/mail.svg'
import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'
import linkedin from './img/linkedin.svg'
import pinterest from './img/pinterest.svg'
import menuPhoto from './img/menuPhoto.svg'
import firstProj from './img/firstProj.svg'
import secondProj from './img/secondProj.svg'
import thirdProj from './img/thirdProj.svg'
import fourthProj from './img/fourthProj.svg'
import fifthProj from './img/fifthProj.svg'
import text from './img/text.svg'
import home from './img/home.svg'
import {useState, useEffect, useRef} from 'react'

function App() {

  const [openMobMenu, setOpenMobMenu] = useState(true);
  const [mobMenu, setMobMenu] = useState(false);
  const [page, setPage] = useState('ГЛАВНАЯ');
  const [showImages, setShowImages] = useState(false);
  const [nubmer, setNumber] = useState('');
  const [email, setEmail] = useState('')
  const [addInfo, setAddInfo] = useState('')

  const secondBlockRef = useRef(null);

  const open = () => {
    setOpenMobMenu(false)
    setMobMenu(true)
  }

  const close = () => {
    setOpenMobMenu(true)
    setMobMenu(false)
  }

  const click = (e) => {
    e.preventDefault();
    const getText = e.target.textContent;
    setPage(getText);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const secondBlockTop = secondBlockRef.current.getBoundingClientRect().top;

      if (scrollPosition >= secondBlockTop - windowHeight / 1.5) {
        setShowImages(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const Phone = (e) => {
    const phoneNumber = e.target.value;
    const cleanedPhoneNumber = phoneNumber.replace(/\+\D/g, '');
    setNumber(cleanedPhoneNumber);
  };

  const Mail = (e) => {
    const emailValue = e.target.value;
    const cleanedEmailValue = emailValue.replace(/[^a-zA-Z0-9\-._@]/g, '');
    setEmail(cleanedEmailValue);
  };

  return (
    <>
      <div className='wrapper'>
        <header>
          <div className='block-img'>
            <img src={first}></img>
          </div>
          <div className='navigation-menu'>
            <div className='navigation-menu__menu'>
              <p className={`navigation-menu__menu__link ${page === 'ГЛАВНАЯ' ? 'active' : ''}`} onClick={click}>ГЛАВНАЯ</p>
              <p className={`navigation-menu__menu__link ${page === 'ГАЛЕРЕЯ' ? 'active' : ''}`} onClick={click}>ГАЛЕРЕЯ</p>
              <p className={`navigation-menu__menu__link ${page === 'ПРОЕКТЫ' ? 'active' : ''}`} onClick={click}>ПРОЕКТЫ</p>
              <p className={`navigation-menu__menu__link ${page === 'СЕРТИФИКАТЫ' ? 'active' : ''}`} onClick={click}>СЕРТИФИКАТЫ</p>
              <p className={`navigation-menu__menu__link ${page === 'КОНТАКТЫ' ? 'active' : ''}`} onClick={click}>КОНТАКТЫ</p>
            </div>
            {openMobMenu && (
              <div onClick={open} className='navigation-menu__tablet-mob'>
                <div></div>
              </div>
            )}
          </div>
          {mobMenu && (
            <div className='open-menu'>
              <div onClick={close} className='open-menu__close'>X</div>
              <div className='open-menu__content'>
                <p className={`open-menu__content_link ${page === 'ГЛАВНАЯ' ? 'active' : ''}`} onClick={click}>ГЛАВНАЯ</p>
                <p className={`open-menu__content_link ${page === 'ГАЛЕРЕЯ' ? 'active' : ''}`} onClick={click}>ГАЛЕРЕЯ</p>
                <p className={`open-menu__content_link ${page === 'ПРОЕКТЫ' ? 'active' : ''}`} onClick={click}>ПРОЕКТЫ</p>
                <p className={`open-menu__content_link ${page === 'СЕРТИФИКАТЫ' ? 'active' : ''}`} onClick={click}>СЕРТИФИКАТЫ</p>
                <p className={`open-menu__content_link ${page === 'КОНТАКТЫ' ? 'active' : ''}`} onClick={click}>КОНТАКТЫ</p>
              </div>
            </div>
          )}
        </header>
        
        <section className='first-block'>
          <div className='first-block__title'>
            <div className='first-block__title_name'>
              <p className='first-block__title_name_first'>PROJECT</p>
              <img src={home} className='first-block__title_name_second'></img>
            </div>
            <div className='first-block__title_navigation'>
              <div className='first-block__title_navigation_arrowLeft'>
                <img src={arrowLeft}></img>
              </div>
              <div className='first-block__title_navigation_arrowRight'>
                <img src={arrow}></img>
              </div>
              <div className='first-block__title_navigation_line'></div>
            </div>
            <div className='first-block__title_pages'>
              <div>01</div>
              <div className='first-block__title_pages_border'></div>
              <div>02</div>
            </div>
          </div>
          <div className='first-block__img'>
            <img src={house}></img>
            <button type='submit' className='first-block__text'>
              <p>Взглянуть</p>
              <img src={arrow}></img>
            </button>
          </div>
        </section>

        <section ref={secondBlockRef} className='second-block'>
          <div className='second-block__firstImg'>
            <img
              src={firstBuild}
              style={{ animation: showImages ? 'fadeInUp 1.5s ease-in-out forwards' : 'none' }}
            />
            <img
              src={secondBuild}
              style={{ animation: showImages ? 'fadeInUp 1.5s ease-in-out forwards' : 'none' }}
            />
          </div>
          <div className='second-block__secondImg'>
            <img 
              src={thirdBuild}
              style={{ animation: showImages ? 'fadeInUp 1.5s ease-in-out forwards' : 'none' }}
            ></img>
          </div>
          <div className='second-block__text'>
            <p className='second-block__text_title'>О компании</p>
            <p className='second-block__text_description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button type='submit' className='second-block__text_button'>
              <p className='second-block__text_button_text'>ЧИТАТЬ</p>
              <img src={arrow}></img>
            </button>
          </div>
        </section>

        <section className='third-block'>
          <div className='third-block__title'>Основные задачи</div>
          <div className='third-block__task'>
            <div className='third-block__task_first'>
              <img src={one}></img>
              <p className='third-block__task_first_text'>Создание комфортных условий и повышение качества обслуживания клиентов</p>
            </div>
            <div className='third-block__task_second'>
              <img src={two}></img>
              <p className='third-block__task_second_text'>Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке</p>
            </div>
          </div>
        </section>

        <section className='fourth-block'>
        <div className='fourth-block__title'>Наши проекты</div>
        <div className='fourth-block__firstBlock'>
          <div>
            <img className='fourth-block__firstBlock_main' src={menuPhoto}></img>
            <img className='fourth-block__firstBlock_nonmain' src={firstProj}></img>
            <div className='fourth-block__firstBlock_text'>
              <img src={text}></img>
              <div className='fourth-block__firstBlock_text_link'>
                <a href='#'>подбробнее</a>
                <img src={arrowLight}></img>
              </div>
            </div>
          </div>
          <div>
            <img className='fourth-block__firstBlock_second' src={secondProj}></img>
          </div>
        </div>
        <div className='fourth-block__secondBlock'>
          <img className='fourth-block__secondBlock_one' src={thirdProj}></img>
          <img className='fourth-block__secondBlock_two' src={fourthProj}></img>
          <img className='fourth-block__secondBlock_three' src={fifthProj}></img>
        </div>
        <button className='fourth-block__btn' type='submit'>
          <p>все проекты</p>
          <img src={arrowLight}></img>
        </button>
      </section>

      <section className='fifth-block'>
        <div className='fifth-block__title'>Связаться с нами</div>
        <div className='fifth-block__form'>
          <form className='fifth-block__form_input'>
            <input placeholder='Имя' className='fifth-block__form_input_first'></input>
            <div className='fifth-block__form_input_second'>
              <input type='text' value={nubmer} onChange={Phone}></input>
              {nubmer === '' ? <p>Номер телефона<span>*</span></p> : ''}
            </div>
            <div className='fifth-block__form_input_third'>
              <input  type='email' value={email} onChange={Mail}></input>
              {email === '' ? <p>E-mail<span>*</span></p> : ''}
            </div>
            <input placeholder='Интересующий товар/услуга' className='fifth-block__form_input_fourth'></input>
            <div className='fifth-block__form_input_fifth'>
              <textarea value={addInfo} onChange={(e) => setAddInfo(e.target.value)}></textarea>
              {addInfo === '' ? <p>Сообщение<span>*</span></p> : ''}
              <img src={enter}></img>
            </div>
            <div className='fifth-block__form_input_text'>
              <p className=''>Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</p>
            </div>
            <button className='fifth-block__form_input_submit'>
              <p className='fifth-block__form_input_submit_text'>Отправить</p>
              <img src={arrowLight}></img>
            </button>
          </form>
          <div className='fifth-block__form_man'>
            <img src={man}></img>
          </div>
        </div>
      </section>

      <footer className='sixth-block'>
        <img className='sixth-block__img' src={logoLignt}></img>
        <div className='sixth-block__menu'>
          <div className='sixth-block__menu_navigation'>
            <h3>Информация</h3>
            <p>Главная</p>
            <p>Галерея</p>
            <p>Проекты</p>
            <p>Сертификаты</p>
            <p>Контакты</p>
          </div>
          <div className='sixth-block__menu_contact'>
            <h3>Контакты</h3>
            <div className='sixth-block__menu_contact_geo'>
              <img src={geo}></img>
              <p>100000, Республика  Казахстан, г. Караганда, ул. Телевизионная 10</p>
            </div>
            <div className='sixth-block__menu_contact_phone'>
              <img src={phone}></img>
              <p>+38 (000) 000 00 00</p>
            </div>
            <div className='sixth-block__menu_contact_email'>
              <img src={mail}></img>
              <p>mail@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='sixth-block__menu_link'>
            <h3>Социальные сети</h3>
            <div className='sixth-block__menu_link_img'>
              <img src={facebook}></img>
              <img src={twitter}></img>
              <img src={linkedin}></img>
              <img src={pinterest}></img>
            </div>
        </div>
        <div className='sixth-block__line'></div>
        <div className='sixth-block__avtor'>© 2019 Digital Project. Все права защищены.</div>
      </footer>
      </div>
    </>
  );
}

export default App;
