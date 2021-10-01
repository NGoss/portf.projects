import React from 'react'
import attachStyles from 'react-jss'
import { Classes } from 'jss'

export enum IAction {
    iframe,
    api
}

export interface IProject {
    name: string,
    action: IAction,
    path: string
}

interface Props {
    classes: Classes,
    name: string,
    setExpandedId: Function,
    action: IAction,
    path: string
}

class Project extends React.Component<Props> {

    render() {
        const { classes, name, action, setExpandedId } = this.props
        return (
        <button className={classes.baseContainer}
            onClick={() => setExpandedId(name, action)}>{name}</button>)
    }
}

export default attachStyles({
    baseContainer: {
        display: 'inline-block',
        padding: 40,
        borderRadius: 5,
        border: '1px solid #008000',
        fontWeight: 'bolder',
        color: 'inherit',
        backgroundColor: '#000',
        '&:hover': {
            backgroundColor: '#004400',
            cursor: 'pointer'
        },
        '&:visited': {
            color: 'inherit'
        },
        '&:active': {
            backgroundColor: '#002200'
        }
    }
})(Project)