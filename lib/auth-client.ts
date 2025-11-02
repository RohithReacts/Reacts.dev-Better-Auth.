import { createAuthClient } from "better-auth/react"
import { lastLoginMethodClient } from "better-auth/client/plugins"

export const authClient = createAuthClient({
     plugins: [
        lastLoginMethodClient() 
    ],
    
    baseURL: "http://localhost:3000"
})