import { z } from 'zod';
import { zodIsNotEmptyString } from './empty.validator';


export const loginFormSchema = z.object({
  username: zodIsNotEmptyString('Username cannot be blank'),

  password: zodIsNotEmptyString('Password cannot be blank').refine(
    (val) => val.length >= 8,
    {
      message: 'Password must be at least 8 characters',
    }
  ),
});

export const registerFormSchema = z.object({
  username: zodIsNotEmptyString('Username cannot be blank'),
  email: zodIsNotEmptyString('Email cannot be blank'),
  fullname: zodIsNotEmptyString('Full name cannot be left blank'),
  password: zodIsNotEmptyString('Password cannot be blank'),
});

