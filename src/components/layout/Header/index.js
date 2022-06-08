import React from 'react'
import CTAButton from '../../UI/CTAButton'
import Logo from '../../UI/Logo'
import MenuToggle from '../../UI/MenuToggle'
import NavLinks from '../../UI/NavLinks'

import './styles.sass'

export default props => (
    <header>
        <div className="container">
            <Logo />
            <NavLinks />
            <CTAButton />
            <MenuToggle toggleHandler={props.toggleHandler} isOpen={props.sideDrawerIsOpen} />
        </div>
    </header>
)