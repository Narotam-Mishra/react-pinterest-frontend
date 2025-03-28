import { IKImage } from 'imagekitio-react'
import React from 'react'

const Image = ({ path, src, alt, classname, w, h}) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
      path={path}
      src={src}
      transformation={[
        {
          height: h,
          width: w,
        },
      ]}
      alt={alt}
      loading="lazy"
      className={classname}
      lqip={{ active: true, quality: 20 }}
    />
  );
}

export default Image