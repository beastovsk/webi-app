import type {UploadFile, UploadProps} from 'antd';

// @ts-ignore
type FileType = Parameters<UploadProps, 'beforeUpload'>[0];

export const onPreview = async (file: UploadFile) => {
  let src = file.url as string;
  if (!src) {
    src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj as FileType);
      reader.onload = () => resolve(reader.result as string);
    });
  }
  if (typeof window === 'undefined') return;

  const image = new Image();
  image.src = src;
  const imgWindow = window.open(src);
  imgWindow?.document.write(image.outerHTML);
};
