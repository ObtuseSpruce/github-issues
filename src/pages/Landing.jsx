import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core'
import Contribute from '../components/Contribute'

const Landing = (props) => {
    return(
        <div>
            <div>
               <Contribute />
            </div>
                <Link to='/issues'>Go To Issues</Link>
        </div>

    )
}

export default Landing