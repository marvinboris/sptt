import Image, { ImageProps } from "next/image";

type SvgIconProps = Omit<ImageProps, 'src' | 'alt'> & {
  name: string;
};

export default function SvgIcon({ name, ...props }: SvgIconProps) {
  return (
    <Image
      width={500}
      height={500}
      src={"/images/icons/" + name + ".svg"}
      alt={name + " icon"}
      {...props}
    />
  );
}
