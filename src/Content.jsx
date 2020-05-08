import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Issues from './pages/Issues'
import View from './pages/View'
import axios from 'axios'
import async from 'async'

const Content = (props) => {
    // This state is where we are putting the API data
    let [gitIssue, setGitIssue] = useState([])

    //  The API call using axios
    useEffect(() => {
        const githubApi = async () => {
            await axios.get("https://api.github.com/repos/facebook/react/issues?page=1&per_page=10")
            .then(response => {
                setGitIssue(response.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
        githubApi()
    }, [] )

    return(
        <div>
            <Route exact path="/" component={Landing} />
            <Route path="/issues" render={() => (
                <Issues gitIssue={gitIssue} />
            )}/>
            <Route exact path="/view/0" component={View} />

        </div>
    )
}

export default Content