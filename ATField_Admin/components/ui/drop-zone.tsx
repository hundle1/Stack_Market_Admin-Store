import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDropzone, Accept } from "react-dropzone";
import { Button } from "./button";


interface FileWithPreview extends File {
  preview: string;
}

const thumbsContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16
};

const thumb: React.CSSProperties = {
  display: "inline-flex",
  borderRadius: 5,
  border: "1px solid #eaeaea",
  margin: 8,
  width: 300,
  height: 40,
  padding: 4,
  boxSizing: "border-box"
};

const butthumb: React.CSSProperties = {
  display: "inline-flex",
  borderRadius: 5,
  border: "1px solid #eaeaea",
  width: 100,
  height: 30,
  marginLeft: 20,
  boxSizing: "border-box"
};

const thumbInner: React.CSSProperties = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden"
};

const img: React.CSSProperties = {
  display: "block",
  width: 400,
  height: "100%"
};

function Dropzone() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: "all/*" as unknown as Accept,
    onDrop: async (acceptedFiles: File[]) => {
      const filesWithPreview: FileWithPreview[] = await Promise.all(
        acceptedFiles.map(async (file) => {
          return Object.assign(file, {
            preview: await URL.createObjectURL(file)
          });
        })
      );
      setFiles(filesWithPreview);
    }
  });

  const removeFile = (file: FileWithPreview) => () => {
    const newFiles = files.filter((f) => f !== file);
    setFiles(newFiles);
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name} className="w-40 h-10">
      <div style={thumbInner}>
        {/* <Image src={file.preview} style={img} width={100} height={100} alt={file.name} /> */}
        <div>{file.name}</div>
      </div>
      <button style={butthumb} onClick={removeFile(file)}>Remove File</button>
    </div>
  ));

  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <section className="container">
      <div
        {...getRootProps({ className: "dropzone" })}
        onClick={(e) => e.stopPropagation()}
        className="w-full border-[5px] border-dashed h-[200px] cursor-pointer"
      >
        <input {...getInputProps()} />
        
        <p className="h-[30%] text-center mt-5">Chuyển file vào vùng này hoặc bấm để thêm nhiều file...</p>

        <div className="flex justify-center gap-x-[140px] flex-nowrap h-[30%]">
          <Button  onClick={open} >
            Mở bộ sưu tập
          </Button>
          <Button onClick={() => console.log("HIT!")}>
            Chọn theo folder
          </Button>
        </div>

      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
}

export default Dropzone;