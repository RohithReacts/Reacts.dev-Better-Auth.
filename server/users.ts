"use server";
import { auth } from "@/lib/auth"

export const signIn = async (email:string,password:string) => {
    try{
    await auth.api.signInEmail({
        body: {
            email,
            password,
        }
    })
    return{
        success:true,
        message:"Signed in successfully"
    }

    } catch(error){
        const e = error as Error;

        return{
            success:false,
            message:e.message || "Error signing in"
        }
        
    }
}

export const signUp = async (email:string,password:string,username:string) => {
    try{
    await auth.api.signUpEmail({
        body: {
            email,
            password,
            name:username
        }
    })
    return{
        success:true,
        message:"Signed up successfully"
    }
    } catch(error){
        const e = error as Error;

        return{
            success:false,
            message:e.message || "Error signing up"
        }
    }
}




import { db } from "@/db/drizzle";
import { User, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getUsers() {
    try {
        const allUsers = await db.select().from(users);
        
        return allUsers;
    } catch (error) {
        console.error(error);
        throw error
    }
}

export async function createUser(user: Omit<User, "id" | "createdAt" | "updatedAt">) {
    try {
        await db.insert(users).values(user);
    } catch (error) {
        console.error(error);
        return { error: "Failed to create user" };
    }
}

export async function updateUser(user: Omit<User, "createdAt" | "updatedAt">) {
    try {
        await db.update(users).set(user).where(eq(users.id, user.id));
    } catch (error) {
        console.error(error);
        return { error: "Failed to update user" };
    }
}

export async function deleteUser(id: string) {
    try {
        await db.delete(users).where(eq(users.id, id));
    } catch (error) {
        console.error(error);
        return { error: "Failed to delete user" };
    }
}