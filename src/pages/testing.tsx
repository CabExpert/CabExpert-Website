import ImageCropper from '@/component/image-cropper'
import React, { useRef, useState } from 'react'
import styles from '@/styles/createaccount.module.scss'
import Image from 'next/image'
import { useImmer } from 'use-immer'
import getExtension from '@/utils/get-extension'
import { checkDimensions } from '@/utils/dimensions'

const Testing = () => {
  const imageCropperRef = useRef<HTMLInputElement>(null);
  const [croppedImageBlob, setCroppedImageBlob] = useState<Blob | null>(null);

  const [croppedImage, setCroppedImage] = useState<any>(null); 
  
    const [avatarPreview, setAvatarPreview] = useState(""); 
  const [cropping, setCropping] = useState(false);


  const [fileMeta, setFileMeta] = useImmer({
    name: "",
    size: 0,
    type: "",
    extension: ".png",
    file: null,
  });

  const handleAvatarClick = () => {
    imageCropperRef.current?.click();
  };

  const handleCancel = () => {
    const confirmCancel = confirm("Are you sure you want to cancel?");
    if (confirmCancel) {
      setAvatarPreview("");
      setCropping(false);
      setCroppedImage(null);
    } else {
      return;
    }
  };

  console.log("croppedImage", {croppedImage});


  return (
    <div>
      <div
                          className={styles.avtarbox}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div className="d-flex flex-column">
                            <ImageCropper
                              ref={imageCropperRef}
                              maxSize={5}
                              image={croppedImage}
                              onCrop={(data) => setCroppedImage(data as string)}
                              onCropBlob={(data) => setCroppedImageBlob(data)}
                              onSelectFile={async (file) => {
                                setFileMeta((draft:any) => {
                                  draft.name = file.name;
                                  draft.type = file.type;
                                  draft.size = file.size;
                                  draft.extension = getExtension(file.name);
                                  draft.file = file;
                                });

                                if (file) {
                                  Object.defineProperty(file, "dimensions", {
                                    value: await checkDimensions(file),
                                  });
                                }
                              }}
                            >
                              <div
                                className={styles.addphoto}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                {!croppedImage ? (
                                  <Image
                                    src="/company_logo_placeholder.png"
                                    alt="fav"
                                    height={70}
                                    width={70}
                                  />
                                ) : (
                                  <Image
                                    src={croppedImage}
                                    width={70}
                                    height={70}
                                    className={styles.userimageicon}
                                    alt="avatar"
                                  />
                                )}
                              </div>
                            </ImageCropper>
                            <p
                              className={`${styles.addphototext} lg-mt-8 lg-mb-20`}
                            >
                              {croppedImage ? (
                                <div className="d-flex align-items-center justify-content-center gap-16">
                                  <a
                                    className="label-medium primary_color"
                                    onClick={handleAvatarClick}
                                    style={{ cursor: "pointer" }}
                                  >
                                    Edit &nbsp;
                                  </a>
                                  <a
                                    className="label-medium  danger-color"
                                    onClick={handleCancel}
                                    style={{ cursor: "pointer" }}

                                  >
                                    Delete
                                  </a>
                                </div>
                              ) : (
                                <a
                                  className="label-medium primary_color"
                                  onClick={handleAvatarClick}
                                >
                                    Add Photo
                                </a>
                              )}
                            </p>
                          </div>
                        </div>
      
    </div>
  )
}

export default Testing
