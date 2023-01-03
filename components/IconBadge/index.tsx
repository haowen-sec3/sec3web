import Image from "next/image";
import IconBall from "../../assets/images/icon-ball.svg";
import IconStar from "../../assets/images/icon-star.svg";

type IconType = "ball" | "star";

const Icon = ({ type }: { type: IconType }) => {
  switch (type) {
    case "ball":
      return <Image src={IconBall} alt="icon-ball" loading="lazy" />;
    case "star":
      return <Image src={IconStar} alt="icon-star" loading="lazy" />;
    default:
      return <></>;
  }
};

export default Icon;
