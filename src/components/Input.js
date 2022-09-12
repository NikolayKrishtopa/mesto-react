export default function Input(props) {
  const {
    type,
    name,
    placeholder,
    value,
    onChange,
    isValid,
    maxLength,
    errorText,
  } = props
  return (
    <>
      <input
        type={type}
        className="popup__field"
        name={name}
        placeholder={placeholder}
        required
        minLength="2"
        maxLength={maxLength}
        value={value}
        onChange={onChange}
      />
      <p
        className={`popup__input-error ${
          !isValid && 'popup__input-error_active'
        }`}
      >
        {errorText}
      </p>
    </>
  )
}
