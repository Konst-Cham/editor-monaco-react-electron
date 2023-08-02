import { Tabs, TabsProps } from 'antd';
import './App.css';
import OnePage from './onepage/OnePage';
import TwoPage from './twopage/TwoPage';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import fontData from './twopage/FontSelect';
import useTheme from './use_Theme';

const onChange = (key: string) => {
  console.log(key);
};

function App() {
  const { t } = useTranslation();
  const items: TabsProps['items'] = [
    {
      key: 'Editor',
      label: `${t('editor')}`,
      children: <OnePage />,
    },
    {
      key: 'Setting',
      label: `${t('settings')}`,
      children: <TwoPage />,
    },
  ];
  return (
    <Tabs
      defaultActiveKey="Setting"
      items={items}
      onChange={onChange}
      style={{
        top: 0,
        left: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
      hideAdd
      type="card"
    />
  );
}

export default App;
