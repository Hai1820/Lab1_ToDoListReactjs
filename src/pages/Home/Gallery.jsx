import React from "react";
import useQuery from "../../hooks/useQuery";
import { homeService } from "../../services/home/home";

export default function Gallery() {
  const { data: gallery } = useQuery(() => {
    return homeService.getGallery();
  }, []);
  return (
    <section className="section-gallery">
      <div className="textbox">
        <h2 className="main-title">Chúng ta là một team</h2>
      </div>
      <div className="list">
        {gallery?.map((e, i) => (
          <img key={i} data-flickity-lazyload={e} alt="" />
        ))}
      </div>
      <div className="controls">
        <div className="btn_ctr prev" />
        <span>Trượt qua</span>
        <div className="timeline">
          <div className="process" />
        </div>
        <div className="btn_ctr next" />
      </div>
    </section>
  );
}
