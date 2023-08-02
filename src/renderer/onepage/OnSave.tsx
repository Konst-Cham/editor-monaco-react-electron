function onSave(props: { fileName: string; fileValue: string }) {
  const element = document.createElement('a');
  const file = new Blob([props.fileValue], {
    type: 'text/plain',
  });
  element.href = URL.createObjectURL(file);
  element.download = `${props.fileName}.json`;
  element.click();
}
export default onSave;
