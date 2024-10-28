import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import {
    Box,
    Typography,
    Grid2,
} from '@mui/material';
import RecipeCard from './recipeCard';
import IngredientTable from './ingredientTable';
import { aggregateIngredients } from '../lib/aggregateIngredients';

function BasketPage() {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const aggregatedIngredients = aggregateIngredients(cartItems);
    const ingredientEntries = Object.entries(aggregatedIngredients);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                Рецепти які сподобалися
            </Typography>

            <Grid2 container spacing={2} sx={{ margin: '1rem 0' }}>
                {cartItems.map((item: any) => (
                    <RecipeCard key={item.idMeal} item={item} />
                ))}
            </Grid2>

            <Typography variant="h6" gutterBottom>
                Інгридіенти
            </Typography>

            <IngredientTable
                ingredientEntries={ingredientEntries}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    );
}

export default BasketPage;
