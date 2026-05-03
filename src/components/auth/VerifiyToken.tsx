import { useSearchParams } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Input } from '../ui/input'
import { useVerifyEmailMutation } from '@/services/api'
import { useForm, type SubmitHandler } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '@/store/slice/authSlice'

const tokenShcema = z.object({
    otp: z.string().length(6, "Token must be 6 characters long")
})

type formFields = z.infer<typeof tokenShcema>

const VerifiyToken = () => {
    const [searchParams] = useSearchParams()
    const email = searchParams.get("email")

    const [verifyEmail, {isLoading}] = useVerifyEmailMutation()
          const dispatch =  useDispatch()  

    const {register, handleSubmit, formState: {errors}, reset} = useForm({resolver: zodResolver(tokenShcema)})
    const onSubmit:SubmitHandler<formFields> = async (data) => {
        try {
            const response = await verifyEmail({email, otp: data.otp}).unwrap()
            reset()
            console.log("response from token", response)
            dispatch(loginSuccess({
                token: response.token,
                isAuthenticated: true
            }))
        } catch (error) {
            console.log("error", error)
        }
    }
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <Card className='w-full max-w-md p-6'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <h3 className='text-center text-xl font-bold'>Verify your token...</h3>
            <Input placeholder='Enter verification token' type='text' {...register("otp")}/>
            {errors.otp && <p className='text-sm text-red-500'>{errors.otp.message}</p>}
                <div className="w-full sm:max-w-sm">
                    <Button disabled={isLoading} className="w-full py-4 bg-gray-900 text-white hover:bg-gray-700">
                        {isLoading ? "Verifying..." : "Verify"}
                    </Button>
                </div>
            </form>
        </Card>
    </div>
  )
}

export default VerifiyToken