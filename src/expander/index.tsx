import React from 'react'
import attachStyles from 'react-jss'
import { Classes } from 'jss'

import { IAction, IProject } from '../project'

interface Props {
    classes: Classes,
    project?: IProject
}

class Expander extends React.Component<Props> {

    render() {
        const { classes, project } = this.props
        const { action, path, name } = project || {}

        switch (action) {
            case IAction.iframe:
                return (
                    <div className={classes.baseContainer}>
                        <iframe allowFullScreen className={classes.frame} title={name} src={path}/>
                    </div>
                )
            case IAction.api:
                return (
                    <div className={classes.baseContainer}>
                        <div>API detected</div>
                    </div>
                )
            default: 
                return (
                    <div className={classes.baseContainer}>
                        <div></div>
                    </div>
                )
        }
    }
}

export default attachStyles({
    baseContainer: {
        display: 'flex',
        width: '100%',
        margin: '10px',
        borderRadius: 5,
        border: '1px solid #008000',
    },
    frame: {
        width: '100%',
    }
})(Expander)