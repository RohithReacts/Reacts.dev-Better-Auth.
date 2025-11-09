
import { getUsers } from "@/server/users";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";
import DeleteUserButton from "./delete-user-button";
import UserForm from "./forms/user-form";

export default async function UsersTable() {
  const users = await getUsers();

  // Helper function for readable date formatting
  const formatDate = (date: Date | string) => {
    const d = new Date(date);
    return d.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="w-full overflow-x-auto">
      <Table className="max-w-full rounded-lg shadow-sm">
        

        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="text-center font-semibold">Email</TableHead>
            <TableHead className="text-center font-semibold">Username</TableHead>
            <TableHead className="text-center font-semibold">Date Time</TableHead>
            <TableHead className="text-center font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              className="hover:bg-muted/30 transition-colors"
            >
              <TableCell className="text-center font-medium">
                {user.email}
              </TableCell>
              <TableCell className="text-center">{user.username}</TableCell>
              <TableCell className="text-center">
                {user.createdAt ? formatDate(user.createdAt) : "—"}
              </TableCell>
              <TableCell className="text-center space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Pencil className="size-4" />
                    </Button>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit User</DialogTitle>
                      <UserForm user={user} />
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <DeleteUserButton userId={user.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
