import React, { useState } from 'react';
import MyComponent from './MyComponent';

const App = () => {

      const [foo,setFoo]   = useState('')
  
return (
    <MyComponent foo={foo} />
  )
}