import React, { useState } from "react";
import "cropperjs/dist/cropper.css";
import { Cropper, ReactCropperElement } from "react-cropper";
import { useImmer } from "use-immer"; 
import css from "./cropper.module.scss"; 
import Image from "next/image";
import ModelView from "../model";

 

type ImageCropperProps = {
  image: string;
  onClose?: () => void;
  onCrop: (data: string) => void;
  onCropBlob: (data: any) => void;
  onSelectFile?: (file: File) => void;
  children?: React.ReactNode | React.ReactNode[];
  maxSize?: number;
};

const Component = (
  { image, onCrop, onCropBlob, children, onSelectFile, maxSize = 5 }: ImageCropperProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const cropperRef = React.useRef<ReactCropperElement>(null);
  const [rotation, setRotation] = React.useState(0);


  const [state, setState] = useImmer({
    image: null,
    instance: false,
    show: false,
    cropImageName: ""
  });

  React.useMemo(() => {
    setState((draft) => {
      draft.image = image;
    });
  }, [image, setState]);

  const onChangeState = React.useCallback(
    (key: keyof typeof state, value: any) => {
      setState((draft) => {
        draft[key] = value;
      });
    },
    [setState]
  );

  const onCropHandler = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const croppedCanvas = cropper.getCroppedCanvas();
      croppedCanvas.toBlob(async (blob) => {
        console.log("blob1111111111", blob)
        try {
          onCropBlob(blob)
        } catch (err) {
          console.log("blob error", err)
        }
      })
      onCrop(cropper.getCroppedCanvas().toDataURL());
      onChangeState("show", false);
    }
  }

  const onCloseHandler = React.useCallback(() => {
    onChangeState("show", false);
  }, [onChangeState]);

  const rotateLeft = () => {
    setRotation(rotation - 90);
    if (cropperRef.current) {
      const cropper = cropperRef.current.cropper;
      // Rotate the image counter-clockwise by 90 degrees
      cropper.rotate(-90);
    }
  };

  const rotateRight = () => {
    setRotation(rotation + 90);
    if (cropperRef.current) {
      const cropper = cropperRef.current.cropper;
      // Rotate the image clockwise by 90 degrees
      cropper.rotate(90);
    }
  };




  return (
    <React.Fragment>
      <input
        ref={ref}
        type="file"
        accept="image/*"
        onChange={(e) => {
          const files:any = e.target.files;


          if (e.target.files && e.target.files.length > 0) {
            if (
              files[0].type !== "image/jpeg" &&
              files[0].type !== "image/png" &&
              files[0].type !== "image/jpg"
            ) {
              alert("Only JPG, JPEG, and PNG formats are allowed ");
              return;
            }
            if (e.target.files[0].size > maxSize * 1024 * 1024) {
              alert(`Max size of the photo is ${maxSize}MB`);
              return;
            }
            const reader = new FileReader();
            reader.onload = (e:any) => {
              onChangeState("show", true);
              onChangeState("image", e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
            if (onSelectFile) {
              onSelectFile(e.target.files[0]);
            }
          }
        }}
        style={{ display: "none" }}
        id="file-input"
      />
      <label htmlFor="file-input">{children}</label>
      <ModelView show={state.show} className={css["container"]}>
        {/* <Text element="h4">Crop</Text> */}
        <Cropper
          ref={cropperRef}
          className={css["img-fluid"]}
          zoomTo={0}
          src={state.image}
          viewMode={1}
          minCropBoxHeight={0}
          minCropBoxWidth={0}
          background={false}
          responsive={true}
          autoCropArea={1}
          initialAspectRatio={1 / 1}
          aspectRatio={1 / 1}
          dragMode="none"
          checkOrientation={false}
          onInitialized={(instance) => {
            onChangeState("instance", instance);
          }}
          guides={true}
        />
        <div className="d-flex justify-content-between align-items-center">
          <div
            className={`d-flex align-items-center simply-gap-8 mt-16 lg-mt-16 ${css["controls"]}`}
          >
            <span
              className="pl-10 lg-pl-10 pr-10 lg-pr-10"  onClick={rotateLeft}>
              <Image src="/images/serviceProvider/rotate-left.png" alt="rotateLeft" width={24} height={24} />
            </span>
            <span
              className="pl-10 lg-pl-10 pr-10 lg-pr-10"  onClick={rotateRight}>
              <Image src="/images/serviceProvider/rotate-right.png" alt="rotateLeft" width={24} height={24} />

            </span>
          </div>
          <div className="d-flex align-items-center simply-gap-8  mt-16 lg-mt-16">
            <span
              className="d-flex align-items-center justify-content-center" 
              onClick={onCloseHandler}
              style={{
                minWidth: "80px",
              }}
            >
              Cancel
            </span>
            <span
              className="d-flex align-items-center justify-content-center"
              onClick={onCropHandler}
              style={{
                minWidth: "80px",
              }}
            >
              Save
            </span>

          </div>
        </div>



      </ModelView>
    </React.Fragment>
  );
};

const ImageCropper = React.forwardRef(Component);

export default ImageCropper;
