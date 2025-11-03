import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { RegisterData } from '@/types/types';
import { endpoints, handleAPI } from '@/api';

const Register = async (regiterData: RegisterData) => {

  try {
    const response = await handleAPI(
      `${endpoints.register}`,
      'POST',
      regiterData
    );
    return response.data;
  } catch (error: any) {
    console.error('Error:', error.response?.data);
    throw new Error(
      error.response?.data?.message || 'Failed to register'
    );
  }
};

const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (changePassword: RegisterData) => {
      return Register(changePassword);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userList'] });
    },
    onError: (error) => {
      console.log(error.message || 'Failed to register.');
    },
  });
};

export { useRegister };
