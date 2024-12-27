"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { AlignCenter } from "lucide-react"

const formSchema = z.object({
  apiKey: z.string().min(2, {
    message: "apiKey must be at least 2 characters.",
  }),
  authDomain: z.string().min(2, {
    message: "apiKey must be at least 2 characters.",
  }),
  projectId: z.string().min(2, {
    message: "apiKey must be at least 2 characters.",
  }),
  storageBucket: z.string().min(2, {
    message: "apiKey must be at least 2 characters.",
  }),
  messagingSenderId: z.string().min(2, {
    message: "apiKey must be at least 2 characters.",
  }),
  appId: z.string().min(2, {
    message: "apiKey must be at least 2 characters.",
  }),
})

export function FormularioCompleto({ titulo }: { titulo: string }) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
    },
  })
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle style={{ textAlign: 'center' }}>{titulo}</CardTitle>
        {/* <CardDescription>You have 3 unread messages.</CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-4">

        <Form {...form}>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="apiKey"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>apiKey</FormLabel>
                  <FormControl>
                    <Input placeholder="apiKey" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="authDomain"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>authDomain</FormLabel>
                  <FormControl>
                    <Input placeholder="authDomain" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>projectId</FormLabel>
                  <FormControl>
                    <Input placeholder="projectId" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="storageBucket"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>storageBucket</FormLabel>
                  <FormControl>
                    <Input placeholder="storageBucket" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="messagingSenderId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>messagingSenderId</FormLabel>
                  <FormControl>
                    <Input placeholder="messagingSenderId" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="appId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>appId</FormLabel>
                  <FormControl>
                    <Input placeholder="appId" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}
