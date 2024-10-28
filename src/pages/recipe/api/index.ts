import { baseApi } from "@/shared";

export const mealApi = baseApi.injectEndpoints({
    endpoints: build => (
        {
            getMealById: build.query({
                query: (id: string) => `lookup.php?i=${id}`,
            }),
        })
})

export const { useGetMealByIdQuery } = mealApi;