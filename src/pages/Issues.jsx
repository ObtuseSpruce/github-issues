import React from 'react';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'
import Contribute from '../components/Contribute';

const Issues = (props) => {
    // maps out the data which was passed in from Content component
    let listIssues = props.gitIssue.map((issue, index)=> {
        return(
            <div className="githubIdeas">
                <p>{issue.title}</p>
                <p>{issue.url}</p>
            </div>
        )
    })
    return(
    <Container>
        <div>
            <Contribute />
        </div>
        <div>
           {listIssues}
        </div>

    </Container>
    )
}

export default Issues