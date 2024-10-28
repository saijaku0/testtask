import { Box } from '@mui/material';
import MealCard from './mealCard';

function MealList({ meals, handleAddToCart }: { meals: any[]; handleAddToCart: (meal: any) => void; }) {
    return (
        <Box display="flex" flexWrap="wrap" gap={2} justifyContent="space-evenly">
            {meals?.map((meal: any) => (
                <MealCard key={meal.idMeal} meal={meal} handleAddToCart={handleAddToCart} />
            ))}
        </Box>
    );
}

export default MealList;
