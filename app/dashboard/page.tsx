import UsersTable from "@/components/users-table";
import AddUserDialog from "@/components/dashboard/add-user-dialog";
import Connect from "@/components/connect";
import AboutSection from "@/components/about";
import Footer from "@/components/templates/footer";
import { Metadata } from "next";
import { Header } from "@/components/templates/header";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your Personal Dashboad",
};

export default function DashboardPage() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-between px-6 py-4">
        {/* <h1 className="text-2xl ml-20 sm:text-3xl font-sans font-semibold">
          Todo App
        </h1> */}

        <AddUserDialog />
      </div>
      <div className="max-w-5xl mx-auto mt-4 flex items-center justify-center bg-background">
        <UsersTable />
      </div>

      <AboutSection />
      <Connect />
      <Footer />
    </div>
  );
}
