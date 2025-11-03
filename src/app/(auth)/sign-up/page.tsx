'use client';

import { Button, CustomImage, Input, RadiatingLoader } from '@/components';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerFormSchema } from '@/utils';
import {
    Field,
    FieldDescription,
    FieldSeparator,
} from "@/components/ui/field"
import Link from 'next/link';
import { FaGoogle, FaApple } from "react-icons/fa";
import { useRegister } from '@/hooks';


export default function LoginPage() {
    const router = useRouter();
    const { mutate: registerData, isPending } = useRegister();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            username: '',
            password: '',
            fullname: '',
            email: '',
        },
    });

    const onSubmit = async (values: z.infer<typeof registerFormSchema>) => {
        const { username, password, fullname, email } = values;

        // Validate password length
        if (password.length < 8) {
            setError('password', {
                type: 'manual',
                message: 'Password must be at least 8 characters.',
            });
            return;
        }

        try {
            registerData(
                {
                    username,
                    password,
                    fullname,
                    email,
                    role: 'client',
                },
                {
                    onSuccess: () => {
                        router.push('/login');
                    },
                    onError: (error: any) => {
                        setError('root', {
                            type: 'manual',
                            message: error.message || 'Registration failed. Please try again.',
                        });
                    },
                }
            );
        } catch (err) {
            console.error('Registration error:', err);
            setError('root', {
                type: 'manual',
                message: 'Registration failed. Please try again.',
            });
        }
    };

    if (isSubmitting || isPending) {
        return <RadiatingLoader />
    }
    return (
        <div className="min-h-screen grid lg:grid-cols-2">

            {/* Right side with login form */}
            <div className="flex flex-col items-center justify-center p-2">
                <div className="w-full max-w-lg space-y-4">
                    <h1 className="text-[32px] font-bold text-black mb-6">Sign in to your account</h1>



                    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-2">
                            <label className="text-sm text-black" htmlFor="email">
                                Name <span className='text-red-500 text-lg'>*</span>
                            </label>
                            <Input
                                id="fullname"
                                placeholder="Input your full name"
                                className="w-full p-2 border h-14 rounded-[10px]"
                                {...register('fullname')}
                            />
                            {errors.fullname && (
                                <p className="text-sm text-red-500">
                                    {errors.fullname.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-black" htmlFor="email">
                                Username <span className='text-red-500 text-lg'>*</span>
                            </label>
                            <Input
                                id="username"
                                placeholder="Input your full name"
                                className="w-full p-2 border h-14 rounded-[10px]"
                                {...register('username')}
                            />
                            {errors.username && (
                                <p className="text-sm text-red-500">
                                    {errors.username.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-black" htmlFor="email">
                                Email Address <span className='text-red-500 text-lg'>*</span>
                            </label>
                            <Input
                                id="email"
                                placeholder="yourmail@gmail.com"
                                className="w-full p-2 border h-14 rounded-[10px]"
                                {...register('email')}
                            />
                            {errors.username && (
                                <p className="text-sm text-red-500">
                                    {errors.username.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-black" htmlFor="password">
                                Password <span className='text-red-500 text-lg'>*</span>
                            </label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Input your password"
                                className="w-full p-2 border rounded-[10px] h-14"
                                {...register('password')}
                            />{' '}
                            {errors.password && (
                                <p className="text-sm text-red-500">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full font-bold rounded-[10px] h-14 text-xl bg-main  text-white"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Loading...' : 'Login'}
                        </Button>

                        <FieldSeparator className='mb-8'>Or continue with</FieldSeparator>
                        <div className='w-full'>
                            <Field>
                                <div className="flex gap-4 mb-4">
                                    <Button
                                        variant="outline"
                                        type="button"
                                        className="flex-1 flex items-center justify-center gap-2 h-14 rounded-lg text-lg"
                                    >
                                        <FaGoogle className="w-5 h-5" />
                                        Google
                                    </Button>
                                    <Button
                                        variant="outline"
                                        type="button"
                                        className="flex-1 flex items-center justify-center gap-2 h-14 rounded-lg text-lg"
                                    >
                                        <FaApple className="w-5 h-5" />
                                        Apple
                                    </Button>
                                </div>
                                <FieldDescription>
                                    Already have an account?
                                    <Link href="/login" className="text-main">
                                        Login Here
                                    </Link>
                                </FieldDescription>
                            </Field>
                        </div>
                    </form>

                </div>
            </div>


            <div className="relative hidden lg:flex flex-col h-screen">


                <div className="flex-3 bg-main flex flex-col justify-start p-16">

                    <h2 className="text-white text-xl lg:text-3xl">
                        Join us for a seamless online experience. Access your account effortlessly. Stay secure and enjoy a hassle-free journey.
                    </h2>
                </div>

                <div className="flex-7 relative w-full ">
                    <CustomImage
                        src="/imgs/sign_up.jpg"
                        alt="Team collaborating in modern office"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
