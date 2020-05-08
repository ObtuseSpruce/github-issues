import React, {useState} from 'react';
import { Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Issues from './pages/Issues'
import View from './pages/View'
import axios from 'axios'

const Content = (props) => {
    // let [gitIssue, setGitIssue] = useState([])
    // const githubApi = () => {
    //     axios.get("https://api.github.com/repos/facebook/react/issues?page=1&per_page=10")
    //     .then(response => {
    //         setGitIssue(response.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }
    // githubApi()
    let fakeApi = [
        {title : "i've got issues", id : 1888, body: "stuff goes here" },
        {title : "Another issue", id : 9999, body: "More complaints" },
        {title : "Github Api is whack", id : 666, body: "Why can't I request 9000 api attempts in a minute?" },
    ]
    return(
        <div>
            <Route exact path="/" component={Landing} />
            <Route path="/issues" render={() => (
                // <Issues gitIssue={gitIssue} />
                <Issues fakeApi={fakeApi}/>
            )}/>
            <Route exact path="/view/0" component={View} />

        </div>
    )
}

export default Content