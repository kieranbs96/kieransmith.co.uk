interface Props {
  children: React.ReactNode;
  type: 'button' | 'anchor';
  className?: string;
}

interface ButtonProps extends Props {
  onClick?: () => void;
}

interface AnchorButtonProps extends Props {
  href?: string;
  target?: string;
}

export const Button = ({ children, type, className, ...rest }: ButtonProps | AnchorButtonProps) => {
  const buttonStyles =
    'text-md flex items-center justify-center p-3 text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg hover:scale-[1.01] focus:outline-none focus:ring-0 active:shadow-lg';
  if (type === 'anchor') {
    return (
      <a className={`${buttonStyles} ${className}`} {...rest}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={`${buttonStyles} ${className}`} {...rest}>
        {children}
      </button>
    );
  }
};
