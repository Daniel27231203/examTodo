import { FC, ReactNode } from "react";
import Header from "./Header/Header";

interface LayoutProps {
  children: ReactNode;
}
const LayuotSite: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default LayuotSite;
