import { useRef, useState, ChangeEvent } from 'react';
import { Button } from 'antd';
import { FolderOpenTwoTone, SaveTwoTone } from '@ant-design/icons';
import { Editor } from '@monaco-editor/react';
import onSave from './OnSave';

function OnePage() {
  const options: Editor = {
    minimap: { enabled: false },
  };
  const [textJson, setTextJson] = useState('');
  const uploadRef = useRef<HTMLInputElement>(null);
  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      return;
    }
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsText(file, 'windows-1251');
      fileReader.onload = () => {
        setTextJson(fileReader.result as string);
      };
    }
  };
  return (
    <>
      <Button.Group>
        <Button type="text" onClick={() => uploadRef.current?.click()}>
          <FolderOpenTwoTone />
        </Button>
        <input
          type="file"
          ref={uploadRef}
          onChange={handleUpload}
          style={{ display: 'none' }}
        />

        <Button
          type="text"
          onClick={() => onSave({ fileName: 'TextTest', fileValue: textJson })}
        >
          <SaveTwoTone />
        </Button>
      </Button.Group>

      <Editor
        options={options}
        value={textJson}
        onChange={(value) => setTextJson(value)}
        language="JSON"
        // theme={'HTML.data-theme' === 'dark' ? 'vs-dark' : 'light'}
      />
    </>
  );
}
export default OnePage;
