/*------- Functions to run when page opens -------*/
//meal info
window.addEventListener('DOMContentLoaded',function(){
    for (let i=0; i<mealArray.length; i++){
        let newDiv = document.createElement('div');
    newDiv.classList.add('meal-container');

        let meal = recipes[i];
        for (let j=0; j<meal.length; j++){
            let newerDiv = document.createElement('div');
            newerDiv.classList.add('meal');

            let actualMeal = meal[j];

            let image = document.createElement('img');
            image.classList.add('meal-image');
            image.src = actualMeal.img;

            let mealName = document.createElement('h3');
            mealName.classList.add('meal-name');
            mealName.innerText = actualMeal.name;

            let reference = document.createElement('a');
            reference.classList.add('meal-ref');
            reference.innerText = 'View Full recipe';
            reference.href = actualMeal.source;
            reference.target = '_blank' 

            mealArray[i].appendChild(newDiv).appendChild(newerDiv).append(image, mealName, reference);
        }
        
    };
});

const recipes =[
    [
    {
        id: 1,
        name: 'PB Chocolate Sheet Pan Pancake',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sheet-pan-pancake-1641505974.jpg?crop=0.900xw:0.901xh;0,0&resize=980:*',
        recipe: "Place 12- by 17-inch rimmed baking sheet (half sheet pan) on center rack of oven. Heat oven to 450°F. In large bowl, whisk together flour, peanut butter powder, baking powder, baking soda and salt. In second bowl, whisk together buttermilk, eggs, sugar and vanilla. Melt 3 tablespoons butter and whisk into buttermilk mixture. Pour wet ingredients over dry ones and fold just until no traces of flour remain (batter will be lumpy). Fold in chocolate chips. Carefully remove hot pan from oven and swirl remaining tablespoon butter all over bottom to melt. Immediately pour in batter and quickly spread evenly. Bake until golden brown and wooden pick inserted in center comes out clean, 13 to 15 minutes. Cut into pieces and serve immediately with yogurt and syrup if desired. ",
        source: 'https://www.goodhousekeeping.com/food-recipes/a38029033/sheet-pan-pancake-recipe/'
    },
    {
        id: 2,
        name: 'Gruyère, Bacon and Spinach Scrambled Eggs',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gruye-re-bacon-and-spinach-scrambled-eggs-1608662180.jpg?crop=0.669xw:1.00xh;0.162xw,0&resize=980:*',
        recipe: "In a large bowl, whisk together eggs, Dijon mustard, 1 tablespoon water and 1/2 teaspoon each salt and pepper. Heat oil or butter in 10-inch nonstick skillet on medium. Add eggs and cook, stirring with rubber spatula every few seconds, to desired doneness, 2 to 3 minutes for medium-soft eggs. Fold in bacon, spinach, and Gruyère cheese.",
        source: 'https://www.goodhousekeeping.com/food-recipes/a35036945/gruyere-bacon-spinach-scrambled-eggs-recipe/'
    },
    {
        id: 3,
        name: 'Blueberry-Banana-Nut Smoothie',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/blueberry-banana-nut-smoothie-1608662718.jpg?crop=0.571xw:0.571xh;0.228xw,0.263xh&resize=768:*',
        recipe: "In a blender, add ingredients in the order they are listed. Purée ingredients until smooth.",
        source: 'https://www.goodhousekeeping.com/food-recipes/a34236605/how-to-make-a-smoothie-recipe/'
    },
    {
        id: 4,
        name: 'Sheet Pan Sausage and Egg Breakfast Bake',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sheet-pan-sausage-and-egg-breakfast-bake-1608662384.jpg?crop=0.669xw:1.00xh;0.205xw,0&resize=768:*',
        recipe: "Heat oven to 400°F. On large rimmed baking sheet, roast sausages and bacon, 15 minutes. In large bowl, toss mushrooms, tomatoes, and garlic with oil and a pinch each of salt and pepper. Add to baking sheet and roast 10 minutes. Make wells among vegetables and crack 1 egg into each space; return to oven and roast until meat is cooked through and egg whites are opaque throughout, 8 to 10 minutes more. Sprinkle with parsley and serve with toast if desired.",
        source: 'https://www.goodhousekeeping.com/food-recipes/a34464150/sheet-pan-breakfast-bake-recipe/'
    },
    {
        id: 5,
        name: 'Blender Pancakes',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/blender-pancakes-1641506592.jpg?crop=0.507xw:0.508xh;0.253xw,0.258xh&resize=768:*',
        recipe: "In a blender, blend all ingredients through salt, except for additional fruit or corn for cooking, until smooth. Transfer batter to a bowl and stir in whole fruit or corn kernels. Heat a 12-inch nonstick skillet on medium until hot; brush lightly with melted butter. In batches, scoop batter by 1/4-cupfuls into skillet. Cook 2 to 3 minutes or until bubbles appear and edges are dry. With a spatula, turn; cook 2 minutes more.",
        source: 'https://www.goodhousekeeping.com/food-recipes/a38684364/blender-pancakes-recipe/'
    }
],
[
    {
        id: 1,
        name: 'Chicken Waldorf salad wraps',
        img: 'https://img.taste.com.au/3QShdElR/w720-h480-cfill-q80/taste/2021/12/shredded-chicken-waldorf-salad-wraps-175796-1.jpg',
        recipe: "Combine the kale slaw (reserve dressing from the packet for another use), apple and almonds in a bowl. Combine the yoghurt and lemon juice in a separate bowl. Top the wrap with the chicken, yoghurt mixture and slaw mixture. Roll up to enclose filling.",
        source: 'https://www.taste.com.au/recipes/chicken-waldorf-salad-wraps-recipe/crujsbpn?r=recipes/easylunchrecipes&c=df063fba-403e-4e3e-96f9-e4aa7b444dd6/Easy%20lunch%20recipes'
    },
    {
        id: 2,
        name: 'Mexican prawn cocktail',
        img: 'https://img.taste.com.au/gxxspzJb/w720-h480-cfill-q80/taste/2021/12/mexican-prawn-cocktail-175828-2.jpg',
        recipe: "Combine the tomato, cucumber, jalapeno, onion, coriander, tomato juice, lime juice and tabasco in a bowl. Spoon the tomato mixture among the avocado halves. Top with the prawns and sprinkle with feta. Serve with corn chips.",
        source: 'https://www.taste.com.au/recipes/mexican-prawn-cocktail-recipe/y3bdoxn6?r=recipes/easylunchrecipes&c=df063fba-403e-4e3e-96f9-e4aa7b444dd6/Easy%20lunch%20recipes'
    },
    {
        id: 3,
        name: 'Roast vegie bruschetta',
        img: 'https://img.taste.com.au/yvIL6CtA/w720-h480-cfill-q80/taste/2021/09/roast-vegie-bruschetta-173603-1.jpg',
        recipe: "Rub toasted bread with a cut garlic clove, or spread with leftover dip=1], pesto or mayonnaise, then load it up with leftover roast vegetables, cheeses, cooked meats, tomatoes and beans – basically anything goes!",
        source: 'https://www.taste.com.au/recipes/roast-vegie-bruschetta-recipe/yl46ez9c?r=recipes/easylunchrecipes&c=df063fba-403e-4e3e-96f9-e4aa7b444dd6/Easy%20lunch%20recipes'
    },
    {
        id: 4,
        name: 'Spicy salmon rice bowl',
        img: 'https://img.taste.com.au/GDObvUrY/w720-h480-cfill-q80/taste/2021/10/spicy-salmon-rice-bowl-recipe-174173-1.jpg',
        recipe: "Brush the olive oil over the salmon fillet. Place in an air fryer and cook at 180C for 8 minutes or until cooked to your liking. Place rice in a microwave-safe bowl. Top with the ice cube and cover with a sheet of baking paper. Microwave on High for 1 minute or until warmed through. Remove baking paper from rice. Discarb ice cube. Top with salmon. Use a fork to mash the salmon and rice until combined. Drizzle over soy sauce, chilli sauce and mayonnaise, to taste. Stir to combine. Top with avocado, kimchi and seasoning. Serve with seaweed sheets.",
        source: 'https://www.taste.com.au/recipes/spicy-salmon-rice-bowl-recipe/ckt9p6dp?r=recipes/easylunchrecipes&c=df063fba-403e-4e3e-96f9-e4aa7b444dd6/Easy%20lunch%20recipes'
    },
    {
        id: 5,
        name: 'Healthy chicken and vegetable burgers',
        img: 'https://img.taste.com.au/GDObvUrY/w720-h480-cfill-q80/taste/2021/10/spicy-salmon-rice-bowl-recipe-174173-1.jpg',
        recipe: "Squeeze excess moisture from the carrot and zucchini. Place in a large bowl. Add the chicken, beans, cumin and 1 tsp chilli paste. Season. Stir until well combined. Divide mixture into 4 portions and shape into 2cm-thick patties. Lightly spray a barbecue or chargrill pan with oil. Preheat on high. Cook the patties for 4 minutes each side or until golden and cooked through. Meanwhile, combine the yoghurt, lemon juice and remaining chilli paste in a bowl. Top each bread roll half with tomato, a patty and kale slaw (reserve dressing from the packet for another use). Drizzle over the yoghurt sauce to serve.",
        source: 'https://www.taste.com.au/recipes/healthy-chicken-vegetable-burgers-recipe/kgt2z6hc?r=recipes/easylunchrecipes&c=df063fba-403e-4e3e-96f9-e4aa7b444dd6/Easy%20lunch%20recipes'
    }
],
[
    {
        id: 1,
        name: 'Chicken pasta bake',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken_pasta_bake-06fe2d6.jpg?quality=90&webp=true&resize=440,400',
        recipe: "STEP 1 - Heat 2 tbsp of the oil in a pan over a medium heat and fry the onion gently for 10-12 mins. Add the garlic and chilli flakes and cook for 1 min. Tip in the tomatoes and sugar and season to taste. Simmer uncovered for 20 mins or until thickened, then stir through the mascarpone. STEP 2 - Heat 1 tbsp of oil in a non-stick frying pan. Season the chicken and fry for 5-7 mins or until the chicken is cooked through. STEP 3 - Heat the oven to 220C/200C fan/gas 7. Cook the penne following pack instructions. Drain and toss with the remaining oil. Tip the pasta into a medium sized ovenproof dish. Stir in the chicken and pour over the sauce. Top with the cheddar, mozzarella and parsley. Bake for 20 mins or until golden brown and bubbling. ",
        source: 'https://www.bbcgoodfood.com/recipes/chicken-pasta-bake'
    },
    {
        id: 2,
        name: 'Herby fish fingers with Chinese-style rice',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/herby-fish-fingers-with-rice-440-400-351c31b.jpg?quality=90&webp=true&resize=440,400',
        recipe: "STEP 1 - Cook the rice in a pan of water for 25 mins, adding the peas and beans for the last 6 mins. Drain, then return to the pan and stir in the spring onions, chilli flakes, all but 1 tbsp chopped coriander, the tamari and sesame oil. Cover. STEP 2 - Meanwhile, heat a large non-stick pan with the rapeseed oil Beat the eggs with the remaining 1 tbsp coriander. Cut the fish into chunky strips, then coat them in the egg and fry in the oil for a couple of mins each side until golden. Remove the fish from the pan and tip in the rice with any remaining egg and stir. Serve in bowls, topped with the fish.",
        source: 'https://www.bbcgoodfood.com/recipes/herby-fish-fingers-chinese-style-rice'
    },
    {
        id: 3,
        name: 'Easy-to-scale cheesy fish pie with kale',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/fish_pie-850c098.jpg?quality=90&webp=true&resize=440,400',
        recipe: "STEP 1 - Tip the potatoes into a pan, cover with hot water from the kettle and add a pinch of salt. Simmer for 15-20 mins until tender, then drain and leave to steam-dry.STEP 2 - Meanwhile, warm the butter in a heavy-based pan over a low heat. Add the flour and stir until you have a paste. Gradually whisk in 200ml milk until you have a thick white sauce. Simmer for 3-4 mins, stirring. Season, then stir in the mustard and half the cheese, and continue to stir until the cheese has melted. Fold in the fish, peas and kale, and cook for 8 mins more, or until the kale wilts, the fish is just cooked and the prawns are starting to turn pink. STEP 3 - Heat the grill to medium-high. Mash the potatoes with the spring onion and 1 tbsp milk. Fold in the remaining cheese and season well. STEP 4 - Tip the filling into a heatproof dish and spoon the cheesy mash on top, swirling it with a fork until the filling is completely covered. Sprinkle over the parmesan and grill for 10-15 mins until the pie is golden and bubbling. Serve with a green salad, if you like. Uncooked pie, well covered in the dish, will keep in the freezer for up to three months.",
        source: 'https://www.bbcgoodfood.com/recipes/easy-scale-cheesy-fish-pie-kale'
    },
    {
        id: 4,
        name: 'Pulled pork tacos with pineapple salsa',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/pulled-pork-pineapple-tacos-2a69420.jpg?quality=90&webp=true&resize=440,400',
        recipe: "STEP 1 - Put the pork in a large, lidded ovenproof dish with the remaining ingredients and mix well to coat. If you can, chill and marinate overnight. STEP 2 - Heat the oven to 140C/120C fan/gas 1. Put the lid on the dish and cook on the middle shelf for 4 hrs. Check after 2 hrs and spoon over the juices. Check the meat is tender by pulling it apart with two forks. If it resists, cook for 1-2 hrs more. STEP 3 - Mix the ingredients for the salsa in a bowl and warm the tacos. Shred the pork and remove any fat or sinew. Serve with the cabbage, avocado, soured cream and salsa.",
        source: 'https://www.bbcgoodfood.com/recipes/pulled-pork-tacos-pineapple-salsa'
    },
    {
        id: 5,
        name: 'Cheesy ham hock, spinach & ricotta lasagne',
        img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/cheesy_ham_hock_spinach_ricotta_lasagne-ba32dc8.jpg?quality=90&webp=true&resize=440,400',
        recipe: "STEP 1 - Melt the butter in a pan until foaming, then stir in the flour to make a paste. Cook for 2 mins. Remove from the heat and gradually whisk in the milk. Add the bay leaf, return to the heat, and bring to a simmer. Cook for 4-5 mins, whisking continuously until thickened. Remove from the heat and whisk in 50g parmesan, the mustard and cayenne pepper. Season to taste. STEP 2 - Put the spinach in a large pan with 50ml boiling water, cover and leave for 2-3 mins to wilt. Drain and leave to cool. Put the spinach in a clean tea towel and squeeze out any excess water. Transfer to a food processor and pulse to roughly chop, then add the ricotta and pulse again to combine. Grate in some nutmeg, then season. STEP 3 - Heat the oven to 200C/180C fan/gas 6. Remove the bay leaf from the sauce, then spoon a quarter into the bottom of a 24 x 28cm baking dish. Top with a third of the ricotta and spinach mixture, a third of the ham, then 4 lasagne sheets (overlap them slightly if needed). Repeat with the remaining ingredients, finishing with a layer of sauce. Top with the remaining parmesan and the mozzarella. Bake for 45-50 mins or until golden, covering halfway through if it’s starting to brown.",
        source: 'https://www.bbcgoodfood.com/recipes/cheesy-ham-hock-spinach-ricotta-lasagne'
    },
],
[
    {
        id: 1,
        name: 'Pecan chocolate bread and butter pudding',
        img: 'https://img.delicious.com.au/l-sP0yDc/del/2020/08/pecan-chocolate-bread-and-butter-pudding-137408-2.jpg',
        recipe: "1.Preheat oven to 160°C. Grease a 25cm (1.25L capacity) round baking dish and line the base and side with baking paper (the lining here is optional). 2.Spread both sides of the bread with butter and cut each slice in half widthwise. Set aside. 3.Place the eggs and sugar in a large bowl and whisk until combined, then stir in cocoa and half of the chocolate. 4.Place the cream, vanilla and orange zest in a small saucepan over medium-high heat and bring just to a simmer. While stirring gently with a whisk, pour the hot cream mixture over the egg mixture and stir continuously until the chocolate has melted. Stir in the milk to cool the mixture, strain through a fine sieve and set aside. 5.Arrange bread upright in prepared pan, sprinkling pecans, sultanas and remaining chocolate between each piece. Pour chocolate cream mixture over, making sure all bread is coated. Set aside for 15-20 minutes for bread to soak up mixture. Bake for 35-40 minutes until edges are set but centre has a wobble. Remove from oven and set aside to cool slightly. Dust with cocoa and serve with ice cream.",
        source: 'https://www.delicious.com.au/recipes/pecan-chocolate-bread-butter-pudding-recipe/a89p7dzo?r=recipes/collections/77cijfrr'
    },
    {
        id: 2,
        name: 'Pecan baklava rolls',
        img: 'https://img.delicious.com.au/wyAFEMUT/del/2020/09/pecan-baklava-roll-138350-1.jpg',
        recipe: "1.Preheat oven to 150°C. For the syrup, place all ingredients and 300ml water in a medium saucepan over medium-high heat. Bring to the boil. Reduce heat to medium-low and cook, stirring, for 3-5 minutes until slightly thickened. Remove from heat and cool. 2.Place crushed pecan in a bowl with the spices and stir to combine. 3.As filo pastry dries out quickly, it is best to work with a few sheets at a time and then cover the rest with a lightly damp tea towel until ready to use. Brush a sheet of filo with ghee, then sprinkle about 2 tbs of nut and spice mixture on top. Layer with another sheet of filo, brush with ghee and sprinkle over 2 tbs nut mixture. Repeat this process until you have layered 5 sheets of filo with nut and spice mixture. Roll filo into a long log lengthways. Make sure that the roll is not too loose or too tight. Repeat until you have made 4 logs. 4.Cut each log into 2.5cm-wide rounds. Arrange pieces close together with cut sides facing up in a large baking tray with high sides. Bake for 1 hour or until golden brown. Pour the cooled syrup over the hot baklava and let it rest. Sprinkle over extra crushed pecans to garnish.",
        source: 'https://www.delicious.com.au/recipes/pecan-baklava-roll-recipe/7pqb3cg6?r=recipes/collections/77cijfrr'
    },
    {
        id: 3,
        name: 'Easy lemon meringue pie',
        img: 'https://img.delicious.com.au/t-vFtpQM/del/2020/09/easy-peasy-lemon-meringue-pie-139330-2.jpg',
        recipe: "1.For the base, place the biscuits in a food processor and blitz to crumbs. Add the butter and blitz again until the mixture looks like wet sand. Press the buttery rubble evenly into a 25cm top x 21cm base (5cm deep) fluted loose-based pie dish. Place in the freezer for 10-15 minutes to harden. 2.Meanwhile, for the lemon curd, soak the gelatine in cold water for 5 minutes. Remove the gelatine from the bowl, discard water, then return the gelatine to the bowl, cover with 2 tbs boiling water and stir until dissolved. 3.Place the egg yolks in the bowl of a stand mixer with the whisk attachment and whisk on high speed until pale and thickened. Reduce speed to low and gradually whisk in the condensed milk, lemon juice, zest and salt. Add the gelatine and whisk until combined. Pour the creamy lemon custard into the crust, levelling it out with the back of a spoon, and set in the fridge to chill. It will keep happily for 1-2 days. Lift the pie crust out of its pan; if cold from the fridge, it should come out easily. 4.For the meringue, place the eggwhites in the cleaned bowl of a stand mixer with the whisk attachment and whisk on high speed until soft peaks form. Gradually add the sugar, spoonful by spoonful, beating all the while. Keep whisking the meringue until it becomes thick and glossy, then add the lemon juice and vanilla extract. Whisk until well combined. 5.Dollop the meringue onto the pie and spread it out so all the glossy, sunny filling is completely covered. Use a spoon to make small peaks in the meringue, then use a kitchen blowtorch to caramelise it, so the tips are lightly golden and burnished. The pie, in its fully assembled glorious form, will happily sit in the fridge for up to 1 day. Best served chilled.",
        source: 'https://www.delicious.com.au/recipes/easy-lemon-meringue-pie-recipe/qdmqyrzy?r=recipes/collections/77cijfrr'
    },
    {
        id: 4,
        name: 'Burnt butter, almond and honey cake',
        img: 'https://img.delicious.com.au/l-x5GcWF/del/2020/07/burnt-butter-almond-and-honey-cake-135325-2.jpg',
        recipe: "1.Preheat oven to 160°C. Grease a 20cm x 30cm cake pan and line the base and sides with baking paper. 2.Place butter in a saucepan and cook over medium-high heat for 5 minutes or until nut brown. Remove from heat and cool to room temperature. 3.Place eggs, sugar, vanilla and half the honey in a stand mixer with the whisk attachment and whisk for 5 minutes or until pale and doubled in volume. Fold in almond meal, flour, baking powder, lime zest and juice and a pinch of salt flakes. Pour in two-thirds of burnt butter (stir butter well before adding) and fold to combine. Pour into prepared pan and smooth top. 4.Combine chopped almonds, remaining burnt butter, remaining 90g honey and a pinch of salt flakes in a bowl. Mix well then scatter evenly over batter. Bake on middle shelf, turning occasionally, for 40-45 minutes until golden brown and the centre springs back when lightly pressed. Drizzle over extra honey and cool on a wire rack in pan. Serve at room temperature.",
        source: 'https://www.delicious.com.au/recipes/burnt-butter-almond-honey-cake-recipe/dhaedx0t?r=recipes/collections/77cijfrr'
    },
    {
        id: 5,
        name: 'Chocolate and ginger teacake',
        img: 'https://img.delicious.com.au/KQ0S9l6z/del/2020/06/chocolate-and-ginger-teacake-with-cream-cheese-frosting-134624-2.jpg',
        recipe: "1.Preheat oven to 180°C. Grease base and sides of a 3cm-deep 30cm x 20cm pan and line it with baking paper. 2.Place teabags, golden syrup, fresh ginger and 1 cup (250ml) boiling water in a bowl, steep for 3 minutes, then remove teabags, squeezing out excess liquid. 3.Sift together flour, baking powder, cocoa, ground ginger and mixed spice into a bowl. 4.In a separate bowl, whisk eggs and sugar for 3 minutes or until sugar has dissolved and mixture has lightened. Whisk in oil until fully combined, followed by the tea mixture. 5.Make a well in dry ingredients and mix in wet ingredients with a wooden spoon until just combined (don’t overmix). Pour batter into pan and smooth with a spatula. Bake for 35-40 minutes until cake springs back to a light touch. Cool in pan for 15 minutes, then turn out onto a rack to cool completely. 6.For frosting, beat all the ingredients together in a stand mixer fitted with the paddle attachment until smooth. Spread over cake and scatter with ginger.",
        source: 'https://www.delicious.com.au/recipes/chocolate-ginger-teacake-cream-cheese-frosting-recipe/38jbcuwx?r=recipes/collections/77cijfrr'
    },
]
];

