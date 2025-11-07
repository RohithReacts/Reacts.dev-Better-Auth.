import { auth } from "@/lib/auth"
import { Box, Card, Flex, Text, Avatar } from "@radix-ui/themes"
import { headers } from "next/headers"

export default async function UserInfo() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    return <div className="text-center text-muted-foreground mt-10">Not authenticated</div>
  }

  const { name, email, image } = session.user

  
  const avatarSrc: string | undefined = image ?? undefined

  return (
    <div className="justify-end-safe items-center flex">
      <Box maxWidth="380px">
        <Card>
          <Flex gap="3" align="center">
            <Avatar
              size="3"
              src={avatarSrc} 
            
              fallback={name ? name.charAt(0).toUpperCase() : "U"}
            />
            <Box>
              <Text as="div" size="2" weight="bold">
                {name}
              </Text>
              <Text as="div" size="2" color="gray">
                {email}
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>
    </div>
  )
}
