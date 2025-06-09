import React from 'react'
import { AppWindowIcon, CodeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

function Auth() {
  return (
    <div className='h-screen w-full flex items-center justify-center flex-col'>
    <div className="flex max-w-sm w-96 flex-col gap-6">
      <Tabs defaultValue="login">
        <TabsList className={"w-auto"}>
          <TabsTrigger value="login" className={"cursor-pointer"}>Login</TabsTrigger>
          <TabsTrigger value="signup" className={"cursor-pointer"}>Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login into your account</CardTitle>
              <CardDescription>
                Enter your email id & password for login operation.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">E-Mail</Label>
                <Input id="tabs-demo-name" placeholder="example@gmail.com" type={"mail"}/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Password</Label>
                <Input id="tabs-demo-username" placeholder="Enter your password" type={"password"}/>
              </div>
            </CardContent>
            <CardFooter>
              <Button className={"w-full"}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup for new account</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Fullname</Label>
                <Input id="tabs-demo-current" type="text" placeholder="Dare Devil"/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">E-Mail</Label>
                <Input id="tabs-demo-new" type="mail" placeholder="example@gmail.com"/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">Phone No</Label>
                <Input id="tabs-demo-new" type="text" placeholder="9876543210"/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">Password</Label>
                <Input id="tabs-demo-new" type="password" placeholder="Enter your password"/>
              </div>
            </CardContent>
            <CardFooter>
              <Button className={"w-full"}>Signup</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    </div>
  )
}

export default Auth