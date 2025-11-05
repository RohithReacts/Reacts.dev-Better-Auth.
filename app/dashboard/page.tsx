import { Navbar } from "@/components/templates/navbar";
import UsersTable from "@/components/users-table";
import { Button } from "@/components/ui/button";
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

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-6 md:py-12">
      <Navbar />
      <div className="flex flex-col mt-15 sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          Todo App
        </h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-fit sm:w-auto ml-auto  flex items-center justify-center gap-2">
              <span>Add User</span>
              <UserPlus className="size-4" />
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
      <div className="w-full overflow-x-auto rounded-lg bg-background shadow-sm">
        <UsersTable />
      </div>
      <Connect />
    </div>
  );
}
