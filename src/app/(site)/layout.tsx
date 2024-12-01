import LayuotSite from "@/components/layout/LayuotSite";
import ReduxProvider from "@/providers/ReduxProvider";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ReduxProvider>
      <LayuotSite>{children}</LayuotSite>
    </ReduxProvider>
  );
};

export default layout;
