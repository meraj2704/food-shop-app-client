import { useMutation, useQueryClient } from "@tanstack/react-query";

export const baseUrl = 'https://food-shop-bakcend.vercel.app/api';
// export const baseUrl = 'http://localhost:4040/api';
const getOption = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};


// export const useAddCategory = ({endpoint,}) => {
//   const queryClient = useQueryClient();

//   const mutation = useMutation({
//     mutationFn: async (formData: FormData) => {
//       const response = await fetch(`${baseUrl}/category`, {
//         method: 'POST',
//         body: formData,
//       });
//       if (!response.ok) {
//         throw new Error('Error submitting form');
//       }
//       return response.json();
//     },
//     onSuccess: () => {
//       // Refetch categories after adding a new category
//       queryClient.invalidateQueries('allCategories');
//     },
//   });

//   return mutation;
// };

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
