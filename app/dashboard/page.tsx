import UsersTable from "@/components/users-table";
import { UserPlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UserForm from "@/components/forms/user-form";
import Connect from "@/components/connect";
import AboutSection from "@/components/about";
import Footer from "@/components/templates/footer";
import { Metadata } from "next";
import { Header } from "@/components/templates/header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your Personal Dashboad",
};

export default function DashboardPage() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-between px-6 py-4">
  <h1 className="text-2xl ml-20 sm:text-3xl font-sans font-semibold">
    Todo App
  </h1>

  <Dialog>
    <DialogTrigger asChild>
      <Button
        className="mr-20 flex items-center justify-center"
      >
        <span>Add User</span>
        <UserPlus className="size-5" />
      </Button>
    </DialogTrigger>

    <DialogContent className="max-w-[70vw] sm:max-w-md rounded-xl p-4">
      <DialogHeader className="space-y-2">
        <DialogTitle className="text-xl text-center sm:text-xl font-semibold">
          Add User
        </DialogTitle>
        <DialogDescription className="text-md text-center text-muted-foreground">
          Add a new user to the database.
        </DialogDescription>
      </DialogHeader>
      <div className="mt-4">
        <UserForm />
      </div>
    </DialogContent>
  </Dialog>
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
