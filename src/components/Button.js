import React from 'react'
import '../components/Components.css'

const STYLES = ['btn--standard', 'btn--outlined'];
const SIZES = ['btn--small', 'btn--normal', 'btn--large', 'btn--superliit'];
const COLOR = ['green', 'yellow', 'gray', 'red'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize, buttonColor}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0];
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
        onClick={onClick}type={type}>
        {children}
        </button>
    )
}
export default Button
