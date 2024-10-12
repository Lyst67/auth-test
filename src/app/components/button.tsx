import { buttonStyle } from "@/app/lib/utils/styleTemplates";

type ButtonProps = {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={`${buttonStyle} px-5`}>
      {children}
    </button>
  );
}
