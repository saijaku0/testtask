import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function RecipeCard({ item }: { item: any }) {
    return (
        <Card sx={{ display: 'flex', textDecoration: 'none', color: 'inherit' }}>
            <Link to={`/recipe/${item.idMeal}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 150, height: 150 }}
                    image={item.strMealThumb}
                    alt={item.strMeal}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">{item.strMeal}</Typography>
                </CardContent>
            </Link>
        </Card>
    );
}

export default RecipeCard;
