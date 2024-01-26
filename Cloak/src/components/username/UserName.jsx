import { useForm } from "react-hook-form"
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
import { useState } from "react"

export function UserName() {
  const [userName , setUserName]= useState()
  const {handleSubmit} = useForm()
 
    const Submit = (data) => {
      console.log("Form data submitted:", data);
      // Add your logic here, e.g., send data to the server, perform validation, etc.
    };
    

  




  return (
    <Form>
      <form onSubmit={handleSubmit(Submit)} className="space-y-8">
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" value={userName} onChange={(e) => setUserName(e.target.value)} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default UserName
