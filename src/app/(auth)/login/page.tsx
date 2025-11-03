'use client';

import { Button, CustomImage, Input, RadiatingLoader } from '@/components';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema } from '@/utils';
import {
  Field,

  FieldDescription,

  FieldSeparator,
} from "@/components/ui/field"
import Link from 'next/link';
import { FaGoogle, FaApple } from "react-icons/fa";


export default function LoginPage() {
  const { login, checkAuth } = useAuthStore();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    const { username, password } = values;

    if (password.length < 8) {
      setError('password', {
        type: 'manual',
        message: 'Password must be at least 8 characters.',
      });
      return;
    }

    try {
      await login(username, password);
      await checkAuth();

      if (!useAuthStore.getState().isAuthenticated) {
        setError('root', {
          type: 'manual',
          message: 'Invalid username or password',
        });
        return;
      }

      router.push('/');
    } catch (err) {
      console.error('Login error:', err);
      setError('root', {
        type: 'manual',
        message: 'Login failed. Please try again.',
      });
    }
  };
  if (isSubmitting) {
    return (
      <div>
        <RadiatingLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="relative hidden lg:flex flex-col h-screen">
        <div className="flex-7 relative w-full">
          <CustomImage
            src="/imgs/login_bg.png"
            alt="Team collaborating in modern office"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-3 bg-main flex flex-col justify-start p-6">
          <CustomImage
            src="/logo.svg"
            alt="Decorative bird illustration"
            width={400}
            height={400}
            className="mb-16"
          />
          <h2 className="text-white text-xl lg:text-3xl">
            Join us for a seamless online experience. Access your account effortlessly. Stay secure and enjoy a hassle-free journey.
          </h2>
        </div>
      </div>


      <div className="flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-8">
          <div className="">
            <h1 className="text-[32px] font-bold text-black mb-6">Login to your account</h1>

          </div>

          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <label className="text-sm text-black" htmlFor="email">
                Email Address <span className='text-red-500 text-lg'>*</span>
              </label>
              <Input
                id="username"
                placeholder="Input your registered email"
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

                <FieldDescription className="text-center ">
                  You&apos;re new in here? {" "}
                  <Link href="/sign-up" className="text-main">
                    Create Account
                  </Link>
                </FieldDescription>
              </Field>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
