export default function Input(props) {
  const { type, id, placeholder, value, onChange, isValid } = props
  return (
    <>
      <input
        type={type}
        className="popup__field"
        id={id}
        placeholder={placeholder}
        required
        minLength="2"
        maxLength="40"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <p
        className={`popup__input-error ${
          !isValid && 'popup__input-error_active'
        }`}
      ></p>
    </>
  )
}
