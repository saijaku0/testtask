import { baseApi } from "@/shared";

export const mealApi = baseApi.injectEndpoints({
    endpoints: build => (
        {
            searchMeals: build.query({
                query: (searchTerm: string) => `search.php?s=${searchTerm}`,
            }),
            getCategories: build.query({
                query: () => 'list.php?c=list',
            }),
        })
})

export const { useSearchMealsQuery, useGetCategoriesQuery } = mealApi;