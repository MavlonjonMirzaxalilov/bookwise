"use client";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";

const authentator = async () => {
  try {
    const response = await fetch();
  } catch (error: any) {
    throw new Error(`Authentication request failed:${error.messages}`);
  }
};

const ImageUpload = () => {
  return <div>ImageUpload</div>;
};
export default ImageUpload;
