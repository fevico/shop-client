import { Card } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import z from 'zod'

const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  name: z.string("Name is required").min(3, "Name must be at least 3 characters long")
})

type formFields = z.infer<typeof registerSchema>
const RegisterForm = () => {
     const [showPassword, setShowPassword] = useState(false)
    
          const {register, handleSubmit, reset, formState: {errors}} = useForm<formFields>({
            resolver: zodResolver(registerSchema)
          })
    
        const onSubmit: SubmitHandler<formFields> = (data) => {
          console.log(data)
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Card className="w-full flex max-w-md p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h3 className="text-center text-xl font-bold">Create a new account</h3>
            <div className="flex flex-col gap-4">
                <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" {...register("email")} placeholder="enter your email address" className="w-full"/>
                </div>
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}

                {/* name */}
                <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input type="text" {...register("name")} placeholder="enter your name" className="w-full"/>
                </div>
                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}

                <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                <Input type={showPassword ? "text" : "password"}  {...register("password")} placeholder="enter your password" className="w-full"/>
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" onClick={()=> setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                </button>
                </div>
                </div>
                   {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>

            <div className="w-full sm:max-w-sm">
                <Button className="w-full py-4 hover:bg-gray-900">Register</Button>
            </div>

          <div className="text-center text-gray-500 text-sm">
            <span>Already have an account? </span>
            <Link to="/login" className="underline hover:text-gray-700">
              Login
            </Link>
          </div>

            </form>
        </Card>
    </div>
  )
}

export default RegisterForm