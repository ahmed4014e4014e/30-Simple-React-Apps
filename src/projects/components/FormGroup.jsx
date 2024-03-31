import React from 'react'

export default function FormGroup({labelText, inputType, placeholder, values, onInput, onChange, onKeyUp, readOnly=false, className, reference}) {
  return (
    <div className="form-group">
      <label>{labelText}</label>
      <input type={inputType} placeholder={placeholder} value={values} onInput={onInput} onChange={onChange} onKeyUp={onKeyUp} readOnly={readOnly} className={className} ref={reference} />
    </div>
  )
}
