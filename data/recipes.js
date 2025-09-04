const allRecipes = [
    {
        id: 'spicy-tofu-stir-fry',
        title: "Spicy Tofu Stir-Fry",
        description: "A quick and flavorful stir-fry with crispy tofu and fresh vegetables, perfect for a weeknight meal.",
        image: "https://zenaskitchen.com/wp-content/uploads/2022/01/zk-photos-05.jpg",
        ingredients: [
            "1 lb firm tofu, pressed and cubed",
            "2 tbsp soy sauce",
            "1 tbsp cornstarch",
            "1 tbsp sesame oil",
            "1 red bell pepper, sliced",
            "1 cup broccoli florets",
            "3 cloves garlic, minced",
            "1 tbsp grated ginger",
            "1/4 cup stir-fry sauce",
            "1/2 tsp red pepper flakes (adjust to taste)"
        ],
        instructions: [
            "In a bowl, toss the tofu cubes with soy sauce and cornstarch until coated.",
            "Heat sesame oil in a large skillet or wok over medium-high heat. Add the tofu and cook until golden brown and crispy on all sides. Remove from the pan.",
            "Add the bell pepper and broccoli to the same pan. Stir-fry for 3-4 minutes until crisp-tender.",
            "Add the garlic and ginger, cooking for one minute until fragrant.",
            "Pour in the stir-fry sauce and red pepper flakes. Bring to a simmer.",
            "Return the tofu to the pan and toss to coat with the sauce. Cook for 1-2 minutes until heated through.",
            "Serve hot with rice or noodles."
        ]
    },
    {
        id: 'classic-margherita-pizza',
        title: "Classic Margherita Pizza",
        description: "Homemade pizza with fresh basil, mozzarella, and a tangy tomato sauce. Simple yet incredibly delicious.",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza.jpg",
        ingredients: [
            "1 ball of pizza dough",
            "1/2 cup tomato sauce",
            "8 oz fresh mozzarella, sliced",
            "A handful of fresh basil leaves",
            "1 tbsp olive oil",
            "Salt and black pepper to taste"
        ],
        instructions: [
            "Preheat your oven to the highest temperature (usually 500°F or 260°C).",
            "On a floured surface, stretch or roll out the pizza dough into a circle.",
            "Spread the tomato sauce evenly over the dough, leaving a small border for the crust.",
            "Arrange the mozzarella slices and basil leaves on top. Drizzle with olive oil and sprinkle with salt and pepper.",
            "Bake for 10-15 minutes, or until the crust is golden brown and the cheese is melted and bubbly.",
            "Let it cool for a few minutes before slicing and serving."
        ]
    },
    {
        id: 'chocolate-lava-cake',
        title: "Chocolate Lava Cake",
        description: "Rich, decadent chocolate cakes with a molten center that oozes out upon the first cut.",
        image: "https://www.cathysglutenfree.com/wp-content/uploads/2021/01/molten-chocolate-lava-cake-f.jpg",
        ingredients: [
            "4 oz unsalted butter",
            "4 oz bittersweet chocolate, chopped",
            "2 large eggs",
            "2 large egg yolks",
            "1/4 cup sugar",
            "1/4 tsp salt",
            "2 tbsp all-purpose flour"
        ],
        instructions: [
            "Preheat oven to 425°F (220°C). Grease and flour four small ramekins.",
            "Melt the butter and chocolate together in a heatproof bowl set over a pot of simmering water. Stir until smooth. Remove from heat and let cool slightly.",
            "In a separate bowl, whisk the eggs, egg yolks, sugar, and salt until thick and pale.",
            "Gently fold the chocolate mixture into the egg mixture. Sift the flour over the batter and fold until just combined.",
            "Divide the batter among the prepared ramekins.",
            "Bake for 12-14 minutes, or until the edges are set but the center is still soft.",
            "Carefully invert each cake onto a plate and serve immediately."
        ]
    },
    {
        id: 'creamy-mushroom-risotto',
        title: "Creamy Mushroom Risotto",
        description: "A classic Italian dish with Arborio rice, sautéed mushrooms, and parmesan cheese for a perfect creamy texture.",
        image: "https://www.lilvienna.com/wp-content/uploads/Recipe-easy-mushroom-risotto.jpg",
        ingredients: [
            "6 cups vegetable broth",
            "2 tbsp olive oil",
            "1 tbsp butter",
            "1 large shallot, finely chopped",
            "2 cloves garlic, minced",
            "8 oz assorted mushrooms, sliced",
            "1.5 cups Arborio rice",
            "1/2 cup dry white wine",
            "1/2 cup grated parmesan cheese",
            "2 tbsp chopped fresh parsley",
            "Salt and black pepper to taste"
        ],
        instructions: [
            "In a saucepan, bring the vegetable broth to a simmer and keep it warm over low heat.",
            "In a separate large pot, heat the olive oil and butter over medium heat. Add the shallot and cook until softened. Add the garlic and mushrooms, cooking until the mushrooms are golden.",
            "Add the Arborio rice and stir for one minute until the grains are lightly toasted.",
            "Pour in the white wine and stir until it's fully absorbed.",
            "Add one cup of the warm broth to the rice, stirring constantly until it's absorbed. Continue adding broth, one cup at a time, allowing each addition to be absorbed before adding the next. This will take about 20-25 minutes.",
            "Once the rice is cooked al dente (tender with a slight bite), remove from heat. Stir in the parmesan cheese and fresh parsley. Season with salt and pepper.",
            "Serve immediately."
        ]
    },
    {
        id: 'authentic-thai-green-curry',
        title: "Authentic Thai Green Curry",
        description: "A fragrant and spicy curry with a blend of coconut milk, green chilies, lemongrass, and fresh vegetables.",
        image: "https://www.thecookingcollective.com.au/wp-content/uploads/2023/05/Thai-green-chicken-curry-3.jpg",
        ingredients: [
            "2 tbsp vegetable oil",
            "4 tbsp Thai green curry paste",
            "1 can (13.5 oz) coconut milk",
            "1 cup vegetable broth",
            "1 lb chicken or firm tofu, cubed",
            "1 red bell pepper, sliced",
            "1 cup green beans, trimmed",
            "A handful of fresh basil leaves",
            "1 tbsp fish sauce or soy sauce",
            "1 tsp brown sugar"
        ],
        instructions: [
            "Heat oil in a large pot or wok over medium heat. Add the green curry paste and cook for 1 minute until fragrant.",
            "Pour in about a quarter of the coconut milk and stir to combine with the paste. Cook until the mixture thickens slightly and the oil separates.",
            "Add the remaining coconut milk and the vegetable broth. Bring to a gentle simmer.",
            "Add the chicken or tofu, bell pepper, and green beans. Simmer for 10-15 minutes, until the vegetables are tender and the protein is cooked through.",
            "Stir in the fish sauce and brown sugar. Taste and adjust seasoning as needed.",
            "Add the fresh basil leaves just before serving. Serve hot with steamed jasmine rice."
        ]
    },
    {
        id: 'lentil-soup',
        title: "Lentil Soup",
        description: "A hearty and nutritious soup with lentils, carrots, and celery, seasoned with herbs for a comforting flavor.",
        image: "https://thegreekfoodie.com/wp-content/uploads/2021/01/Greek_lentil_soup_SQ.jpg",
        ingredients: [
            "1 tbsp olive oil",
            "1 large onion, chopped",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "2 cloves garlic, minced",
            "1 tsp dried thyme",
            "1 cup brown or green lentils, rinsed",
            "6 cups vegetable broth",
            "1 can (14.5 oz) diced tomatoes",
            "1 bay leaf",
            "Salt and black pepper to taste",
            "Fresh parsley for garnish (optional)"
        ],
        instructions: [
            "Heat olive oil in a large pot over medium heat. Add the onion, carrots, and celery. Cook for 5-7 minutes until the vegetables are softened.",
            "Stir in the garlic and dried thyme, cooking for one minute until fragrant.",
            "Add the rinsed lentils, vegetable broth, diced tomatoes, and bay leaf. Bring the mixture to a boil.",
            "Reduce the heat to a simmer, cover the pot, and cook for 30-40 minutes, or until the lentils are tender.",
            "Remove the bay leaf. Season with salt and pepper to taste.",
            "Ladle the soup into bowls, garnish with fresh parsley if desired, and serve hot."
        ]
    },
    {
        id: 'spaghetti-carbonara',
        title: "Spaghetti Carbonara",
        description: "A classic Roman pasta dish with a creamy sauce made from eggs, hard cheese, cured pork, and black pepper.",
        image: "https://www.spendwithpennies.com/wp-content/uploads/2023/04/1200-Spaghetti-Carbonara-2-SpendWithPennies.jpg",
        ingredients: [
            "1 lb spaghetti",
            "4 large egg yolks",
            "1/2 cup grated Pecorino Romano cheese",
            "1/2 lb guanciale or pancetta, diced",
            "1/2 tsp black pepper"
        ],
        instructions: [
            "Cook the spaghetti in a large pot of salted boiling water until al dente. Reserve 1 cup of the pasta water.",
            "In a bowl, whisk together the egg yolks, Pecorino Romano cheese, and black pepper.",
            "In a large skillet, cook the guanciale over medium heat until crispy. Remove the pork with a slotted spoon and set aside, leaving the rendered fat in the pan.",
            "Add the cooked spaghetti to the skillet with the fat and toss to coat. Turn off the heat.",
            "Pour the egg mixture into the skillet and toss quickly to coat the pasta. Add a splash of the reserved pasta water to create a creamy sauce. The heat from the pasta will cook the eggs without scrambling them.",
            "Stir in the crispy guanciale and serve immediately."
        ]
    },
    {
        id: 'lemon-herb-roasted-chicken',
        title: "Lemon Herb Roasted Chicken",
        description: "A simple and delicious roasted chicken recipe, seasoned with fresh herbs and lemon for a juicy, flavorful result.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTr2T99aSp0ZKPzPJJFGexfddMdo2syuGN_g&s",
        ingredients: [
            "1 whole chicken (about 4 lbs)",
            "1 lemon, halved",
            "1 head of garlic, halved horizontally",
            "1 bunch of fresh herbs (thyme, rosemary)",
            "2 tbsp olive oil",
            "Salt and black pepper"
        ],
        instructions: [
            "Preheat oven to 425°F (220°C).",
            "Pat the chicken dry with paper towels. Season the cavity with salt and pepper, then stuff with one lemon half, garlic, and most of the herbs.",
            "Rub the chicken with olive oil and season the skin generously with salt and pepper.",
            "Tie the legs together with kitchen twine and tuck the wing tips under the body.",
            "Place the chicken in a roasting pan and roast for 1 hour to 1 hour and 20 minutes, or until the internal temperature reaches 165°F (74°C) at the thickest part of the thigh.",
            "Let the chicken rest for 10-15 minutes before carving and serving."
        ]
    },
    {
        id: 'chocolate-chip-cookies',
        title: "Chocolate Chip Cookies",
        description: "The perfect classic chocolate chip cookie recipe, resulting in soft centers and slightly crispy edges.",
        image: "https://b3075642.smushcdn.com/3075642/wp-content/uploads/Canva-Chocolate-Chip-Cookies-scaled.jpg?lossy=1&strip=1&webp=1",
        ingredients: [
            "1 cup unsalted butter, softened",
            "1 cup packed brown sugar",
            "1/2 cup granulated sugar",
            "2 large eggs",
            "1 tsp vanilla extract",
            "2 1/4 cups all-purpose flour",
            "1 tsp baking soda",
            "1/2 tsp salt",
            "2 cups chocolate chips"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "In a large bowl, cream together the softened butter, brown sugar, and granulated sugar until light and fluffy.",
            "Beat in the eggs one at a time, then stir in the vanilla extract.",
            "In a separate bowl, whisk together the flour, baking soda, and salt. Gradually add the dry ingredients to the wet ingredients, mixing until just combined.",
            "Fold in the chocolate chips.",
            "Drop rounded spoonfuls of dough onto ungreased baking sheets.",
            "Bake for 9-11 minutes, or until the edges are golden brown. Let cool on the baking sheet for a few minutes before transferring to a wire rack to cool completely."
        ]
    },
    {
        id: 'beef-and-broccoli',
        title: "Beef and Broccoli",
        description: "A takeout classic made at home. Tender beef slices and crisp broccoli florets in a savory, garlic-ginger sauce.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y3oIdKm56ZPf6YJiWUthjD9BziRQydishg&s",
        ingredients: [
            "1 lb flank steak, sliced thin",
            "1 tbsp soy sauce",
            "1 tsp cornstarch",
            "1/2 lb broccoli florets",
            "2 tbsp vegetable oil",
            "2 cloves garlic, minced",
            "1 tsp grated ginger",
            "1/2 cup beef broth",
            "2 tbsp oyster sauce",
            "1 tsp brown sugar"
        ],
        instructions: [
            "In a bowl, toss the beef slices with soy sauce and cornstarch. Marinate for 15 minutes.",
            "Blanch broccoli in boiling water for 1-2 minutes. Drain and set aside.",
            "Heat 1 tbsp oil in a wok or skillet over high heat. Cook beef in a single layer until browned. Remove from the pan.",
            "Add remaining oil to the pan. Sauté garlic and ginger for 30 seconds.",
            "Stir in beef broth, oyster sauce, and brown sugar. Bring to a simmer.",
            "Return the beef and blanched broccoli to the pan. Toss to coat and cook for 1-2 minutes until heated through. Serve hot with rice."
        ]
    },
    {
        id: 'chicken-noodle-soup',
        title: "Chicken Noodle Soup",
        description: "A comforting and classic homemade soup with tender chicken, vegetables, and egg noodles. Perfect for a chilly day or when you're feeling under the weather.",
        image: "https://feelgoodfoodie.net/wp-content/uploads/2023/04/Chicken-Noodle-Soup-10.jpg",
        ingredients: [
            "2 tbsp olive oil",
            "1 onion, chopped",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "2 cloves garlic, minced",
            "8 cups chicken broth",
            "1 lb boneless, skinless chicken breasts",
            "4 oz egg noodles",
            "1 tsp dried thyme",
            "Salt and black pepper"
        ],
        instructions: [
            "Heat oil in a large pot over medium heat. Add onion, carrots, and celery; cook until softened.",
            "Stir in garlic and thyme; cook for 1 minute until fragrant.",
            "Pour in chicken broth and bring to a boil. Add chicken breasts, then reduce heat and simmer for 15-20 minutes, or until chicken is cooked through.",
            "Remove chicken from the pot and shred. Add noodles to the simmering broth and cook according to package directions.",
            "Return shredded chicken to the pot. Season with salt and pepper to taste. Serve hot."
        ]
    },
    {
        id: 'shrimp-scampi',
        title: "Garlic Shrimp Scampi",
        description: "A simple yet elegant pasta dish featuring tender shrimp and angel hair pasta in a buttery, garlic, and white wine sauce.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0VVZ2d1kYqpNAOZETkPWmnckGjTbatnHCQ&s",
        ingredients: [
            "1 lb large shrimp, peeled and deveined",
            "8 oz angel hair pasta",
            "4 tbsp unsalted butter",
            "4 cloves garlic, minced",
            "1/4 cup dry white wine",
            "Juice of 1 lemon",
            "1/4 cup fresh parsley, chopped",
            "Salt and red pepper flakes to taste"
        ],
        instructions: [
            "Cook pasta according to package directions. Reserve 1/2 cup of pasta water before draining.",
            "While pasta cooks, melt butter in a large skillet over medium heat. Add minced garlic and red pepper flakes; cook for 1 minute.",
            "Add shrimp to the skillet and cook for 2-3 minutes until pink and opaque. Remove shrimp from the pan and set aside.",
            "Pour white wine and lemon juice into the skillet. Bring to a simmer, scraping up any browned bits.",
            "Add the cooked pasta and reserved pasta water to the skillet. Toss to coat. Add the shrimp back to the pan and toss with fresh parsley. Serve immediately."
        ]
    },
    {
        id: 'tacos-al-pastor',
        title: "Tacos Al Pastor",
        description: "A Mexican classic with thinly sliced pork marinated in a mix of chiles and spices, cooked with pineapple for a sweet and savory flavor.",
        image: "https://insanelygoodrecipes.com/wp-content/uploads/2025/01/copycat-chilis-molten-lava-cake-featured.jpg",
        ingredients: [
            "2 lbs pork shoulder, thinly sliced",
            "1 can (7 oz) chipotle peppers in adobo",
            "1/4 cup white vinegar",
            "2 tbsp achiote paste",
            "1 tsp cumin",
            "1 tsp oregano",
            "1 onion, chopped",
            "1 cup fresh pineapple chunks",
            "Corn tortillas, for serving"
        ],
        instructions: [
            "In a blender, combine chipotle peppers, vinegar, achiote paste, cumin, oregano, and half the onion. Blend until smooth.",
            "Marinate the pork slices in the sauce for at least 4 hours, or overnight.",
            "Heat a large skillet over medium-high heat. Add the marinated pork, remaining onion, and pineapple chunks. Cook, stirring frequently, until the pork is cooked through and lightly caramelized.",
            "Serve the pork and pineapple mixture in warm corn tortillas. Garnish with cilantro and a squeeze of lime."
        ]
    },
    {
        id: 'falafel',
        title: "Homemade Falafel",
        description: "Crispy fried patties made from spiced chickpeas and herbs. A popular Middle Eastern street food, perfect in a pita or on a salad.",
        image: "https://www.thespruceeats.com/thmb/j3o2767CVr8utwBHAGsrr_J4fQo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-falafel-2355693-Hero_01-ba33428ae8704932ba4e43b526bb81ff.jpg",
        ingredients: [
            "1 cup dried chickpeas, soaked overnight",
            "1/2 cup fresh parsley",
            "1/2 cup fresh cilantro",
            "1 onion, chopped",
            "3 cloves garlic",
            "1 tsp cumin",
            "1/2 tsp coriander",
            "1/4 tsp cayenne pepper",
            "2 tbsp all-purpose flour",
            "Vegetable oil, for frying"
        ],
        instructions: [
            "Drain the soaked chickpeas thoroughly. In a food processor, combine the chickpeas, parsley, cilantro, onion, garlic, cumin, coriander, and cayenne pepper.",
            "Pulse until the mixture is coarsely ground but not a paste. Do not over-process.",
            "Stir in the flour. Shape the mixture into small patties or balls.",
            "Heat about 1 inch of oil in a skillet or deep pot to 350°F (175°C).",
            "Fry the falafel in batches for 3-5 minutes on each side, until golden brown and crispy. Drain on a paper towel-lined plate. Serve hot."
        ]
    },
    {
        id: 'pancakes',
        title: "Fluffy Buttermilk Pancakes",
        description: "A classic breakfast staple. These pancakes are light, fluffy, and perfect for a lazy weekend morning. Serve with your favorite toppings like maple syrup or fresh berries.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8sorf8VEnkMyWOOy6WI-RTzaake7GilezJQ&s",
        ingredients: [
            "1 1/2 cups all-purpose flour",
            "2 tbsp sugar",
            "1 1/2 tsp baking powder",
            "1/2 tsp baking soda",
            "1/2 tsp salt",
            "1 1/4 cups buttermilk",
            "1/4 cup melted butter",
            "1 large egg"
        ],
        instructions: [
            "In a large bowl, whisk together the flour, sugar, baking powder, baking soda, and salt.",
            "In a separate bowl, whisk together the buttermilk, melted butter, and egg.",
            "Pour the wet ingredients into the dry ingredients and stir until just combined. Do not overmix; a few lumps are fine.",
            "Heat a lightly greased skillet or griddle over medium-high heat. Pour about 1/4 cup of batter per pancake onto the skillet.",
            "Cook for 2-3 minutes per side, or until golden brown and bubbles form on the surface. Serve immediately."
        ]
    },
    {
        id: 'grilled-cheese-sandwich',
        title: "Gourmet Grilled Cheese",
        description: "Elevate a simple sandwich with a combination of cheeses and a perfectly golden, crispy crust. The ultimate comfort food.",
        image: "https://www.chilitochoc.com/wp-content/uploads/2024/11/four-cheese-sourdough-grilled-cheese-2.jpg",
        ingredients: [
            "2 slices of sourdough bread",
            "2 tbsp softened butter",
            "1 slice of sharp cheddar cheese",
            "1 slice of Gruyère cheese"
        ],
        instructions: [
            "Spread softened butter evenly on one side of each bread slice.",
            "Place one slice of bread, butter-side down, in a skillet over medium heat.",
            "Top with cheddar and Gruyère cheese. Place the second slice of bread on top, butter-side up.",
            "Cook for 2-4 minutes until the bottom is golden brown. Flip and cook until the second side is golden and the cheese is melted and gooey.",
            "Remove from the skillet, slice in half, and serve hot."
        ]
    },
    {
        id: 'shakshuka',
        title: "Shakshuka",
        description: "A popular Middle Eastern and North African dish of eggs poached in a flavorful tomato and bell pepper sauce.",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2017/01/shakshuka.jpg",
        ingredients: [
            "1 tbsp olive oil",
            "1 onion, chopped",
            "1 red bell pepper, chopped",
            "3 cloves garlic, minced",
            "1 can (28 oz) crushed tomatoes",
            "1 tsp smoked paprika",
            "1/2 tsp cumin",
            "Pinch of red pepper flakes",
            "4 large eggs",
            "Fresh parsley or cilantro, for garnish"
        ],
        instructions: [
            "Heat olive oil in a large skillet. Add the onion and bell pepper and cook until softened, about 5-7 minutes.",
            "Add the garlic, paprika, cumin, and red pepper flakes. Cook for one minute until fragrant.",
            "Pour in the crushed tomatoes. Season with salt and pepper. Bring to a simmer and cook for 10 minutes to allow the flavors to meld.",
            "Use a spoon to make four small wells in the tomato sauce. Crack an egg into each well.",
            "Cover the skillet and cook for 5-8 minutes, or until the egg whites are set but the yolks are still runny. Garnish with fresh herbs and serve with crusty bread."
        ]
    },
    {
        id: 'chicken-tikka-masala',
        title: "Chicken Tikka Masala",
        description: "Tender chunks of marinated chicken in a creamy, spiced tomato sauce. A beloved Indian dish that's surprisingly easy to make at home.",
        image: "https://dantoombs.com/wp-content/uploads/2025/06/Chicken-tikka-masala-735x980.jpg",
        ingredients: [
            "2 lbs boneless, skinless chicken thighs, cubed",
            "1 cup plain yogurt",
            "2 tsp garam masala",
            "1 tsp turmeric",
            "1 tsp cumin",
            "1 tsp paprika",
            "1 tbsp grated ginger",
            "3 cloves garlic, minced",
            "2 tbsp butter",
            "1 onion, finely chopped",
            "1 can (15 oz) tomato sauce",
            "1/2 cup heavy cream"
        ],
        instructions: [
            "In a bowl, combine chicken, yogurt, garam masala, turmeric, cumin, paprika, ginger, and garlic. Marinate for at least 30 minutes.",
            "Heat butter in a large skillet. Add the onion and cook until softened. Stir in the remaining ginger and garlic, cooking for 1 minute.",
            "Add the tomato sauce and bring to a simmer. Stir in the marinated chicken and cook until no longer pink.",
            "Reduce heat to low and stir in the heavy cream. Simmer for 10 minutes until the sauce thickens slightly. Serve hot with naan or rice."
        ]
    },
    {
        id: 'roasted-broccoli',
        title: "Roasted Broccoli",
        description: "A simple side dish that transforms humble broccoli into a crispy, flavorful snack. Roasting brings out its natural sweetness.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOW-wTf1D_ATxN4oEpGZZzuX8hyXIHsLgb8g&s",
        ingredients: [
            "1 large head of broccoli, cut into florets",
            "2 tbsp olive oil",
            "2 cloves garlic, minced",
            "Salt and black pepper to taste",
            "Red pepper flakes (optional)"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C).",
            "In a large bowl, toss the broccoli florets with olive oil, minced garlic, salt, pepper, and red pepper flakes (if using).",
            "Spread the broccoli in a single layer on a baking sheet.",
            "Roast for 15-20 minutes, or until the florets are tender and the edges are slightly crispy and browned. Serve immediately."
        ]
    },
    {
        id: 'fried-rice',
        title: "Easy Fried Rice",
        description: "A great way to use up leftover rice and vegetables for a quick meal.",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/fried-rice-recipe.webp",
        ingredients: [
            "2 cups cooked rice (chilled)",
            "1 cup mixed frozen vegetables",
            "1 tbsp vegetable oil",
            "1 egg, beaten",
            "2 tbsp soy sauce"
        ],
        instructions: [
            "Heat oil in a large skillet or wok over medium-high heat.",
            "Add frozen vegetables and cook for 3-4 minutes. Push to one side.",
            "Pour the beaten egg into the empty space and scramble. Stir to combine with vegetables.",
            "Add the chilled rice and soy sauce. Stir-fry for 3-5 minutes, breaking up any clumps, until heated through."
        ]
    },
    {
        id: 'chicken-stir-fry',
        title: "Simple Chicken Stir-Fry",
        description: "A quick and healthy stir-fry with tender chicken and crisp veggies.",
        image: "https://www.eatingbirdfood.com/wp-content/uploads/2025/03/chicken-stir-fry-hero-new.jpg",
        ingredients: [
            "1 lb boneless, skinless chicken, sliced",
            "2 cups mixed stir-fry vegetables",
            "2 tbsp stir-fry sauce",
            "1 tbsp sesame oil"
        ],
        instructions: [
            "Heat sesame oil in a large skillet or wok over high heat. Add chicken and stir-fry until cooked through.",
            "Add the vegetables and stir-fry for 3-4 minutes until crisp-tender.",
            "Pour in the stir-fry sauce and toss to coat. Cook for 1 more minute. Serve hot."
        ]
    },
    {
        id: 'baked-potatoes',
        title: "Perfect Baked Potatoes",
        description: "A simple and comforting side dish that's crispy on the outside and fluffy on the inside.",
        image: "https://www.foodandwine.com/thmb/WmSqUqk2hR42aez4_mff5veGjlY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/How-To-Bake-A-Potato-FT-BLOG0623-1b01215c4a2c4cf9bb26f395a738a20d.jpg",
        ingredients: [
            "2 russet potatoes",
            "1 tbsp olive oil",
            "Salt and pepper"
        ],
        instructions: [
            "Preheat oven to 425°F (220°C).",
            "Scrub the potatoes clean and poke several times with a fork.",
            "Rub the potatoes with olive oil and sprinkle with salt and pepper.",
            "Bake for 45-60 minutes, or until the skin is crispy and the inside is tender. Slice open and serve with butter or sour cream."
        ]
    },
    {
        id: 'grilled-chicken',
        title: "Simple Grilled Chicken",
        description: "Juicy, flavorful grilled chicken breasts perfect for salads, sandwiches, or a main course.",
        image: "https://www.vindulge.com/wp-content/uploads/2023/04/Hot-Honey-Grilled-Chicken.jpg",
        ingredients: [
            "2 boneless, skinless chicken breasts",
            "1 tbsp olive oil",
            "1 tsp smoked paprika",
            "1/2 tsp garlic powder",
            "Salt and pepper"
        ],
        instructions: [
            "Preheat grill or grill pan to medium-high heat.",
            "Rub chicken breasts with olive oil and season with paprika, garlic powder, salt, and pepper.",
            "Grill for 6-8 minutes per side, or until cooked through and no longer pink in the center."
        ]
    },
    {
        id: 'pesto-pasta',
        title: "Quick Pesto Pasta",
        description: "A fresh and vibrant pasta dish that comes together in the time it takes to boil water.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOsXvSLqKt6DKcRc1dAjMtfTTBy_EOVfP-yg&s",
        ingredients: [
            "8 oz pasta (penne or fusilli)",
            "1/2 cup pesto sauce",
            "1/4 cup cherry tomatoes, halved",
            "2 tbsp grated Parmesan cheese"
        ],
        instructions: [
            "Cook pasta according to package directions. Drain well.",
            "Return the hot pasta to the pot. Stir in the pesto sauce, cherry tomatoes, and Parmesan cheese. Toss until everything is coated and heated through. Serve immediately."
        ]
    },
    {
        id: 'black-bean-tacos',
        title: "Easy Black Bean Tacos",
        description: "A simple and delicious vegetarian taco recipe that's packed with flavor and plant-based protein.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9xqqkwq7xVXvxRCO5n9fbstqXVkWs3gkfeg&s",
        ingredients: [
            "1 can (15 oz) black beans, rinsed",
            "1 tsp chili powder",
            "1/2 tsp cumin",
            "4 tortillas, warmed",
            "Optional toppings: shredded lettuce, salsa, sour cream, cheese"
        ],
        instructions: [
            "In a small saucepan, combine rinsed black beans, chili powder, and cumin. Heat over medium heat for 3-5 minutes, until warm.",
            "Spoon the black bean mixture into warm tortillas. Add your favorite toppings and serve."
        ]
    },
    {
        id: 'fruit-salad',
        title: "Simple Fruit Salad",
        description: "A light and refreshing mix of your favorite fruits, perfect as a snack or dessert.",
        image: "https://www.allrecipes.com/thmb/fw8nrtfdIMmtCzyhY5U8eRawyOI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14147very-easy-fruit-saladChefMo4x3-07a6310c2aab4726a1a8bef08061abfa.jpg",
        ingredients: [
            "1 cup sliced strawberries",
            "1 cup chopped melon",
            "1 cup grapes",
            "1/2 cup blueberries",
            "Juice of 1/2 lime"
        ],
        instructions: [
            "Chop all fruits into bite-sized pieces.",
            "In a large bowl, combine all the fruit. Squeeze the lime juice over the fruit and toss gently to combine.",
            "Serve chilled."
        ]
    },
    {
        id: 'egg-fried-rice',
        title: "Egg Fried Rice",
        description: "A simple, single-ingredient-focused fried rice that's great for using leftover rice.",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/egg-fried-rice-recipe.jpg",
        ingredients: [
            "2 cups cooked rice (chilled)",
            "1 tbsp vegetable oil",
            "2 large eggs, lightly beaten",
            "2 tbsp soy sauce",
            "1 green onion, sliced"
        ],
        instructions: [
            "Heat oil in a large skillet or wok. Pour in the beaten eggs and scramble them, then set aside.",
            "Add the chilled rice to the skillet and stir-fry for 2 minutes.",
            "Stir in the soy sauce and cooked eggs. Mix until heated through. Garnish with green onions before serving."
        ]
    },
    {
        id: 'veggie-omelette',
        title: "Easy Veggie Omelette",
        description: "A simple omelette packed with vegetables for a healthy start to your day.",
        image: "https://heavenlyhomecooking.com/wp-content/uploads/2021/04/Vegetable-Omelette-Recipe-Finished-1.jpg",
        ingredients: [
            "2 large eggs",
            "1/4 cup chopped bell pepper",
            "1/4 cup chopped onion",
            "1/4 cup spinach",
            "2 tbsp shredded cheese",
            "1/2 tbsp butter"
        ],
        instructions: [
            "In a bowl, whisk the eggs. Stir in salt and pepper.",
            "Melt butter in a skillet over medium heat. Add bell pepper and onion and cook until softened.",
            "Pour eggs into the skillet. Sprinkle with spinach and cheese. Cook until eggs are set. Fold the omelette in half and serve."
        ]
    },
    {
        id: 'tomato-soup',
        title: "Simple Tomato Soup",
        description: "A comforting and creamy tomato soup that's perfect with grilled cheese.",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/tomato-soup-recipe.jpg",
        ingredients: [
            "1 can (28 oz) crushed tomatoes",
            "2 cups chicken or vegetable broth",
            "1/2 cup heavy cream or milk",
            "1/2 tsp dried basil",
            "Salt and pepper"
        ],
        instructions: [
            "In a pot, combine crushed tomatoes and broth. Bring to a simmer.",
            "Stir in basil, salt, and pepper. Cook for 10 minutes.",
            "Remove from heat and stir in cream. Serve hot."
        ]
    },
    {
        id: 'baked-sweet-potatoes',
        title: "Baked Sweet Potatoes",
        description: "A simple and delicious side that's naturally sweet and full of nutrients.",
        image: "https://static01.nyt.com/images/2024/10/11/multimedia/LH-Loaded-Baked-Sweet-Potatoesrex-qkfm/LH-Loaded-Baked-Sweet-Potatoesrex-qkfm-mediumSquareAt3X.jpg",
        ingredients: [
            "2 medium sweet potatoes",
            "1 tbsp olive oil",
            "1/4 tsp cinnamon",
            "Salt"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C).",
            "Scrub sweet potatoes clean and poke with a fork.",
            "Rub with olive oil and sprinkle with cinnamon and salt.",
            "Bake for 45-55 minutes, until tender. Slice and serve."
        ]
    },
    {
        id: 'simple-guacamole',
        title: "Quick Guacamole",
        description: "A super-fast guacamole that's perfect for dipping.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMU4hNPnvD_bjWB5KvEcHLVxOOEfKbDrEoEw&s",
        ingredients: [
            "2 ripe avocados",
            "Juice of 1 lime",
            "1/4 tsp salt"
        ],
        instructions: [
            "Cut avocados in half, remove pits, and scoop flesh into a bowl.",
            "Mash with a fork. Stir in lime juice and salt. Serve immediately with chips."
        ]
    },
    {
        id: 'canned-chili',
        title: "20-Minute Chili",
        description: "A quick and hearty chili that uses canned goods for a fast meal.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9kPDV3TiXOvF9oKQwXOR82z-EPBg9DxCM4Q&s",
        ingredients: [
            "1 lb ground beef",
            "1 can (15 oz) kidney beans, rinsed",
            "1 can (15 oz) crushed tomatoes",
            "1 tbsp chili powder",
            "1/2 tsp cumin",
            "Salt and pepper"
        ],
        instructions: [
            "In a pot, brown the ground beef. Drain excess fat.",
            "Stir in kidney beans, crushed tomatoes, chili powder, and cumin. Season with salt and pepper.",
            "Bring to a simmer and cook for 15-20 minutes, stirring occasionally. Serve hot."
        ]
    },
    {
        id: 'garlic-bread',
        title: "Easy Garlic Bread",
        description: "Crispy, buttery, and garlicky bread that's the perfect side for any Italian meal.",
        image: "https://www.ambitiouskitchen.com/wp-content/uploads/2023/02/Garlic-Bread-4.jpg",
        ingredients: [
            "1 loaf French bread, sliced lengthwise",
            "1/2 cup softened butter",
            "2 cloves garlic, minced",
            "1 tbsp chopped fresh parsley"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "In a small bowl, mix softened butter, minced garlic, and parsley.",
            "Spread the mixture evenly over the cut sides of the bread.",
            "Place on a baking sheet and bake for 10-15 minutes, or until golden and crispy."
        ]
    },
    {
        id: 'oatmeal-cookies',
        title: "Simple Oatmeal Cookies",
        description: "A chewy and delicious cookie that's easy to make and uses pantry staples.",
        image: "https://hips.hearstapps.com/hmg-prod/images/brown-sugar-oatmeal-cookies-recipe-2-66cf3d6deebbf.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
        ingredients: [
            "1 cup rolled oats",
            "1 cup all-purpose flour",
            "1/2 tsp baking soda",
            "1/2 cup softened butter",
            "1/2 cup packed brown sugar",
            "1 egg",
            "1 tsp vanilla extract"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C).",
            "In a bowl, combine flour, oats, and baking soda.",
            "In a separate bowl, cream together butter and brown sugar. Beat in the egg and vanilla.",
            "Gradually add the dry ingredients to the wet, mixing until combined.",
            "Drop spoonfuls onto a baking sheet and bake for 10-12 minutes, until golden brown. Cool on a wire rack."
        ]
    },
    {
        id: 'apple-crumble',
        title: "Apple Crumble",
        description: "A rustic and comforting dessert with tender baked apples topped with a buttery, crispy oat crumble. Serve warm with ice cream or custard.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbxAqm8-G_JN3q2wxgHtVRO9bmXafo9UZouA&s",
        ingredients: [
            "4 large apples, peeled and sliced",
            "1 tbsp lemon juice",
            "1/4 cup granulated sugar",
            "1 tsp cinnamon",
            "1 cup all-purpose flour",
            "1/2 cup rolled oats",
            "1/2 cup packed brown sugar",
            "1/2 cup cold butter, cubed"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "In a bowl, toss the sliced apples with lemon juice, granulated sugar, and cinnamon. Pour into an 8x8 inch baking dish.",
            "In a separate bowl, combine the flour, oats, and brown sugar. Cut in the cold butter with your fingers or a pastry blender until the mixture resembles coarse crumbs.",
            "Sprinkle the crumble mixture evenly over the apples.",
            "Bake for 30-40 minutes, or until the topping is golden brown and the apples are tender. Serve warm."
        ]
    },
    {
        id: 'sushi-rice-bowl',
        title: "Sushi Rice Bowl",
        description: "All the delicious flavors of a sushi roll, but served in a convenient and customizable bowl. No rolling required!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_D-pZiHDjg2XZawB0y9Zyxsk9GplT4ayJIw&s",
        ingredients: [
            "1 cup sushi rice, cooked",
            "1/4 cup rice vinegar",
            "1 tbsp sugar",
            "1/2 tsp salt",
            "1/2 lb smoked salmon or imitation crab, sliced",
            "1 avocado, sliced",
            "1 cucumber, diced",
            "Soy sauce, sriracha mayonnaise, and sesame seeds for topping"
        ],
        instructions: [
            "In a small bowl, combine the rice vinegar, sugar, and salt. Pour over the warm cooked rice and mix well.",
            "Divide the seasoned rice into two bowls.",
            "Top each bowl with sliced salmon or crab, sliced avocado, and diced cucumber.",
            "Drizzle with soy sauce and sriracha mayonnaise. Sprinkle with sesame seeds and serve immediately."
        ]
    },
    {
        id: 'spicy-garlic-noodles',
        title: "Spicy Garlic Noodles",
        description: "An easy and quick noodle dish with a fiery kick. Perfect for a fast lunch or dinner when you're craving something with bold flavor.",
        image: "https://www.whiskaffair.com/wp-content/uploads/2020/02/Chilli-Garlic-Noodles-2-3.jpg",
        ingredients: [
            "8 oz fresh or dried egg noodles",
            "3 tbsp soy sauce",
            "1 tbsp sriracha (or more, to taste)",
            "1 tbsp rice vinegar",
            "1 tbsp brown sugar",
            "4 cloves garlic, minced",
            "2 tbsp vegetable oil",
            "Green onions and sesame seeds for garnish"
        ],
        instructions: [
            "Cook noodles according to package directions. Drain and set aside.",
            "In a small bowl, whisk together the soy sauce, sriracha, rice vinegar, and brown sugar.",
            "Heat vegetable oil in a large skillet or wok over medium heat. Add the minced garlic and cook for 30 seconds until fragrant.",
            "Pour the sauce mixture into the skillet and bring to a simmer. Add the cooked noodles and toss to coat evenly.",
            "Cook for 1-2 minutes until the noodles are heated through. Garnish with chopped green onions and sesame seeds before serving."
        ]
    },
    {
        id: 'classic-burger',
        title: "Classic Homemade Burger",
        description: "The ultimate classic beef burger. Juicy, flavorful, and customizable with all your favorite toppings.",
        image: "https://tastesbetterfromscratch.com/wp-content/uploads/2020/06/Hamburger-Recipe24-Thumbnail-1.jpg",
        ingredients: [
            "1 lb ground beef",
            "1/2 tsp salt",
            "1/4 tsp black pepper",
            "4 burger buns",
            "2 slices of cheddar cheese",
            "Lettuce, tomato, onion, and pickles for topping"
        ],
        instructions: [
            "Divide the ground beef into four equal portions. Gently form each portion into a patty about 1/2 inch thick.",
            "Season both sides of each patty with salt and pepper.",
            "Heat a large skillet or grill pan over medium-high heat. Cook the patties for 3-4 minutes per side for medium-rare, or longer for more well-done.",
            "During the last minute of cooking, place a slice of cheese on two of the patties to melt.",
            "Toast the burger buns on the grill or in a separate pan.",
            "Assemble the burgers with the cooked patties and your favorite toppings. Serve hot."
        ]
    },
    {
        id: 'banana-bread',
        title: "Moist Banana Bread",
        description: "A foolproof recipe for incredibly moist and flavorful banana bread. The perfect way to use up those ripe bananas.",
        image: "https://bromabakery.com/wp-content/uploads/2025/01/Banana-Bread-4.jpg",
        ingredients: [
            "3 ripe bananas, mashed",
            "1/3 cup melted butter",
            "1/2 cup sugar",
            "1 large egg, beaten",
            "1 tsp vanilla extract",
            "1 tsp baking soda",
            "1/4 tsp salt",
            "1 1/2 cups all-purpose flour"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C). Grease and flour a loaf pan.",
            "In a large bowl, mix the mashed bananas and melted butter.",
            "Stir in the sugar, egg, and vanilla extract.",
            "Sprinkle the baking soda and salt over the mixture and stir well.",
            "Add the flour and mix until just combined. Do not overmix.",
            "Pour the batter into the prepared loaf pan.",
            "Bake for 50-60 minutes, or until a toothpick inserted into the center comes out clean. Let cool in the pan for 10 minutes before transferring to a wire rack to cool completely."
        ]
    },
    {
        id: 'pad-thai',
        title: "Easy Pad Thai",
        description: "A quick and simplified recipe for a popular Thai noodle dish. Loaded with vegetables, chicken or shrimp, and a sweet and sour sauce.",
        image: "https://www.elmundoeats.com/wp-content/uploads/2024/06/FP-Authentic-pad-Thai-in-a-plate.jpg",
        ingredients: [
            "8 oz rice noodles",
            "1/2 lb chicken or shrimp",
            "2 tbsp vegetable oil",
            "2 cloves garlic, minced",
            "2 large eggs, lightly beaten",
            "1 cup bean sprouts",
            "1/2 cup chopped peanuts",
            "1/4 cup tamarind paste",
            "2 tbsp fish sauce",
            "2 tbsp brown sugar",
            "1 tbsp lime juice"
        ],
        instructions: [
            "Soak rice noodles in warm water until soft, about 20 minutes. Drain well.",
            "In a small bowl, whisk together the tamarind paste, fish sauce, brown sugar, and lime juice.",
            "Heat oil in a wok or large skillet over high heat. Add garlic and cook for 30 seconds. Add chicken or shrimp and cook until no longer pink.",
            "Push the protein to one side of the pan. Pour in the beaten eggs and scramble. Stir to combine with the protein.",
            "Add the soaked noodles and the sauce. Toss to combine. Cook for 2-3 minutes, stirring constantly.",
            "Stir in the bean sprouts and half of the peanuts. Cook for 1 minute more. Garnish with remaining peanuts and a lime wedge before serving."
        ]
    },
    {
        id: 'focaccia-bread',
        title: "Homemade Focaccia Bread",
        description: "A delicious, airy, and soft Italian bread with a crispy crust. Perfect for dipping in olive oil or as a sandwich bread.",
        image: "https://www.inspiredtaste.net/wp-content/uploads/2025/05/Focaccia-Bread-Recipe-1.jpg",
        ingredients: [
            "3 1/2 cups all-purpose flour",
            "2 tsp instant yeast",
            "1 1/2 tsp salt",
            "1 1/2 cups warm water",
            "1/4 cup olive oil, plus more for drizzling",
            "Fresh rosemary and coarse sea salt for topping"
        ],
        instructions: [
            "In a large bowl, whisk together flour, yeast, and salt. Add the warm water and 1/4 cup of olive oil. Mix until a shaggy dough forms.",
            "Cover the bowl with plastic wrap and let it rise in a warm place for at least 1-2 hours, or until doubled in size.",
            "Pour the dough onto a well-oiled baking sheet. Gently press and stretch the dough to fill the pan, being careful not to deflate it too much.",
            "Drizzle with more olive oil. Use your fingertips to press dimples all over the surface of the dough.",
            "Sprinkle with fresh rosemary and sea salt. Let rise for another 20 minutes.",
            "Preheat oven to 400°F (200°C). Bake for 20-25 minutes, or until golden brown. Let cool slightly before serving."
        ]
    },
    {
        id: 'chicken-quesadillas',
        title: "Cheesy Chicken Quesadillas",
        description: "A quick and easy meal that's perfect for a satisfying lunch or dinner. Crispy tortillas filled with seasoned chicken and gooey melted cheese.",
        image: "https://cookingformysoul.com/wp-content/uploads/2023/10/feat3-chicken-quesadillas.jpg",
        ingredients: [
            "2 cups cooked chicken, shredded",
            "1 tsp chili powder",
            "1/2 tsp cumin",
            "4 large flour tortillas",
            "2 cups shredded Mexican blend cheese",
            "Salsa, sour cream, and guacamole for serving"
        ],
        instructions: [
            "In a bowl, toss the shredded chicken with chili powder and cumin.",
            "Lay one tortilla on a flat surface. Sprinkle half of the cheese over the entire surface.",
            "Top the cheese with half of the seasoned chicken. Add another layer of cheese.",
            "Place a second tortilla on top. Repeat for a second quesadilla.",
            "Heat a large, dry skillet over medium heat. Carefully place one quesadilla in the skillet and cook for 2-3 minutes until the bottom is golden brown and the cheese is starting to melt.",
            "Flip the quesadilla and cook for another 2-3 minutes. Repeat with the second quesadilla. Slice and serve hot with salsa, sour cream, and guacamole."
        ]
    },
    {
        id: 'gazpacho',
        title: "Chilled Gazpacho",
        description: "A refreshing and healthy Spanish cold soup, perfect for a hot summer day. Made with fresh tomatoes, cucumbers, bell peppers, and garlic.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGZWKzSR4cEJBgcHk0tM1sTQofnKNXTvmqA&s00?text=Chilled+Gazpacho",
        ingredients: [
            "5 ripe tomatoes, roughly chopped",
            "1 cucumber, peeled and chopped",
            "1 red bell pepper, chopped",
            "1/2 red onion, chopped",
            "2 cloves garlic",
            "2 tbsp red wine vinegar",
            "1/4 cup olive oil",
            "Salt and black pepper"
        ],
        instructions: [
            "In a blender, combine the chopped tomatoes, cucumber, bell pepper, red onion, garlic, red wine vinegar, and a pinch of salt.",
            "Blend until smooth. While the blender is running, slowly stream in the olive oil until the soup is emulsified.",
            "Season with more salt and pepper to taste. For an even smoother texture, you can strain the soup through a fine-mesh sieve.",
            "Cover and chill in the refrigerator for at least 2 hours, or until very cold. Serve in bowls, garnished with a drizzle of olive oil and croutons if desired."
        ]
    },
    {
        id: 'lemon-meringue-pie',
        title: "Lemon Meringue Pie",
        description: "A perfect balance of tangy lemon filling and a fluffy, toasted meringue topping. A show-stopping dessert that's surprisingly easy to master.",
        image: "https://recipesblob.oetker.ca/assets/beb7bcfa47ed49f3ac898a1fb0d6b7b9/1272x764/classic-lemon-meringue-pie.webp",
        ingredients: [
            "1 pre-baked pie crust (9-inch)",
            "For the filling:",
            "1 1/2 cups granulated sugar",
            "1/3 cup cornstarch",
            "3/4 cup lemon juice",
            "1 1/2 cups water",
            "4 large egg yolks, lightly beaten",
            "2 tbsp unsalted butter",
            "1 tsp lemon zest",
            "For the meringue:",
            "4 large egg whites",
            "1/2 tsp cream of tartar",
            "1/2 cup granulated sugar"
        ],
        instructions: [
            "For the filling: In a saucepan, whisk together sugar and cornstarch. Gradually whisk in the water and lemon juice until smooth. Cook over medium heat, stirring constantly, until the mixture thickens and boils. Cook for one minute more.",
            "Remove from heat and slowly whisk a small amount of the hot mixture into the beaten egg yolks. Then, whisk the tempered yolks back into the saucepan. Cook for one minute more, stirring constantly. Remove from heat and stir in butter and lemon zest. Pour into the prepared pie crust.",
            "For the meringue: In a clean, dry bowl, beat egg whites and cream of tartar with an electric mixer on medium speed until soft peaks form. Gradually add sugar and beat on high until stiff, glossy peaks form.",
            "Spread the meringue over the hot filling, ensuring it touches the crust to prevent shrinkage. Bake at 350°F (175°C) for 10-15 minutes, or until the meringue is golden brown. Let cool completely before slicing."
        ]
    },
    {
        id: 'tiramisu',
        title: "Classic Tiramisu",
        description: "An elegant no-bake Italian dessert with layers of coffee-soaked ladyfingers and a light, creamy mascarpone mixture.",
        image: "https://www.nonnabox.com/wp-content/uploads/2016/01/classic_tiramisu_recipe.jpg",
        ingredients: [
            "1 1/2 cups brewed espresso, cooled",
            "2 tbsp coffee liqueur or dark rum (optional)",
            "3 large eggs, separated",
            "1/2 cup granulated sugar",
            "1 lb mascarpone cheese, at room temperature",
            "24 ladyfingers",
            "Unsweetened cocoa powder for dusting"
        ],
        instructions: [
            "In a small bowl, combine the cooled espresso and coffee liqueur.",
            "In a large bowl, whisk the egg yolks with sugar until thick and pale. Beat in the mascarpone cheese until smooth.",
            "In a separate bowl, beat the egg whites until stiff peaks form. Gently fold the beaten egg whites into the mascarpone mixture.",
            "Working quickly, dip each ladyfinger into the coffee mixture for just a second. Arrange a single layer of ladyfingers in the bottom of an 8x8 inch baking dish.",
            "Spread half of the mascarpone cream over the ladyfingers. Repeat with another layer of coffee-soaked ladyfingers and the remaining cream.",
            "Cover and refrigerate for at least 4 hours, or overnight. Before serving, dust the top with a generous layer of unsweetened cocoa powder."
        ]
    },
    {
        id: 'sloppy-joes',
        title: "Sloppy Joes",
        description: "A messy and fun family favorite. Savory ground beef in a tangy tomato sauce, served on soft buns.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MebWrlJQzi7_tHk6JZJBr68CwJiU8dmXIw&s",
        ingredients: [
            "1 lb ground beef",
            "1/2 onion, finely chopped",
            "1/2 green bell pepper, finely chopped",
            "1 can (8 oz) tomato sauce",
            "1/4 cup ketchup",
            "2 tbsp brown sugar",
            "1 tbsp yellow mustard",
            "1 tsp Worcestershire sauce",
            "4 hamburger buns"
        ],
        instructions: [
            "In a large skillet, brown the ground beef over medium-high heat. Drain excess fat.",
            "Add the chopped onion and green bell pepper. Cook until softened, about 5 minutes.",
            "Stir in the tomato sauce, ketchup, brown sugar, mustard, and Worcestershire sauce. Bring to a simmer.",
            "Reduce heat to low and cook for 10 minutes, allowing the sauce to thicken. Season with salt and pepper to taste.",
            "Spoon the mixture onto toasted hamburger buns and serve immediately."
        ]
    },
    {
        id: 'roast-beef-and-potatoes',
        title: "Classic Roast Beef with Potatoes",
        description: "A simple and elegant Sunday roast. Tender, juicy roast beef and perfectly roasted potatoes, seasoned with herbs.",
        image: "https://i0.wp.com/thebutcherswife.blog/wp-content/uploads/2021/09/C9C22574-01AA-4D82-AE2D-6773BCBCBDC3.jpeg",
        ingredients: [
            "3 lb beef roast (sirloin or top round)",
            "2 lbs small potatoes, halved",
            "1 onion, quartered",
            "3 cloves garlic, smashed",
            "2 tbsp olive oil",
            "2 tsp dried rosemary",
            "1 tsp salt",
            "1/2 tsp black pepper"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C).",
            "Pat the beef roast dry and season generously with salt, pepper, and rosemary. Place the roast in the center of a large roasting pan.",
            "Toss the potatoes, onion, and garlic with olive oil, salt, and pepper. Arrange them around the roast in a single layer.",
            "Roast for 45-60 minutes, or until the roast reaches your desired doneness (130-135°F for medium-rare).",
            "Remove the roast from the oven and let it rest on a cutting board for at least 15 minutes before carving. Serve with the roasted vegetables."
        ]
    },
    {
        id: 'pumpkin-soup',
        title: "Creamy Pumpkin Soup",
        description: "A comforting, velvety smooth pumpkin soup with warm spices. Perfect for a fall or winter meal.",
        image: "https://addapinch.com/wp-content/uploads/2017/10/pumpkin-soup-recipe_DSC2481.jpg",
        ingredients: [
            "1 tbsp olive oil",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 can (15 oz) pure pumpkin puree",
            "4 cups vegetable or chicken broth",
            "1/2 tsp nutmeg",
            "1/2 tsp cinnamon",
            "1/4 cup heavy cream or coconut milk",
            "Salt and pepper"
        ],
        instructions: [
            "Heat olive oil in a large pot over medium heat. Add onion and cook until softened.",
            "Stir in garlic and cook for 1 minute until fragrant.",
            "Add pumpkin puree, vegetable broth, nutmeg, and cinnamon. Bring to a simmer and cook for 10 minutes.",
            "Remove from heat. Use an immersion blender to puree the soup until smooth. Alternatively, transfer to a blender and puree in batches.",
            "Return the soup to the pot. Stir in the heavy cream and season with salt and pepper. Heat gently without boiling. Serve hot."
        ]
    },
    {
        id: 'fish-tacos',
        title: "Baja Fish Tacos",
        description: "Light and crispy beer-battered fish, served in warm tortillas with a zesty cabbage slaw. A fresh and flavorful take on a classic taco.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUv3E8Qg3D-rMeZr-WFo3Msd2j5YRGna26dA&s0x400",
        ingredients: [
            "1 lb firm white fish fillets (cod or tilapia)",
            "1 cup all-purpose flour",
            "1 tsp baking powder",
            "1 tsp salt",
            "1 bottle (12 oz) cold beer",
            "8 corn tortillas",
            "1 cup shredded cabbage",
            "1/4 cup mayonnaise",
            "2 tbsp lime juice",
            "1 tsp hot sauce"
        ],
        instructions: [
            "For the slaw: In a bowl, whisk together mayonnaise, lime juice, and hot sauce. Stir in the shredded cabbage. Set aside.",
            "For the batter: In a separate bowl, whisk together flour, baking powder, and salt. Whisk in the cold beer until just combined. Do not overmix.",
            "Heat about 2 inches of vegetable oil in a large pot to 375°F (190°C).",
            "Dip each fish fillet into the batter, letting the excess drip off. Fry in the hot oil for 3-4 minutes per side, until golden brown and crispy. Drain on a paper towel-lined plate.",
            "Warm the tortillas. To assemble, place a piece of fish in a tortilla and top with the prepared cabbage slaw. Serve immediately."
        ]
    },
    {
        id: 'shepherds-pie',
        title: "Shepherd's Pie",
        description: "A classic British comfort food with a savory minced lamb or beef filling and a buttery mashed potato topping.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRxBJer2o_zUO2mmb0ZB2iDZQQNjDWeknaA&s",
        ingredients: [
            "2 lbs potatoes, peeled and quartered",
            "4 tbsp butter",
            "1/2 cup milk",
            "1 lb ground lamb or beef",
            "1 onion, chopped",
            "2 carrots, diced",
            "1 cup beef broth",
            "1 tbsp all-purpose flour",
            "1 cup frozen peas",
            "Salt and pepper"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C).",
            "Boil potatoes until fork-tender. Drain and mash with butter and milk until smooth. Season with salt and pepper.",
            "In a large skillet, brown the ground meat. Drain excess fat. Add onion and carrots; cook until softened.",
            "Stir in flour and cook for 1 minute. Gradually stir in beef broth. Bring to a simmer and cook until the sauce thickens.",
            "Stir in the frozen peas. Pour the meat mixture into a baking dish.",
            "Spoon the mashed potatoes over the meat filling and spread it evenly. Bake for 20-25 minutes, or until the topping is golden brown and the filling is bubbly. Let cool for 5 minutes before serving."
        ]
    },
    {
        id: 'lemon-ricotta-pancakes',
        title: "Lemon Ricotta Pancakes",
        description: "Light and airy pancakes with a subtle lemon zest flavor. The ricotta cheese gives them a delicate and moist texture.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TtoWL-jZI7sm3XP4GM2zVgnMEK_r_hlMpQ&s800x400",
        ingredients: [
            "1 1/2 cups all-purpose flour",
            "2 tbsp sugar",
            "1 tsp baking powder",
            "1/2 tsp salt",
            "1 1/4 cups buttermilk",
            "1 cup ricotta cheese",
            "2 large eggs, separated",
            "Zest of 1 lemon",
            "1 tbsp melted butter"
        ],
        instructions: [
            "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
            "In a separate bowl, whisk together the buttermilk, ricotta cheese, egg yolks, lemon zest, and melted butter.",
            "In a third bowl, beat the egg whites until stiff peaks form.",
            "Pour the wet ingredients into the dry ingredients and stir until just combined. Gently fold in the egg whites.",
            "Heat a lightly greased skillet over medium heat. Pour 1/4 cup of batter per pancake. Cook for 2-3 minutes per side, until golden brown. Serve immediately with a sprinkle of powdered sugar and fresh berries."
        ]
    },
    {
        id: 'chicken-parmesan',
        title: "Chicken Parmesan",
        description: "Crispy breaded chicken cutlets topped with rich tomato sauce and melted mozzarella cheese. A classic Italian-American dish.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmVEWCVqf1nECp4ZQ-JNVcoIXNbCMnabEdg&s",
        ingredients: [
            "2 boneless, skinless chicken breasts",
            "1 cup breadcrumbs",
            "1/2 cup grated parmesan cheese",
            "1 large egg, beaten",
            "1/4 cup flour",
            "1 cup marinara sauce",
            "2 slices mozzarella cheese",
            "Olive oil for frying"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C).",
            "Pound chicken breasts to an even thickness. Set up a breading station with three shallow dishes: one with flour, one with beaten egg, and one with breadcrumbs mixed with parmesan.",
            "Coat each chicken breast in flour, then egg, then the breadcrumb mixture.",
            "Heat a generous amount of olive oil in a skillet over medium-high heat. Fry each chicken breast for 3-4 minutes per side until golden brown. Do not cook all the way through.",
            "Place fried chicken breasts on a baking sheet. Top each with marinara sauce and a slice of mozzarella cheese. Bake for 10-15 minutes until the cheese is melted and the chicken is cooked through. Serve with pasta."
        ]
    }
];