import type {UploadFile, UploadProps} from 'antd';
import {RcFile} from 'antd/es/upload';

export const onPreview = (file: RcFile): Promise<string | ArrayBuffer> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
