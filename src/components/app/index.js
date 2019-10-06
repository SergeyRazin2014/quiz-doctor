import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

const App = () => (
  <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
  </div>

);

export default App;
