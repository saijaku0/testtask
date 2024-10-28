import { createBrowserRouter } from "react-router-dom";
import { Header } from "@/widgets";
import { HomePage, BasketPage, RecipeDetailPage } from "@/pages";

export const Root = createBrowserRouter([
    {
        path: "/",
        element: (<Header />),
        errorElement: (<div>Error</div>),
        children: [
            {
                index: true,
                element: (<HomePage />)
            }, 
            {
                path: "basket",
                element: (<BasketPage />)
            },
            {
                path: "recipe/:id",
                element: (<RecipeDetailPage />)
            }
        ]
    }
])