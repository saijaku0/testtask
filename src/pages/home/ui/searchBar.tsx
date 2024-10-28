import { TextField, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function SearchBar({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, loadingCategories, categoriesData }: {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    selectedCategory: string;
    setSelectedCategory: (value: string) => void;
    loadingCategories: boolean;
    categoriesData: any;
}) {
    return (
        <Box display={'flex'} gap={2}>
            <TextField
                label="Search for a recipe..."
                variant="outlined"
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
            
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel sx={{backgroundColor: 'white'}}>Category</InputLabel>
                <Select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <MenuItem value="All">All</MenuItem>
                    {loadingCategories ? (
                        <MenuItem disabled>Loading categories...</MenuItem>
                    ) : (
                        categoriesData?.meals && categoriesData.meals.length > 0 ? (
                            categoriesData.meals.map((category: any) => (
                                <MenuItem key={category.strCategory} value={category.strCategory}>
                                    {category.strCategory}
                                </MenuItem>
                            ))
                        ) : (
                            <MenuItem disabled>No categories found</MenuItem>
                        )
                    )}
                </Select>
            </FormControl>
        </Box>
    );
}

export default SearchBar;
