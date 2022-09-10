export default function ProfileInputs(props) {
  const { userName, userAbout, onChangeUserName, onChangeUserAbout } = props
  return (
    <>
      <input
        type="text"
        className="popup__field popup__field_type_user-name"
        name="name"
        id="name"
        placeholder="Имя пользователя"
        required
        minLength="2"
        maxLength="40"
        value={userName}
        onChange={(e) => onChangeUserName(e.target.value)}
      />
      <p className="name-error popup__input-error popup__input-error_type_user-name"></p>
      <input
        type="text"
        className="popup__field popup__field_type_user-description"
        id="about"
        name="about"
        placeholder="Расскажите о себе"
        required
        minLength="2"
        maxLength="200"
        value={userAbout}
        onChange={(e) => onChangeUserAbout(e.target.value)}
      />
      <p className="about-error popup__input-error popup__input-error_type_user-descr"></p>
    </>
  )
}
