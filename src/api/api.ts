import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { PostMethodPropsI } from './../interface/interface';
import axios from 'axios';


export const baseUrl = 'https://food-shop-bakcend.vercel.app/api';
// export const baseUrl = 'http://localhost:4040/api';
const getOption = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const useAddMethod = ({ endpoint, key }: PostMethodPropsI) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: 'POST',
        body: formData, // Accept formData here, not data
      });
      if (!response.ok) {
        throw new Error('Error submitting form');
      }
      return response.json();
    },
    onSuccess: () => {
      // Refetch the query with the provided key
      queryClient.invalidateQueries(key as any);
    },
  });

  return mutation;
};

export const deleteResource = async (endpoint: string, id: string) => {
  const response = await axios.delete(`${baseUrl}/${endpoint}/${id}`);
  return response.data;
};



// -----------------------------------
// ------------ categories -----------
// -----------------------------------

export const getCategories = async () => {
  try {
    const response = await fetch(`${baseUrl}/category`, getOption);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data?.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error; // Re-throw the error to let React Query handle it
  }
};


// ------------------------------
// ------------ foods -----------
// ------------------------------

export const getFoods = async () => {
  try {
    const response = await fetch(`${baseUrl}/food`, getOption);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data)
    return data?.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error; // Re-throw the error to let React Query handle it
  }
};


// ------------------------------------------
// ----------- category wise food -----------
// ------------------------------------------

export const getFoodsByCategory = async (id:string) => {
  try {
    const response = await fetch(`${baseUrl}/food/category/${id}`, getOption);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data)
    return data?.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error; // Re-throw the error to let React Query handle it
  }
};
