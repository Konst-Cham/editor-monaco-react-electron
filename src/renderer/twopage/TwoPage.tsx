import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import i18n from 'i18next';
import { Radio, Select, Space, Typography } from 'antd';
import LanguageSelect from './LanguageSelect';
import fontData from './FontSelect';
import initLang from '../initLanuage';
import useTheme from '../use_Theme';

initLang();
function TwoPage() {
  const { t } = useTranslation();
  const [fontFamily, setFontFamily] = useState(fontData[2].value);
  console.log(typeof fontFamily);
  const { theme, setTheme } = useTheme();
  const handleLightThemeClick = () => {
    setTheme('light');
  };
  const handleDarkThemeClick = () => {
    setTheme('dark');
  };

  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: theme === 'dark' ? '#242f3d' : 'white',
      }}
    >
      <Typography
        style={{ fontFamily, color: theme === 'dark' ? 'white' : 'black' }}
      >{`${t('language')}`}</Typography>
      <Select
        defaultValue="ru"
        style={{ width: 120 }}
        onSelect={(value) => i18n.changeLanguage(value)}
        options={LanguageSelect(fontFamily)}
      />
      <Typography
        style={{ fontFamily, color: theme === 'dark' ? 'white' : 'black' }}
      >
        {t('theme')}
      </Typography>
      <Radio.Group>
        <Radio.Button
          style={{
            fontFamily,
            backgroundColor: theme === 'dark' ? '#242f3d' : 'white',
            borderColor: theme === 'dark' ? 'white' : '',
            color: theme === 'dark' ? 'white' : 'black',
          }}
          value="white"
          onClick={handleLightThemeClick}
        >
          {t('themeLight')}
        </Radio.Button>
        <Radio.Button
          style={{
            fontFamily,
            backgroundColor: theme === 'dark' ? '#242f3d' : 'white',
            borderColor: theme === 'dark' ? 'white' : '',
            // color: theme === 'dark' ? '#1e77f3' : 'black',
          }}
          value="dark"
          onClick={handleDarkThemeClick}
        >
          {t('themeDark')}
        </Radio.Button>
      </Radio.Group>
      <Typography
        style={{ fontFamily, color: theme === 'dark' ? 'white' : 'black' }}
      >
        {t('font')}
      </Typography>
      <Select
        defaultValue={fontData[2]}
        options={fontData}
        onSelect={(value) => setFontFamily(value)}
      />
    </Space>
  );
}
export default TwoPage;
