import React, { Fragment } from "react"
import Backdrop from "../Backdrop"
import NavLinks from "../NavLinks"

import "./styles.sass"

export default props => props.isOpen ? (
    <Fragment>
        <Backdrop isOpen={props.isOpen} onClick={props.toggleHandler} />
        <div className="side-drawer">
            <NavLinks />
        </div>
    </Fragment>
) : null