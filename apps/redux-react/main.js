import React from 'react'
import {router} from 'common/router'
import App from 'redux-react/app'

router.start((err, state) => {
    React.render(<App/>, document.getElementById('app'))
})
