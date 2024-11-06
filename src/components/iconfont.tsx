const IconFont = (props: {
  icon: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) => {
  const { icon, className, style, onClick } = props;

  return (
    <svg className={className} style={style} onClick={onClick}>
      <use href={`icon-${icon}`} />
    </svg>
  );
};

export default IconFont;
