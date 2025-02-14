"use client"
import { useEffect } from "react"
import $ from 'jquery'
import Image from "next/image"


const ZoomImage = (src) => {
    const imgSrc = src;
    useEffect(() => {
      const script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/elevatezoom/3.0.8/jquery.elevatezoom.min.js'
      script.onload = () => {
          $(`#product_img`).elevateZoom({
              zoomType: "lens",
              lensShape: "round",
              lensSize: "200",
          });
      }
      document.body.appendChild(script)
      return () => {
          $(`.zoomContainer`).remove();
          document.body.removeChild(script);
      }
    }, [])
    return (
        <image src={imgSrc} id="product_img" alt="product image" data-zoom-image={imgSrc}></image>
    )
}
export default ZoomImage