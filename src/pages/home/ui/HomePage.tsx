import { useDispatch } from 'react-redux';
import { addToCart } from '@/features/slice/cartSlice';
import { useState } from 'react'; 
import { Box } from '@mui/material';
import { useSearchMealsQuery, useGetCategoriesQuery } from '../api';
import { useDebounce } from '@/entites/useDebounce/useDebounce';
import SearchBar from './searchBar';
import MealList from './mealList';
import { LoadingIndicator } from '@/shared';
import PaginationControl from './paginationControll';

function HomePage() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const itemsPerPage = 6;
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
  
    const { data: mealData, isLoading: loadingMeals } = useSearchMealsQuery(debouncedSearchTerm || ''); 
    const { data: categoriesData, isLoading: loadingCategories } = useGetCategoriesQuery(); 

    const handleAddToCart = (meal: any) => {
        const mealWithIngredients = {
            ...meal,
            ingredients: [meal.strIngredient1, meal.strIngredient2].filter(Boolean)
        };
        dispatch(addToCart(mealWithIngredients));
    };

    const indexOfLastMeal = currentPage * itemsPerPage;
    const indexOfFirstMeal = indexOfLastMeal - itemsPerPage;

    const filteredMeals = selectedCategory === 'All' 
        ? mealData?.meals 
        : mealData?.meals?.filter((meal: any) => meal.strCategory === selectedCategory);

    const currentMeals = filteredMeals?.slice(indexOfFirstMeal, indexOfLastMeal);
  
    const totalPages = Math.ceil((filteredMeals?.length || 0) / itemsPerPage);

    return (
        <Box sx={{ padding: 2 }}>
            <SearchBar 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                loadingCategories={loadingCategories}
                categoriesData={categoriesData}
            />
            <hr style={{ margin: "1rem 0"}} />

            {loadingMeals ? <LoadingIndicator /> : (
                <MealList 
                    meals={currentMeals}
                    handleAddToCart={handleAddToCart}
                />
            )}

            <PaginationControl 
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </Box>
    );
}

export default HomePage;
