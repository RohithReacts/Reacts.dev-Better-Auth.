"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import UserForm from "@/components/forms/user-form";
import { User } from "@/db/schema";

interface EditUserDialogProps {
  user: User;
}

export default function EditUserDialog({ user }: EditUserDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Pencil className="size-4" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <UserForm user={user} onSuccess={() => setIsDialogOpen(false)} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
