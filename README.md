search-bar
#how to use
```
cnpm i react-search-bar1


import React, { Component } from 'react'
import ReactROM from 'react-dom'

import App from '../dist/react-component'

var lists = [
    {
        content: <div>1</div>
    },
    {
        content: <div>
            <img src="http://img.xshuma.com/201203/17184912031837878.jpg" />
        </div>
    },
    { content: '3' },
    { content: '4' }
]
ReactROM.render(<App lists={lists} />, document.getElementById('root'))




```