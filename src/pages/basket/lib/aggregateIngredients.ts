export const aggregateIngredients = (cartItems: any[]) => {
    const ingredients: { [key: string]: number } = {};
    cartItems.forEach((item: any) => {
        for (let i = 1; i <= 20; i++) {
            const ingredient = item[`strIngredient${i}`];
            const measure = item[`strMeasure${i}`];
            if (ingredient) {
                ingredients[ingredient] = (ingredients[ingredient] || 0) + (measure ? parseFloat(measure) : 1);
            }
        }
    });
    return ingredients;
};
