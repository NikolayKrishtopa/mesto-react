export default function ProfileInputs() {
  return (
    <>
      <input
        type="text"
        className="popup__field popup__field_type_user-name"
        name="name"
        id="name"
        required
        minLength="2"
        maxLength="40"
      />
      <p className="name-error popup__input-error popup__input-error_type_user-name"></p>
      <input
        type="text"
        className="popup__field popup__field_type_user-description"
        id="about"
        name="about"
        required
        minLength="2"
        maxLength="200"
      />
      <p className="about-error popup__input-error popup__input-error_type_user-descr"></p>
    </>
  )
}
