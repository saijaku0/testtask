import { Card, CardMedia, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function MealCard({ meal, handleAddToCart }: { meal: any; handleAddToCart: (meal: any) => void; }) {
    return (
        <Card key={meal.idMeal} sx={{ maxWidth: 345, marginBottom: 2 }}>
            <Link to={`/recipe/${meal.idMeal}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CardMedia
                    component="img"
                    image={meal.strMealThumb}
                    title={meal.strMeal}
                    style={{ width: '100%', borderRadius: '8px' }}
                />
                <Typography variant="h6" sx={{ marginTop: 1, padding: '1rem' }}>{meal.strMeal}</Typography>
            </Link>
            <Box display={'flex'} justifyContent={'space-between'} sx={{ padding: '1rem' }}>
                <Typography variant="body2" color="textSecondary">
                    {meal.strCategory} - {meal.strArea}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => handleAddToCart(meal)}>
                    Додати
                </Button>
            </Box>
        </Card>
    );
}

export default MealCard;
