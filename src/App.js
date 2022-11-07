import './App.less';
import 'antd/dist/antd.less';
import {Button, Pagination, Space, Tabs} from 'antd';
import {useEffect} from 'react';
import Header from './Header/Header';
import {api} from './utils/Api';

function App() {
  useEffect(() => {
/*    api.getResults()
    .then((res) => console.log(res))*/
  }, [])

  return (
    <div className="App">
      <Header/>
      <Space >
      <Tabs
        defaultActiveKey='1'
        tabPosition='top'
        style={{
          height: 220,
        }}
        items={[
          {
            label: 'Champions league',
            key: '1',
            // childrem:
          }
        ]}
      >
      </Tabs>

      </Space>
    </div>
  );
}

export default App;

