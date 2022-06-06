import React from 'react'
import CTAButton from '../../UI/CTAButton'
import Logo from '../../UI/Logo'
import MenuToggle from '../../UI/MenuToggle'
import NavLinks from '../../UI/NavLinks'

import './styles.sass'

export default () => (
    <header>
        <div className="container">
            <Logo />
            <NavLinks />
            <CTAButton />
            <MenuToggle />
        </div>
    </header>
)