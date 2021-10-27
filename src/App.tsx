import React from 'react'
import attachStyles from 'react-jss'
import { Classes } from 'jss'

import Nav from './nav';
import Project, {IAction, IProject} from './project'
import Expander from './expander'

interface Props {
  classes: Classes
}

interface State {
  expandedId?: string,
  projects: Array<IProject>
}

class App extends React.Component<Props, State> {
  constructor(props :Props) {
    super(props)

    this.state = {
      expandedId: undefined,
      projects: [
        {
          name: "Material-UI eBook Viewer",
          path: "http://viewer.foinse.io",
          action: IAction.iframe,
          description: "A material-ui ebook viewer prototype"
        },
        {
          name: "dynamicAPI",
          path: "",
          action: IAction.api,
          description: "A dynamic Java backend for handling CRUD operations on the fly"
        }
      ]
    }

    this.setExpandedId = this.setExpandedId.bind(this)
  }

  setExpandedId(expandedId :string) {
    this.setState({expandedId})
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.rootContainer}>
        <Nav />
        <div className={classes.projectsContainer}>
          <div className={classes.projectsNav}>
            {this.state.projects.map((project :IProject) =>
              (<Project
                key={project.name}
                name={project.name}
                action={project.action}
                path={project.path}
                description={project.description}
                setExpandedId={this.setExpandedId} />))}
          </div>
          <Expander project={this.state.projects.find((project :IProject) => project.name === this.state.expandedId)} />
        </div>
        <div className={classes.footerContainer}>
          Portfolio v0.1 © nate goss
        </div>
      </div>
    )
  }
}

export default attachStyles({
  rootContainer: {
    backgroundColor: '#000',
    color: '#008000',
    padding: 10,
    height: 'Calc(100% - 20px)',
    width: 'Calc(100% - 20px)'
  },
  projectsContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '80%'
  },
  projectsNav: {
    height: '100%'
  },
  footerContainer: {
    bottom: 50,
    position: 'absolute'
  }
})(App)
