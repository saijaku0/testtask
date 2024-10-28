// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const mealApi = createApi({
//     reducerPath: 'mealApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1/' }),
//     endpoints: (builder) => ({
//         searchMeals: builder.query({
//             query: (searchTerm: string) => `search.php?s=${searchTerm}`,
//         }),
//         getMealById: builder.query({
//             query: (id: string) => `lookup.php?i=${id}`,
//         }),
//         filterMealsByCategory: builder.query({
//             query: (category: string) => `filter.php?c=${category}`,
//         }),
//         getCategories: builder.query({
//             query: () => 'list.php?c=list', 
//         }),
//     }),
// });

// export const { useSearchMealsQuery, useGetMealByIdQuery, useFilterMealsByCategoryQuery, useGetCategoriesQuery } = mealApi;
