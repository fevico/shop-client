import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

const Settings = () => {
const [formData, setFormData] = useState({
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@email.com",
});
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
}

  return (
    <div className='space-y-4'>
        <h1 className="text-xl font-bold">Account Settings</h1>
        <Card className="w-full p-6">
            <h3 className="text-xl font-semibold">Personal information</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="space-y-2">
                    <Label htmlFor='firstname'>First Name</Label>
                    <Input className='p-4 bg-gray-200' name='firstName' type="text" value={formData.firstName} onChange={handleOnChange}/>
                </div>
                {/* last name */}
                <div className="space-y-2">
                    <Label htmlFor='lastname'>Last Name</Label>
                    <Input className='bg-gray-200' type="text" name="lastName" value={formData.lastName} onChange={handleOnChange}/>
                </div>
            </div> 
   
            <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input className='bg-gray-200' type="email" name="email" value={formData.email} onChange={handleOnChange}/>
            </div> 

            <div className="flex justify-end">
                <Button className='bg-purple-600' size="lg">Save Changes</Button>
            </div>
        </Card>
    </div>
  )
}

export default Settings