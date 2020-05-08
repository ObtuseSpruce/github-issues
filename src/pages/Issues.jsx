import React from 'react';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'
import Contribute from '../components/Contribute';

const Issues = (props) => {
    // let listIssues = props.gitIssue.map((issue, index)=> {
    //     return(
    //         <div className="githubIdeas">
    //             <p>{issue.title}</p>
    //             <p>{issue.url}</p>
    //         </div>
    //     )
    // })
    let listFake = props.fakeApi.map((issue, index)=> {
        return(
            <div className="githubIdeas">
                <Link to="/view/{issue.id}"><Button>{issue.title}</Button></Link>
                <p>{issue.body}</p>
            </div>
        )
    })
    return(
    <Container>
        <div>
            <Contribute />
        </div>
        <div>
           {listFake}
        </div>

    </Container>
    )
}

export default Issues