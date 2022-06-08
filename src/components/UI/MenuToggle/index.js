import React from 'react'

export default props => (
    <div className="menu-toggle" onClick={props.toggleHandler}>
        <img src={`images/icon-${props.isOpen ? "close" : "hamburger"}.svg`} alt="menu toggler" />
    </div>
)