/*------- Select Elements -------*/
const navLinks = document.querySelector('.nav-links');
const toggleBtn = document.querySelector('.toggle-btn');
const navBtn = document.querySelectorAll('.nav-link');

const img = document.querySelector('.recipe-img');
const recipeName = document.querySelector('.name');
const recipeInfo = document.querySelector('.recipe');
const sourceLink = document.querySelector('.span');
const randomBtn = document.querySelector('.random-btn');
const originalLink = document.querySelector('.no-see');

const breakfastContainer = document.getElementById('breakfast');
const lunchContainer = document.getElementById('lunch');
const dinnerContainer = document.getElementById('dinner');
const dessertContainer = document.getElementById('dessert');
const mealArray = [breakfastContainer, lunchContainer, dinnerContainer, dessertContainer];

const fullRecipeBtn = document.querySelectorAll('.fullRecipe-btn');
const fullRecipe = document.querySelector('.full-recipe');

/*------- Event Listeners -------*/
//Toggle Bar
toggleBtn.addEventListener('click', function(){
    navLinks.classList.toggle('show-links');
});

navBtn.forEach(nav => {
    nav.addEventListener('click',function(){
        navLinks.classList.remove('show-links')
    });;
});

//Generate Recipe
randomBtn.addEventListener('click', function(){
    let num = randomIndex(recipes.length);
    let mealType = recipes[num];
    let otherNum = randomIndex(mealType.length);
    let meal = mealType[otherNum];

    if(!originalLink.classList.contains('now-see')){
    originalLink.classList.add('now-see');
    };

    img.src = meal.img;
    recipeName.innerText = meal.name;
    recipeInfo.innerText = meal.recipe;
    sourceLink.href = meal.source;
})

const randomIndex = (lengths) => {
    let val = Math.floor(Math.random()*lengths);
    return val;
}

//View Recipe
fullRecipeBtn.forEach(something=>{
    something.addEventListener('click', function(){
        fullRecipe.classList.add('.show-fullRecipe');
    })
})



