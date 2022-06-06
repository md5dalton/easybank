import React, { Fragment } from "react"
import Backdrop from "../Backdrop"
import NavLinks from "../NavLinks"

import "./styles.sass"

export default props => props.isOpen ? (
    <Fragment>
        <Backdrop isOpen={props.isOpen} onClick={() => console.log('backdrop clicked')} />
        <div className="side-drawer">
            <NavLinks />
        </div>
    </Fragment>
) : null