"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ReactPlayer from "react-player";
import { Card, List } from "antd";

const youtubeLinks: string[] = [
  "https://www.youtube.com/watch?v=V5R5uwfo4l0",
  "https://www.youtube.com/watch?v=SoTOF-plFwc&t=2267s",
  "https://www.youtube.com/watch?v=syRC5oGBaGg",
  "https://www.youtube.com/watch?v=sZGG9-X17KU",
  "https://youtu.be/925wmb-4Yr4?si=3p2qSn9oZN-4Ti4Z",
  "https://youtu.be/Z_1Q0XB4X0Y?si=pSdo7CHYmAliuUbY",
  "https://youtu.be/nA8gl_Y8G1w?si=zQ2hi2cKCg8-PzLw",
  "https://youtu.be/DuC0agOa1t8?si=PEF4ZZM3Nnm2i-x6",
  "https://www.youtube.com/watch?v=IfhMILe8C84",
  "https://m.youtube.com/watch?v=WPPPFqsECz0&pp=ygUYaW4gYSBudXRzaGVsbCBrdXJ6Z2VzYWd0",
  "https://www.youtube.com/watch?v=Q-XOM4E4RZQ",
  "https://youtu.be/1NzLGYRYHJo?si=rumJfp49j63TJEXM",
  "https://youtu.be/ryB8hT5TMSg?si=lu_JXXvl2wkT3TUF",
  "https://www.youtube.com/watch?v=9IiTdSnmS7E",
  "https://www.youtube.com/watch?v=7__r4FVj-EI",
  "https://www.youtube.com/watch?v=-dT1hPhtJFg",
  "https://www.youtube.com/watch?v=29bgJqpao6g",
  "https://www.youtube.com/watch?v=onq9ixC7OEg",
  "https://www.youtube.com/watch?v=onq9ixC7OEg",
  "https://www.youtube.com/watch?v=u1O3jPv4jG0",
  "https://www.youtube.com/watch?v=WXfYkw6B-kw",
  "https://www.youtube.com/watch?v=lLWEXRAnQd0",
  "https://m.youtube.com/watch?v=a4RPrlZPDwY",
  "https://www.youtube.com/watch?v=wNjbasba-Qw",
  "https://youtu.be/qD6bPNZRRbQ?si=YSFPhQVthSa-Qo-o",
  "https://www.youtube.com/watch?v=6Kx3fzuchD8",
  "https://www.youtube.com/watch?v=ZRuSS0iiFyo",
  "https://youtu.be/vyQv563Y-fk?si=Lj3V7_SAlakXPMEn",
  "https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&si=UOtum1AyiHsmRYiw",
  "https://youtu.be/SzJ46YA_RaA?si=lr6sYZjNdczrw2fT",
  "https://youtu.be/nDLb8_wgX50?si=tRrg0QeIfnQhyj4h",
  "https://youtu.be/WpYsl6DlM28?si=_WVoWNp4FEB8fO2_",
  "https://youtu.be/JN3KPFbWCy8?si=IjyKpxq3LYNWxK4S",
  "https://youtu.be/NrCGm57O6xo?si=oWxpGMDzyNqvxzrl",
  "https://youtu.be/K4I2D5JsKX8?si=tvIblZdE_txqbx1p",
  "https://youtu.be/2aWud3aVaJU?si=2sIB_yrcw75Hh63S",
  "https://youtu.be/EjTWFoqLy34?si=6woE8Hacdh6KbuJa",
  "https://youtu.be/P20uPt5_LlA?si=xrWq0VRo7rZuO6MA",
  "https://youtu.be/Ic_IapE_D-Q?si=cvxKUUmQjaHGma6t",
  "https://youtu.be/oVY3USJTidA?si=58pDU8eB9QRCcO7o",
  "https://youtu.be/XEQS3DXhNmc?si=kiQD_KbJ_6etZRyg",
  "https://youtu.be/7-b0nU_SzRM?si=FaidgCjWXd3rzXuQ",
  "https://youtu.be/lisof6XWtII?si=YGbfgzJsd-XxBfW8",
];

const YoutubeGridList: React.FC = () => {
  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={youtubeLinks}
      renderItem={(item) => (
        <List.Item>
          {/* <Card hoverable> */}
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={item}
              width="100%"
              height="100%"
            />
          </div>{" "}
          {/* </Card> */}
        </List.Item>
      )}
    />
  );
};

export default YoutubeGridList;
