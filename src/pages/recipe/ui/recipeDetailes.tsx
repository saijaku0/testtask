import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, CardContent, List, ListItem, ListItemText } from '@mui/material';
import { useGetMealByIdQuery } from '../api';

function RecipeDetailPage() {
    const { id } = useParams<{ id: string }>();

    const { data: meal, isLoading, isError } = useGetMealByIdQuery(id as string);

    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Error loading recipe details.</Typography>;
    if (!meal) return <Typography>No recipe found.</Typography>; 

    return (
        <Box sx={{ padding: 2 }}>
            <Card>
                <CardMedia
                    component="img"
                    image={meal?.meals[0].strMealThumb}
                    alt={meal?.meals[0].strMeal}
                    sx={{ height: 300, objectFit: 'cover' }}
                />
                <CardContent>
                    <Typography variant="h4">{meal?.meals[0].strMeal}</Typography>
                    <Typography variant="h6" color="textSecondary">{meal?.meals[0].strCategory} - {meal?.meals[0].strArea}</Typography>
                    <Typography variant="h5" sx={{ marginTop: 2 }}>Ingredients:</Typography>
                    <List>
                        {Array.from({ length: 20 }).map((_, i) => {
                            const ingredient = meal?.meals[0][`strIngredient${i + 1}`];
                            const measure = meal?.meals[0][`strMeasure${i + 1}`];
                            return ingredient ? (
                                <ListItem key={i}>
                                    <ListItemText primary={`${ingredient} - ${measure}`} />
                                </ListItem>
                            ) : null;
                        })}
                    </List>
                    <Typography variant="h5" sx={{ marginTop: 2 }}>Instructions:</Typography>
                    <Typography>{meal?.meals[0].strInstructions}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default RecipeDetailPage;
