const baseUrl = 'http://localhost:4040';
const getOption = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

// -----------------------------------
// ------------ categories -----------
// -----------------------------------

export const getCategories = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/category`, getOption);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error; // Re-throw the error to let React Query handle it
  }
};
