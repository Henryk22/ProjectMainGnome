import React from "react";

export default function Map() {
  const iframeStyle = {
    width: "100%",
    height: "525px",
    border: "0",
    scrolling: "no",
    marginHeight: "0",
    marginWidth: "0"
  };

  return (
    <div style={{ width: "100%" }}>
      <iframe
        title="GoogleMaps"
        style={iframeStyle}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.40922318567!2d13.372464412310396!3d52.50793287194155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1693504071809!5m2!1sru!2sde"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}