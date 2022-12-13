import { ThemeBox } from "../Elements";

export const HomeLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ThemeBox className="min-h-[100dvh] bg-base-200">{children}</ThemeBox>;
};
