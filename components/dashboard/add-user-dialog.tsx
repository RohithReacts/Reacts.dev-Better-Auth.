"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import UserForm from "@/components/forms/user-form";

export default function AddUserDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="ml-auto mr-20 flex items-center justify-center">
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
          <UserForm onSuccess={() => setIsDialogOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
