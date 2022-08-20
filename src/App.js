import './index.css'
import logo from './images/logo.svg'
import closeIcon from './images/close-icon.svg'
import editIcon from './images/pensil-icon.svg'
import addIcon from './images/plus-icon.svg'

function App() {
  return (
    <div className="App">
      <div className="page">
        <header className="header">
          <img src={logo} className="header__logo" />
        </header>
        <main className="content">
          <section className="navigation">
            <div className="profile">
              <button
                type="button"
                aria-label="Редактировать фото профиля"
                name="edit-avatar-button"
                className="profile__edit-avatar-button responsible-fade responsible-fade_opacity_strong"
              >
                <img src="#" alt="" className="profile__avatar" />
              </button>
              <div className="profile__info">
                <div className="profile__container">
                  <h1 className="profile__name">Жак-Ив Кусто</h1>
                  <button
                    type="button"
                    aria-label="Редактировать профиль"
                    name="edit-profile-button"
                    className="profile__edit-button responsible-fade"
                  >
                    <img
                      src={editIcon}
                      alt="редактировать профиль."
                      className="profile__edit-icon"
                    />
                  </button>
                </div>
                <p className="profile__description">исследователь океана</p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Добавить ваше место"
              name="add-card-button"
              className="navigation__add-place-button responsible-fade"
            >
              <img
                src={addIcon}
                alt="добавить ваше место."
                className="navigation__add-place-icon"
              />
            </button>
          </section>
          <section className="place-cards">
            <template id="place-card-template">
              <article className="place-card">
                <button
                  className="place-card__remove-button responsible-fade"
                  type="button"
                  aria-label="Удалить карточку."
                >
                  <img
                    src="./images/trash-bin-icon.svg"
                    alt="Удалить карточку."
                    className="place-card__remove-button-icon"
                  />
                </button>
                <img src="#" alt="#" className="place-card__photo" />
                <div className="place-card__annotation">
                  <h2 className="place-card__title">#</h2>
                  <div className="place-card__like">
                    <button
                      type="button"
                      aria-label="Мне нравится"
                      className="place-card__like-button responsible-fade
                responsible-fade_opacity_medium"
                    >
                      <img
                        src="./images/like-icon.svg"
                        alt="нравится!"
                        className="place-card__like-icon"
                      />
                    </button>
                    <p
                      className="place-card__like-counter"
                      id="like-counter"
                    ></p>
                  </div>
                </div>
              </article>
            </template>
          </section>
        </main>
        <footer className="footer">
          <p className="footer__copyright">© 2020 Mesto Russia</p>
        </footer>
      </div>
      <div className="popup popup_type_edit-profile">
        <div className="popup__container">
          <h3 className="popup__title">Редактировать профиль</h3>
          <form
            className="popup__form popup__form_type_edit-profile"
            novalidate
            name="edit-profile"
          >
            <input
              type="text"
              className="popup__field popup__field_type_user-name"
              name="name"
              id="name"
              required
              minlength="2"
              maxlength="40"
            />
            <p className="name-error popup__input-error popup__input-error_type_user-name"></p>
            <input
              type="text"
              className="popup__field popup__field_type_user-description"
              id="about"
              name="about"
              required
              minlength="2"
              maxlength="200"
            />
            <p className="about-error popup__input-error popup__input-error_type_user-descr"></p>
            <button
              type="submit"
              name="edit-profile-submit-button"
              className="popup__submit-button
          responsible-fade responsible-fade_opacity_strong"
            >
              Сохранить
            </button>
          </form>
          <button
            type="button"
            aria-label="Отменить редактирование"
            className="popup__close-button  responsible-fade"
          >
            <img
              src={closeIcon}
              alt="Закрыть окно"
              className="popup__close-icon"
            />
          </button>
        </div>
      </div>
      <div className="popup popup_type_add-card">
        <div className="popup__container">
          <h3 className="popup__title">Новое место</h3>
          <form className="popup__form" name="add-card" novalidate>
            <input
              type="text"
              minlength="2"
              maxlength="30"
              required
              name="name"
              className="popup__field popup__field_type_new-card-title"
              placeholder="Название"
            />
            <p className="name-error popup__input-error popup__input-error_type_card-title"></p>
            <input
              type="url"
              required
              className="popup__field popup__field_type_new-card-link"
              placeholder="Ссылка на картинку"
              name="link"
            />
            <p className="link-error popup__input-error popup__input-error_type_card-link"></p>
            <button
              type="submit"
              name="add-card-submit-button"
              className="popup__submit-button
          responsible-fade responsible-fade_opacity_strong"
            >
              Создать
            </button>
          </form>
          <button
            type="button"
            aria-label="Отменить"
            className="popup__close-button responsible-fade"
          >
            <img
              src={closeIcon}
              alt="Закрыть окно"
              className="popup__close-icon"
            />
          </button>
        </div>
      </div>
      <div className="popup popup_type_picture-full-screen">
        <div className="popup__photo-container">
          <button
            type="button"
            aria-label="закрыть окно."
            className="popup__close-button  responsible-fade"
          >
            <img
              src={closeIcon}
              alt="Закрыть окно."
              className="popup__close-icon"
            />
          </button>
          <img src="#" alt="#" className="popup__photo" />
          <h3 className="popup__title popup__title_type_photo">#</h3>
        </div>
      </div>
      <div className="popup popup_type_confirm">
        <div className="popup__container">
          <h3 className="popup__title">Вы уверены?</h3>
          <button
            type="button"
            aria-label="Подтвердить удаление карточки"
            name="confirm-button"
            className="popup__submit-button popup__submit-button_type_confirm
      responsible-fade responsible-fade_opacity_strong"
          >
            Да
          </button>
          <button
            type="button"
            aria-label="Отменить удаление карточки"
            name="cancel-button"
            className="popup__submit-button popup__submit-button_type_cancel
      responsible-fade responsible-fade_opacity_strong"
          >
            Нет
          </button>
          <button
            type="button"
            aria-label="Отменить"
            className="popup__close-button responsible-fade"
          >
            <img
              src={closeIcon}
              alt="Закрыть окно"
              className="popup__close-icon"
            />
          </button>
        </div>
      </div>
      <div className="popup popup_type_edit-avatar">
        <div className="popup__container">
          <h3 className="popup__title">Обновить аватар</h3>
          <form className="popup__form" name="edit-avatar" novalidate>
            <input
              type="url"
              required
              className="popup__field popup__field_type_edit-avatar"
              placeholder="Ссылка на картинку"
              name="avatar"
            />
            <p className="avatar-error popup__input-error popup__input-error_type_edit-avatar"></p>
            <button
              type="submit"
              name="edit-avatar-submit-button"
              className="popup__submit-button
        responsible-fade responsible-fade_opacity_strong"
            >
              Сохранить
            </button>
          </form>
          <button
            type="button"
            aria-label="Отменить"
            className="popup__close-button responsible-fade"
          >
            <img
              src={closeIcon}
              alt="Закрыть окно"
              className="popup__close-icon"
            />
          </button>
        </div>
      </div>
      <div className="popup popup_type_page-loading">
        <img
          src="./images/spinner.gif"
          alt="Идет загрузка"
          className="popup__spinner"
        />
      </div>
    </div>
  )
}

export default App
