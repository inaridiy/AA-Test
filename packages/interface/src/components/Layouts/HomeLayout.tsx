import { BsListUl, BsWallet } from "react-icons/bs";

import { ThemeBox } from "../Elements";

export const HomeLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeBox className="min-h-[100dvh] bg-base-100">
      <main>{children}</main>
      <div className="fixed bottom-0 w-full flex justify-center p-2 bg-base-100 gap-6">
        <button className="btn btn-square btn-ghost">
          <BsListUl className="w-8 h-8" />
        </button>
        <button className="btn btn-square btn-ghost">
          <BsWallet className="w-8 h-8" />
        </button>
      </div>
    </ThemeBox>
  );
};
