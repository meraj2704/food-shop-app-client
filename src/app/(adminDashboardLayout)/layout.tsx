import ThemeSwitcher from "@/components/darkmode/ThemeSwitcher";
import AdminHeader from "@/components/shared/AdminHeader";
import AdminSideBar from "@/components/shared/AdminSideBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AdminFooter from '../../components/shared/AdminFooter';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Shop - Admin Dashboard",
  description: "This is Admin Dashboard",
};

export default function AdminDashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen flex relative">
      {/* Sidebar */}
      <div className="w-72 h-full">
        <AdminSideBar />
      </div>

      {/* Main content */}
      <div className="flex-1 h-full flex flex-col">
        {/* Header */}
        <div
          className="fixed top-0 right-0 z-50 h-20"
          style={{ width: "calc(100% - 18rem)" }}
        >
          <AdminHeader />
        </div>

        {/* Main content */}
        <div className="pt-20 flex-1 overflow-y-auto">{children}</div>
        <div className="">
          <AdminFooter/>
        </div>
      </div>
      <div className="absolute bottom-5 right-5">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
