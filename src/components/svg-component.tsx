interface SvgIconProps {
  id: string;
  width?: number;
  height?: number;
}

const SvgIconComponent = ({ id, width, height, ...props }: SvgIconProps) => {
  return (
    <svg width={width} height={height}  {...props}>
      <use href={`src/assets/sprite.svg#${id}`} />
    </svg>
  );
};
export default SvgIconComponent;
