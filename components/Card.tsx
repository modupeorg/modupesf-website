import { staticBlurDataUrl } from "@/lib/staticBlur";
import { ImageFieldImage, KeyTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

type CardProps = {
  image: ImageFieldImage | null | undefined;
  title: KeyTextField;
  content: KeyTextField;
};

function Card({ image, title, content }: CardProps) {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <div className="card">
      <div className="card-image">
        <PrismicNextImage
          field={image}
          width={image?.dimensions?.width}
          height={image?.dimensions?.height}
          placeholder="blur"
          blurDataURL={getBlurSvg}
        />
      </div>

      <div className="card-title">
        <span className="text-lg">{title}</span>
      </div>

      <div className="card-content">
        <div className="px-4">
          <span className="text-lg">{content}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
