// components/Slider.tsx
"use client";
import React, { useState } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import bg from "@/assets/imgs/bg1.jpg";
import bg2 from "@/assets/imgs/bg2.webp";
import DrawerModal from "@/ui/modal/AntdModal";
import cn from "classnames"

const contentStyle: React.CSSProperties = {
  height: "95svh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const AutoOpacitySlider: React.FC = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        className={cn("menu-toggle", {"menu-toggle--active": open})}
        onClick={() => setOpen(true)}
      >
        <span></span>
        <span></span>
      </button>
      <Carousel effect="fade" autoplaySpeed={4000} autoplay>
        <div>
          <h3 style={contentStyle}>
            <Image src={bg2} alt="Picture of the author" className="w-full" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image src={bg} alt="Picture of the author" className="w-full" />
          </h3>
        </div>
      </Carousel>
      <DrawerModal
        title="test"
        placement="bottom"
        closable={true}
        onClose={onClose}
        isOpen={open}
        key="bottom"
      >
        <div>Drawer Content</div>
      </DrawerModal>
    </>
  );
};

export default AutoOpacitySlider;
