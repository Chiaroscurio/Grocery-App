// ---- Recipe library ----
// Recipes kept in the repo. They are merged into the app on every device the
// first time it loads after a rebuild. Deleting one in the app hides it for
// good on that device.
//
// Fields
//   id        stable unique id, must start with "lib-"
//   ing       [{a: amount, n: name, s: aisle, p: price (0 = unknown)}]
//             aisles: produce bakery meat dairy canned pantry snacks beverages frozen house
//   steps     method as written by the source (condensed; "Open original" has the exact text)
//   nut       per serving; est: true means estimated here, not given by the source
//   tags      used for filtering and the week planner
//   mealServings  servings that make one meal (e.g. 3 tacos); the planner counts nutrition per meal
//   autoApply rec ids applied automatically when the recipe first arrives (original stays as v1)
//   ing h:1   usually on hand: unticked by default and skipped by Shop the week
//   linkOnly  true when the page couldn't be read; ingredients still to fill in
//   recs      standing recommendations shown on the recipe:
//             {id, kind: 'reviews' (what commenters report) | 'check' (from reading the recipe) | 'mine' (how you make it),
//              title, text, change?}
//             change makes the rec appliable as a new version:
//             {label, ing: [[index, {a,n,s}]], addIng: [{a,n,s}], steps: [[index, text]],
//              addStep: [text], time, servings}
const RECIPE_LIBRARY=[
  {id:'lib-buffalo-cauliflower-tacos',title:'Vegan Buffalo Cauliflower Tacos',
   source:'thissavoryvegan.com',url:'https://www.thissavoryvegan.com/vegan-buffalo-cauliflower-tacos/',
   time:'25 min',servings:8,mealServings:3,tags:['vegan','tacos','weeknight','dinner'],
   ing:[
    {a:'½ head',n:'cauliflower, cut into bite-sized pieces',s:'produce',p:0},
    {a:'4 tsp',n:'olive oil',s:'pantry',p:0},
    {a:'1 tsp',n:'garlic powder',s:'pantry',p:0},
    {a:'1 tsp',n:'chili powder',s:'pantry',p:0},
    {a:'¾ cup',n:'buffalo sauce, divided',s:'canned',p:0},
    {a:'',n:'pepper, to taste',s:'pantry',p:0},
    {a:'8',n:'taco-size flour tortillas',s:'bakery',p:0},
    {a:'1 head',n:'romaine lettuce, chopped',s:'produce',p:0},
    {a:'1',n:'avocado, pitted and diced',s:'produce',p:0},
    {a:'',n:'vegan ranch, to taste',s:'canned',p:0},
    {a:'',n:'cilantro or green onion, diced (optional)',s:'produce',p:0}
   ],
   steps:[
    'Heat the oven to 425°F and line a baking sheet with parchment.',
    'Toss the cauliflower with the oil, garlic powder, chili powder, pepper and ¼ cup of the buffalo sauce. Spread on the sheet and roast 20 minutes, flipping halfway.',
    'About 5 minutes before the cauliflower is done, warm the remaining buffalo sauce.',
    'Return the roasted cauliflower to the bowl and stir in the warm sauce.',
    'Fill each tortilla with romaine, avocado and cauliflower. Drizzle with ranch and top with cilantro or green onion.',
    'Tip: for crispier cauliflower, broil 2–5 minutes after roasting.'
   ],
   nut:{kcal:191,protein:5,carbs:22,fat:10,fiber:0},
   recs:[
    {id:'r1',kind:'reviews',title:'Often too spicy',text:'About 4–5 commenters found it too hot. The usual fix is less sauce (about ⅓ cup total instead of ¾) or a mild buffalo sauce; the author suggests adjusting the sauce after baking.',
     change:{label:'Milder sauce',ing:[[4,{a:'⅓–½ cup',n:'buffalo sauce (mild), divided',s:'canned'}]]}},
    {id:'r2',kind:'reviews',title:'Mix spices into the oil first',text:'A commenter tip: stir the garlic and chili powder into the oil before tossing so the spice coats evenly instead of clumping.'},
    {id:'r3',kind:'check',title:'"8 servings" means 8 tacos',text:'Nutrition is per taco (191 kcal, 5 g protein). A dinner is 2–3 tacos, and still low in protein — a can of black beans or crisped tofu in the filling closes most of that gap.',
     change:{label:'Add black beans',addIng:[{a:'1 can',n:'black beans, rinsed',s:'canned'}],steps:[[4,'Fill each tortilla with romaine, avocado, warmed black beans and cauliflower. Drizzle with ranch and top with cilantro or green onion.']]}},
    {id:'r4',kind:'reviews',title:'Reheat in the oven',text:'The author notes the microwave loses the crunch; re-crisp leftovers in the oven or air fryer.'}
   ],
   logs:[],adj:[]},

  {id:'lib-cashew-tofu',title:'Cashew Tofu',
   source:'Home Chef card (PDF)',url:'',
   time:'35–45 min',servings:2,tags:['tofu','stir-fry','rice','meal kit','dinner'],
   ing:[
    {a:'12 oz',n:'extra firm tofu',s:'produce',p:0},
    {a:'¾ cup',n:'jasmine rice',s:'pantry',p:0},
    {a:'6 oz',n:'broccoli florets',s:'produce',p:0},
    {a:'2',n:'green onions',s:'produce',p:0},
    {a:'2 cloves',n:'garlic',s:'produce',p:0},
    {a:'1 tbsp',n:'chopped ginger',s:'produce',p:0},
    {a:'3 tbsp',n:'cornstarch',s:'pantry',p:0},
    {a:'2 oz',n:'sweet chili sauce',s:'canned',p:0},
    {a:'2 oz',n:'teriyaki glaze',s:'canned',p:0},
    {a:'1 oz',n:'roasted salted cashews',s:'snacks',p:0},
    {a:'2 tbsp',n:'olive oil',s:'pantry',p:0},
    {a:'',n:'salt and pepper',s:'pantry',p:0}
   ],
   steps:[
    'Make the rice: bring a small pot with the rice, 1½ cups water and a pinch of salt to a boil. Cover, reduce to low and cook until tender, 18–20 minutes. Set aside covered.',
    'Prep: cut tofu into 1" dice, lay on a paper-towel-lined plate, top with more towels and press gently for 5 minutes. Cut broccoli into bite-size pieces, mince the garlic, cut green onion whites into 1" lengths and thinly slice the greens (keep separate). Toss tofu with cornstarch, ¼ tsp salt and a pinch of pepper.',
    'Crisp the tofu: heat 4 tsp olive oil in a medium non-stick pan over medium-high. Cook tofu, stirring occasionally, until golden, 6–8 minutes — don\'t rush it. Move to a towel-lined plate; keep the pan on the heat.',
    'Cook the vegetables: add 2 tsp olive oil, broccoli and green onion whites; stir 2 minutes. Add ¼ cup water, garlic and ginger; cook until broccoli is tender, 5–6 minutes, adding water 2 tbsp at a time if it dries out. Stir in sweet chili sauce, teriyaki glaze, cashews and tofu; bring to a boil, then remove from heat.',
    'Serve the tofu and vegetables over rice, topped with the green onion greens.',
    'Swap: 8 oz shrimp or 12 oz diced chicken breast instead of tofu. Season, toss in cornstarch and cook like the tofu — shrimp 2–3 min, flip, 1–2 min more; chicken 5–7 min to 165°F.'
   ],
   nut:{kcal:783,protein:28,carbs:104,fat:30,fiber:0},
   recs:[
    {id:'r1',kind:'check',title:'Tofu goes soft in the sauce',text:'Step 4 boils the crisped tofu in the sauce, which undoes the 6–8 minutes of crisping. Toss it in off the heat just before serving instead.',
     change:{label:'Keep tofu crisp',steps:[[3,'Cook the vegetables: add 2 tsp olive oil, broccoli and green onion whites; stir 2 minutes. Add ¼ cup water, garlic and ginger; cook until broccoli is tender, 5–6 minutes, adding water 2 tbsp at a time if it dries out. Stir in sweet chili sauce, teriyaki glaze and cashews; bring to a boil and remove from heat. Fold in the tofu right before serving.']]}},
    {id:'r2',kind:'check',title:'Press the tofu longer',text:'5 minutes of pressing leaves a lot of water in a 12 oz block; 15–20 minutes (or a heavy pan on top) gives a much crisper crust.'},
    {id:'r3',kind:'check',title:'High sodium',text:'1,562 mg per serving — about two-thirds of a day. Most of it is the teriyaki glaze and sweet chili sauce; low-sodium teriyaki cuts a big chunk.'}
   ],
   logs:[],adj:[]},

  {id:'lib-three-cheese-alfredo-rigatoni',title:'Three Cheese Veggie Alfredo Rigatoni',
   source:'Home Chef card (PDF)',url:'',
   time:'25–35 min',servings:2,tags:['pasta','vegetarian','meal kit','dinner'],
   ing:[
    {a:'5 oz',n:'rigatoni',s:'pantry',p:0},
    {a:'8 oz',n:'broccoli florets',s:'produce',p:0},
    {a:'3 oz',n:'roasted red peppers',s:'canned',p:0},
    {a:'4 oz',n:'light cream',s:'dairy',p:0},
    {a:'1 oz',n:'light cream cheese',s:'dairy',p:0},
    {a:'1 oz',n:'grated Parmesan',s:'dairy',p:0},
    {a:'½ oz',n:'pecorino cheese',s:'dairy',p:0},
    {a:'4',n:'butter crackers',s:'snacks',p:0},
    {a:'½ tsp',n:'garlic salt',s:'pantry',p:0},
    {a:'¼ tsp',n:'red pepper flakes',s:'pantry',p:0},
    {a:'1 tbsp',n:'olive oil',s:'pantry',p:0},
    {a:'',n:'salt and pepper',s:'pantry',p:0}
   ],
   steps:[
    'Before you start: bring 8 cups water and 2 tsp salt to a boil in a medium pot.',
    'Cook the pasta: add rigatoni and cook until al dente, 11–13 minutes. Reserve ½ cup pasta water, then drain. Prep while it cooks.',
    'Prep: cut broccoli into bite-size pieces. Crush the crackers and mix with half the Parmesan (save the rest for the sauce).',
    'Cook the broccoli: heat 1 tbsp olive oil in a large non-stick pan over medium. Add broccoli with a pinch of salt and pepper; stir occasionally until tender, 5–7 minutes.',
    'Make the sauce: add cream, ¼ cup pasta water, cream cheese, pecorino, garlic salt and the remaining Parmesan to the pan. Bring to a simmer and stir constantly until thickened, 2–3 minutes. Add roasted red peppers and pasta; stir to coat, 30–60 seconds. Loosen with more pasta water 1 tbsp at a time if needed. Off the heat, add red pepper flakes to taste.',
    'Serve topped with the Parmesan-cracker crumbs.',
    'Add protein: cook before the broccoli in the same pan with 1 tsp oil — steak strips 4–6 min (145°F), shrimp 2–3 min then 1–2 min (145°F), or diced chicken 5–7 min (165°F). Set aside and add back with the pasta.'
   ],
   nut:{kcal:618,protein:20,carbs:71,fat:30,fiber:0},
   recs:[
    {id:'r1',kind:'check',title:'Keep the sauce from breaking',text:'Light cream and cream cheese can split at a hard boil. Keep it at a gentle simmer, and soften the cream cheese in the warm cream before adding the grated cheeses.'},
    {id:'r2',kind:'check',title:'Light on protein for a dinner',text:'20 g per serving. A can of white beans (stirred in with the pasta) adds about 10 g each without changing the dish much.',
     change:{label:'Add white beans',addIng:[{a:'1 can',n:'cannellini beans, rinsed',s:'canned'}],steps:[[4,'Make the sauce: add cream, ¼ cup pasta water, cream cheese, pecorino, garlic salt and the remaining Parmesan to the pan. Bring to a simmer and stir constantly until thickened, 2–3 minutes. Add roasted red peppers, the white beans and pasta; stir to coat, 1–2 minutes. Loosen with more pasta water 1 tbsp at a time if needed. Off the heat, add red pepper flakes to taste.']]}},
    {id:'r3',kind:'check',title:'Salty from four sources',text:'Salted pasta water, garlic salt, Parmesan and pecorino add up to 1,337 mg per serving. Taste before adding the garlic salt — it often isn\'t needed.'}
   ],
   logs:[],adj:[]},

  {id:'lib-street-corn-gnocchi',title:'Three Cheese Mexican Street Corn Gnocchi',
   source:'Home Chef card (PDF)',url:'',
   time:'30–40 min',servings:2,tags:['gnocchi','vegetarian','meal kit','dinner'],
   ing:[
    {a:'12 oz',n:'precooked gnocchi',s:'pantry',p:0},
    {a:'3 oz',n:'corn kernels',s:'frozen',p:0},
    {a:'1',n:'poblano pepper',s:'produce',p:0},
    {a:'1',n:'shallot',s:'produce',p:0},
    {a:'4 oz',n:'grape tomatoes',s:'produce',p:0},
    {a:'½ oz',n:'cilantro',s:'produce',p:0},
    {a:'2 oz',n:'light cream cheese',s:'dairy',p:0},
    {a:'1 oz',n:'shredded Oaxacan cheese',s:'dairy',p:0},
    {a:'1 oz',n:'grated Parmesan',s:'dairy',p:0},
    {a:'½ oz',n:'tortilla strips',s:'snacks',p:0},
    {a:'2 tbsp',n:'olive oil',s:'pantry',p:0},
    {a:'',n:'salt and pepper',s:'pantry',p:0}
   ],
   steps:[
    'Prep: peel, halve and thinly slice the shallot. Halve the tomatoes. Stem the cilantro. Stem, seed and dice the poblano into ¼" pieces (most are mild, a few are hot — wash hands after).',
    'Cook the gnocchi: heat 4 tsp olive oil in a medium non-stick pan over medium. Add gnocchi and flip often until golden, 7–9 minutes. Move to a paper-towel-lined plate; keep the pan.',
    'Vegetables and sauce: return the pan to medium-high with 2 tsp olive oil. Add shallot, corn and poblano; stir occasionally until soft and lightly browned, 5–7 minutes. Add ½ cup cold water, the cream cheese, ¼ tsp salt and a pinch of pepper; simmer, stirring, until creamy, 3–4 minutes.',
    'Finish: add gnocchi, tomatoes and Oaxacan cheese; stir gently to combine and remove from heat.',
    'Serve topped with Parmesan, cilantro and tortilla strips.',
    'Add protein: bacon in a separate pan 6–8 min until crisp, or ground beef over medium-high 4–6 min (160°F). Add to the finished dish.'
   ],
   nut:{kcal:656,protein:21,carbs:85,fat:29,fiber:0},
   recs:[
    {id:'r1',kind:'check',title:'Getting the gnocchi golden',text:'Shelf-stable gnocchi stick and steam if crowded or moved too early. Use a single layer, leave them alone for the first 2–3 minutes, and break apart any that are stuck together before they go in.'},
    {id:'r2',kind:'check',title:'Add black beans for protein and fiber',text:'21 g protein and no fiber listed. Half a can of black beans with the corn fits the street-corn flavors.',
     change:{label:'Add black beans',addIng:[{a:'½ can',n:'black beans, rinsed',s:'canned'}],steps:[[2,'Vegetables and sauce: return the pan to medium-high with 2 tsp olive oil. Add shallot, corn, poblano and black beans; stir occasionally until soft and lightly browned, 5–7 minutes. Add ½ cup cold water, the cream cheese, ¼ tsp salt and a pinch of pepper; simmer, stirring, until creamy, 3–4 minutes.']]}},
    {id:'r3',kind:'check',title:'A squeeze of lime',text:'Street corn usually gets lime and chili; a lime wedge and a pinch of chili powder at the end brighten the creamy sauce.'}
   ],
   logs:[],adj:[]},

  {id:'lib-orzo-chili',title:'Vegetarian Orzo Chili',
   source:'thissavoryvegan.com',url:'https://www.thissavoryvegan.com/vegetarian-orzo-chili/',
   time:'30 min',servings:7,tags:['vegan','chili','one pot','meal prep','dinner'],
   ing:[
    {a:'3 tbsp',n:'olive oil',s:'pantry',p:0},
    {a:'3 cloves',n:'garlic, diced',s:'produce',p:0},
    {a:'1',n:'yellow onion, diced',s:'produce',p:0},
    {a:'2',n:'bell peppers, diced',s:'produce',p:0},
    {a:'28 oz can',n:'diced tomatoes',s:'canned',p:0},
    {a:'28 oz can',n:'crushed tomatoes',s:'canned',p:0},
    {a:'6 oz can',n:'tomato paste',s:'canned',p:0},
    {a:'1 can',n:'black beans, drained and rinsed',s:'canned',p:0},
    {a:'1 cup',n:'dry orzo',s:'pantry',p:0},
    {a:'2 cups',n:'water',s:'pantry',p:0},
    {a:'3 tbsp',n:'chili powder',s:'pantry',p:0},
    {a:'1–2 tbsp',n:'dried oregano',s:'pantry',p:0},
    {a:'',n:'Tabasco, to taste',s:'canned',p:0},
    {a:'',n:'salt and pepper, to taste',s:'pantry',p:0},
    {a:'',n:'toppings: jalapeño, cilantro, avocado, tortilla chips (optional)',s:'produce',p:0}
   ],
   steps:[
    'Heat the oil in a large pot over medium heat. Sauté the onion and garlic about 3 minutes, then add the bell peppers and cook about 7 more minutes until softened.',
    'Add everything else, bring to a boil, then lower the heat and simmer about 10 minutes, stirring often.',
    'Adjust the seasoning.',
    'Serve with toppings, or cool completely and refrigerate for meal prep. It tastes better the longer it simmers.'
   ],
   nut:{kcal:290,protein:9,carbs:44,fat:7,fiber:9,est:true},
   recs:[
    {id:'r1',kind:'check',title:'Orzo keeps drinking the liquid',text:'1 cup orzo in a thick tomato base will tighten a lot as it sits — leftovers can turn almost solid. Add ½–1 cup water when reheating, or cook the orzo separately if you\'re meal-prepping.'},
    {id:'r2',kind:'check',title:'Stir along the bottom',text:'Crushed tomatoes plus tomato paste and orzo scorch easily at a boil. Keep it to a gentle simmer and scrape the bottom when you stir.'},
    {id:'r3',kind:'check',title:'Nutrition is estimated',text:'The source doesn\'t list nutrition; these numbers are a rough estimate for 7 servings, without toppings.'},
    {id:'r4',kind:'reviews',title:'No recurring complaints',text:'The few comments are all positive; nobody reports changing it.'}
   ],
   logs:[],adj:[]},

  {id:'lib-moroccan-chickpea-stew',title:'Easy Moroccan Chickpea Stew',
   source:'tasteofhome.com',url:'https://www.tasteofhome.com/recipes/easy-moroccan-chickpea-stew/',
   time:'30 min',servings:4,tags:['vegan','stew','one pot','weeknight','dinner'],
   ing:[
    {a:'1 tbsp',n:'olive oil',s:'pantry',p:0},
    {a:'2 cups',n:'butternut squash, peeled and cubed (½")',s:'produce',p:0},
    {a:'1 large',n:'onion, chopped',s:'produce',p:0},
    {a:'1 large',n:'red bell pepper, chopped',s:'produce',p:0},
    {a:'1 tsp',n:'ground cinnamon',s:'pantry',p:0},
    {a:'½ tsp',n:'pepper',s:'pantry',p:0},
    {a:'¼ tsp',n:'ground ginger',s:'pantry',p:0},
    {a:'¼ tsp',n:'ground cumin',s:'pantry',p:0},
    {a:'¼ tsp',n:'salt',s:'pantry',p:0},
    {a:'1 can (15 oz)',n:'chickpeas, rinsed and drained',s:'canned',p:0},
    {a:'1 can (14½ oz)',n:'diced tomatoes, undrained',s:'canned',p:0},
    {a:'1 cup',n:'water',s:'pantry',p:0},
    {a:'',n:'chopped cilantro (optional)',s:'produce',p:0}
   ],
   steps:[
    'Heat the oil in a Dutch oven over medium-high. Add squash, onion and red pepper; cook and stir until the onion is translucent and the pepper crisp-tender, about 5 minutes. Stir in the seasonings.',
    'Add chickpeas, tomatoes and water; bring to a boil. Reduce heat, cover and simmer until the squash is tender, about 8 minutes. Top with cilantro if you like.'
   ],
   nut:{kcal:217,protein:7,carbs:38,fat:6,fiber:9},
   recs:[
    {id:'r1',kind:'check',title:'Light for a main course',text:'217 kcal and 7 g protein per serving. Serve over couscous or quinoa, or add a second can of chickpeas, to make it a full dinner.',
     change:{label:'Double chickpeas + couscous',ing:[[9,{a:'2 cans (15 oz)',n:'chickpeas, rinsed and drained',s:'canned'}]],addIng:[{a:'1 cup',n:'couscous',s:'pantry'}],addStep:['Serve over couscous (1 cup dry, cooked per the package).']}},
    {id:'r2',kind:'check',title:'Spices are on the shy side',text:'¼ tsp each of cumin and ginger is subtle for 4 servings. Doubling them, or adding 1 tsp smoked paprika or ras el hanout, gives a more Moroccan flavor.',
     change:{label:'Bolder spices',ing:[[6,{a:'½ tsp',n:'ground ginger',s:'pantry'}],[7,{a:'½ tsp',n:'ground cumin',s:'pantry'}]],addIng:[{a:'1 tsp',n:'smoked paprika',s:'pantry'}]}},
    {id:'r3',kind:'check',title:'Check the squash',text:'8 minutes is right for true ½" cubes; larger pre-cut squash from the store often needs 12–15.'}
   ],
   logs:[],adj:[]},

  {id:'lib-eggplant-parmesan',title:'Classic Eggplant Parmesan',
   source:'asimplepalate.com',url:'https://asimplepalate.com/blog/classic-eggplant-parmesan/',
   time:'1 hr 20 min',servings:6,tags:['vegetarian','italian','casserole','weekend','dinner'],
   ing:[
    {a:'2',n:'medium-large eggplants',s:'produce',p:0},
    {a:'½ cup',n:'all-purpose flour',s:'pantry',p:0},
    {a:'3 large',n:'eggs',s:'dairy',p:0},
    {a:'¼ cup',n:'olive oil (for frying)',s:'pantry',p:0},
    {a:'6 slices',n:'bread (or 1½ cups breadcrumbs)',s:'bakery',p:0},
    {a:'½ cup',n:'Parmesan, shredded (for crumbs)',s:'dairy',p:0},
    {a:'2 tsp',n:'dried Italian herbs',s:'pantry',p:0},
    {a:'1 tsp',n:'garlic powder',s:'pantry',p:0},
    {a:'½ tsp each',n:'salt and black pepper',s:'pantry',p:0},
    {a:'1½ cups',n:'marinara (2–2½ for saucier)',s:'canned',p:0},
    {a:'1 lb',n:'mozzarella',s:'dairy',p:0},
    {a:'⅓ cup',n:'Parmesan, shredded (for layering)',s:'dairy',p:0},
    {a:'1–2 tbsp',n:'fresh basil, chopped',s:'produce',p:0},
    {a:'1 tsp',n:'fresh oregano, chopped',s:'produce',p:0}
   ],
   steps:[
    'Slice the eggplant ¼–½" thick. Optional: salt the slices, rest 10 minutes and pat dry (the author no longer bothers).',
    'Breadcrumbs: toast the bread and pulse to crumbs, then mix with garlic powder, herbs, Parmesan, salt and pepper.',
    'Bread: set up bowls of flour, beaten eggs and crumbs (salt the flour and eggs). Coat each slice in flour, egg, then crumbs, pressing them on.',
    'Cook the slices — fry in 1–2 tbsp oil at a time, 2–3 minutes per side until golden; or bake on an oiled sheet pan at 350°F for 25 minutes.',
    'Assemble: marinara on the bottom of a casserole dish, then eggplant, mozzarella, a spoon of marinara and Parmesan. Repeat for a second layer.',
    'Bake uncovered at 400°F for 30 minutes until browned. Top with basil and oregano.'
   ],
   nut:{kcal:403,protein:25,carbs:37,fat:18,fiber:0},
   recs:[
    {id:'r1',kind:'check',title:'Plan on closer to 1 hr 45 min',text:'The listed 80 minutes assumes frying goes fast. Breading and frying 2 eggplants in batches, or the 25-minute bake method, plus the 30-minute final bake, usually runs 1½–2 hours.',
     change:{label:'Realistic time',time:'1 hr 45 min'}},
    {id:'r2',kind:'check',title:'Use more sauce',text:'1½ cups across two layers can bake up dry; the author herself suggests 2–2½ cups if you like it saucy.',
     change:{label:'More sauce',ing:[[9,{a:'2½ cups',n:'marinara',s:'canned'}]]}},
    {id:'r3',kind:'check',title:'Two oven temperatures',text:'The bake method is at 350°F, the final bake at 400°F — turn the oven up between them.'}
   ],
   logs:[],adj:[]},

  {id:'lib-asparagus-risotto',title:'Asparagus Risotto',
   source:'loveandlemons.com',url:'https://www.loveandlemons.com/asparagus-risotto/',
   time:'40 min',servings:4,tags:['vegetarian','risotto','spring','dinner'],
   ing:[
    {a:'1 tbsp',n:'extra-virgin olive oil',s:'pantry',p:0},
    {a:'2 cups',n:'leeks, chopped',s:'produce',p:0},
    {a:'½ tsp',n:'sea salt, plus more',s:'pantry',p:0},
    {a:'2',n:'garlic cloves, minced',s:'produce',p:0},
    {a:'1 cup',n:'Arborio rice, rinsed',s:'pantry',p:0},
    {a:'½ cup',n:'dry white wine',s:'beverages',p:0},
    {a:'4 cups',n:'vegetable broth, room temperature',s:'canned',p:0},
    {a:'1 bunch',n:'asparagus, ends trimmed, chopped',s:'produce',p:0},
    {a:'1 tbsp',n:'lemon juice',s:'produce',p:0},
    {a:'2 tbsp',n:'chives, chopped',s:'produce',p:0},
    {a:'¼ cup',n:'fresh herbs (parsley, basil, tarragon or dill)',s:'produce',p:0},
    {a:'',n:'lemon zest, for garnish',s:'produce',p:0},
    {a:'',n:'grated pecorino (optional)',s:'dairy',p:0},
    {a:'',n:'black pepper',s:'pantry',p:0}
   ],
   steps:[
    'Heat the oil in a large skillet or Dutch oven over medium. Add leeks, the salt and pepper; cook 4–5 minutes until soft. Stir in the garlic, then the rice for 1 minute. Add the wine and cook 1–2 minutes until it cooks down.',
    'Add the broth ¾ cup at a time, stirring, letting each addition absorb before the next. Add the asparagus with the last addition. Cook until the rice is al dente and creamy.',
    'Stir in lemon juice, chives and herbs; season to taste. Garnish with zest and more herbs; serve with cheese if you like.'
   ],
   nut:{kcal:290,protein:7,carbs:51,fat:4,fiber:4,est:true},
   recs:[
    {id:'r1',kind:'check',title:'Warm the broth',text:'The recipe calls for room-temperature broth. Keeping it at a bare simmer in a separate pot is the usual risotto practice — cold additions stall the cooking and stretch the time.'},
    {id:'r2',kind:'check',title:'Asparagus timing',text:'Added with the last ladle, chopped asparagus gets only ~5 minutes. Thick stalks may stay firm — add them one ladle earlier if yours are thick.'},
    {id:'r3',kind:'check',title:'Light protein; nutrition estimated',text:'About 7 g protein per serving without cheese (the source gives no nutrition; these are estimates). Pecorino, a fried egg on top, or white beans stirred in help.'}
   ],
   logs:[],adj:[]},

  {id:'lib-fresh-spring-rolls',title:'Fresh Spring Rolls',
   source:'loveandlemons.com',url:'https://www.loveandlemons.com/fresh-spring-rolls/',
   time:'30 min',servings:8,mealServings:3,tags:['vegan','no cook','summer','lunch'],
   ing:[
    {a:'4 oz',n:'vermicelli or other rice noodles',s:'pantry',p:0},
    {a:'8 large',n:'rice paper wrappers',s:'pantry',p:0},
    {a:'1',n:'carrot, julienned',s:'produce',p:0},
    {a:'½',n:'English cucumber, julienned',s:'produce',p:0},
    {a:'3 oz',n:'extra-firm tofu, cut into strips',s:'produce',p:0},
    {a:'1',n:'jalapeño, seeded, cut into strips',s:'produce',p:0},
    {a:'1',n:'mango, cut into strips',s:'produce',p:0},
    {a:'1',n:'avocado, cut into strips',s:'produce',p:0},
    {a:'',n:'fresh basil, mint and cilantro',s:'produce',p:0},
    {a:'½ cup',n:'creamy natural peanut butter',s:'pantry',p:0},
    {a:'2 tbsp',n:'lime juice',s:'produce',p:0},
    {a:'2 tbsp',n:'rice vinegar',s:'pantry',p:0},
    {a:'1 tbsp',n:'sriracha or sweet chili sauce',s:'canned',p:0},
    {a:'1 tbsp',n:'tamari or soy sauce',s:'pantry',p:0},
    {a:'1 tbsp',n:'toasted sesame oil',s:'pantry',p:0},
    {a:'2 tsp',n:'maple syrup',s:'pantry',p:0},
    {a:'1 tsp',n:'fresh ginger, grated',s:'produce',p:0},
    {a:'4–6 tbsp',n:'water',s:'pantry',p:0}
   ],
   steps:[
    'Cook the noodles per the package; drain and rinse under cold water.',
    'Fill a large bowl with warm water and lay a damp kitchen towel on your work surface.',
    'Soak a wrapper about 15 seconds until pliable, lay it on the towel, and fill the center with noodles, carrot, cucumber, tofu, jalapeño, mango, avocado and herbs. Fold in the sides and roll tightly. Repeat.',
    'Peanut sauce: stir together peanut butter, lime juice, vinegar, sriracha, tamari, sesame oil, maple syrup, ginger and 4 tbsp water; thin with more water a tablespoon at a time.',
    'Serve the rolls with the sauce for dipping.'
   ],
   nut:{kcal:296,protein:8,carbs:36,fat:14,fiber:4},
   recs:[
    {id:'r1',kind:'check',title:'Wrappers tearing?',text:'Rice paper keeps softening after it leaves the water. Dip for 5–10 seconds (not 15) and pull it while still slightly stiff; it finishes softening on the towel.'},
    {id:'r2',kind:'check',title:'More tofu for a meal',text:'3 oz tofu across 8 rolls is a garnish. Use the whole 12–14 oz block, pressed and pan-crisped with a little tamari, for ~15 g protein per 2 rolls.',
     change:{label:'Full block of tofu',ing:[[4,{a:'12 oz',n:'extra-firm tofu, pressed, cut into strips',s:'produce'}]],steps:[[0,'Cook the noodles per the package; drain and rinse under cold water. Pan-fry the tofu strips in a little oil until golden, splash with tamari, and let cool.']]}},
    {id:'r3',kind:'check',title:'8 servings = 8 rolls',text:'Nutrition is per roll with sauce. Two or three rolls make a meal.'}
   ],
   logs:[],adj:[]},

  {id:'lib-vegan-chorizo-tofu-crumbles',title:'Vegan Chorizo Tofu Crumbles',
   source:'itdoesnttastelikechicken.com',url:'https://itdoesnttastelikechicken.com/vegan-chorizo-tofu-crumbles/',
   time:'—',servings:4,tags:['vegan','tofu','tacos','meal prep'],linkOnly:true,
   ing:[],steps:[],
   nut:{kcal:0,protein:0,carbs:0,fat:0,fiber:0},
   recs:[
    {id:'r1',kind:'check',title:'Ingredients not filled in yet',text:'This site blocks automated reading, so only the link is saved. Open the original, then save the page as a PDF (Share → Print → Save as PDF) and send it to Claude, or add the ingredients with Write it yourself.'}
   ],
   logs:[],adj:[]},

  {id:'lib-veggie-lasagna-soup',title:'Veggie-Loaded Vegetarian Lasagna Soup',
   source:'thenaturalnurturer.com',url:'https://thenaturalnurturer.com/veggie-loaded-lasagna-soup-vegetarian/',
   time:'32 min',servings:6,tags:['vegetarian','soup','one pot','weeknight','dinner'],
   ing:[
    {a:'2 tbsp',n:'olive oil',s:'pantry',p:0},
    {a:'1 cup',n:'onion, diced (½ large)',s:'produce',p:0},
    {a:'1 cup',n:'carrots, diced (2 large)',s:'produce',p:0},
    {a:'1 cup',n:'zucchini, diced (1 small)',s:'produce',p:0},
    {a:'¾ tsp',n:'salt, divided',s:'pantry',p:0},
    {a:'2 tbsp',n:'balsamic vinegar',s:'pantry',p:0},
    {a:'2 cups',n:'pasta sauce / marinara',s:'canned',p:0},
    {a:'2 cups',n:'vegetable broth',s:'canned',p:0},
    {a:'3–4 cups',n:'baby spinach, roughly chopped',s:'produce',p:0},
    {a:'6 oz',n:'lasagna noodles (6–8 sheets), broken into 2" pieces',s:'pantry',p:0},
    {a:'⅓ cup',n:'grated Parmesan (optional)',s:'dairy',p:0},
    {a:'',n:'shredded mozzarella and/or ricotta, for serving (optional)',s:'dairy',p:0},
    {a:'',n:'fresh basil, for garnish (optional)',s:'produce',p:0}
   ],
   steps:[
    'Heat the oil in a large pot over medium-high. Cook onion and carrot 2–3 minutes.',
    'Add zucchini and cook until it starts to soften, about 2 minutes. Stir in ½ tsp salt.',
    'Add balsamic and scrape up the browned bits. Stir in the marinara and broth and bring to a simmer.',
    'Add the broken noodles and simmer until tender, 10–12 minutes (or per the box).',
    'Stir in the remaining ¼ tsp salt, the spinach and Parmesan; let the spinach wilt 1–2 minutes. Season with salt and pepper.',
    'Serve topped with mozzarella and/or a spoon of ricotta and basil.'
   ],
   nut:{kcal:225,protein:8,carbs:33,fat:7,fiber:4},
   recs:[
    {id:'r1',kind:'check',title:'Likely too thick — add broth',text:'6 oz of noodles cooked in only 4 cups of liquid absorb most of it; expect something closer to a stew. Have 1–2 extra cups of broth ready.',
     change:{label:'More broth',ing:[[7,{a:'3–4 cups',n:'vegetable broth',s:'canned'}]]}},
    {id:'r2',kind:'check',title:'Leftovers go mushy',text:'The noodles keep soaking up broth overnight. For meal prep, cook the noodles separately and add them to each bowl.'},
    {id:'r3',kind:'check',title:'Pepper is used but not listed',text:'Step 5 seasons with pepper; it\'s not in the ingredient list. Apply this to add it.',
     change:{label:'List pepper',addIng:[{a:'',n:'black pepper',s:'pantry'}]}},
    {id:'r4',kind:'check',title:'High sodium',text:'1,149 mg per serving, mostly from jarred sauce and broth. Low-sodium versions of both bring it down a lot.'}
   ],
   logs:[],adj:[]},

  {id:'lib-red-lentil-soup',title:'The Absolute Best Lentil Soup',
   source:'thekitchn.com',url:'https://www.thekitchn.com/lentil-soup-recipe-23004361',
   time:'35 min',servings:8,tags:['vegan','soup','one pot','meal prep','high protein','dinner'],
   ing:[
    {a:'2 medium',n:'carrots',s:'produce',p:0},
    {a:'1 medium',n:'yellow onion',s:'produce',p:0},
    {a:'4 cloves',n:'garlic',s:'produce',p:0},
    {a:'2 cups (1 lb)',n:'dried red lentils',s:'pantry',p:0},
    {a:'3 tbsp',n:'olive oil',s:'pantry',p:0},
    {a:'1 tbsp',n:'curry powder',s:'pantry',p:0},
    {a:'1 tsp',n:'ground cumin',s:'pantry',p:0},
    {a:'1 tsp',n:'dried thyme',s:'pantry',p:0},
    {a:'½ tsp',n:'kosher salt',s:'pantry',p:0},
    {a:'1 can (15 oz)',n:'tomato sauce',s:'canned',p:0},
    {a:'6 cups',n:'low-sodium vegetable broth',s:'canned',p:0},
    {a:'5 cups (5 oz)',n:'baby spinach',s:'produce',p:0}
   ],
   steps:[
    'Peel and dice the carrots and onion. Mince the garlic.',
    'Pick through the lentils, discarding broken or discolored ones, and rinse until the water runs clear, about 1 minute.',
    'Heat the oil in a large pot over medium-high until shimmering. Sauté carrots and onion until softened, about 5 minutes. Add garlic, curry powder, cumin, thyme and salt; cook until fragrant, about 1 minute.',
    'Add lentils, tomato sauce and broth; bring to a simmer. Cover, reduce to a gentle simmer, and cook, stirring occasionally, until the lentils are tender, 18–22 minutes.',
    'Off the heat, stir in the spinach until wilted. Serve.'
   ],
   nut:{kcal:280,protein:16,carbs:44,fat:6,fiber:9},
   recs:[
    {id:'r1',kind:'check',title:'Finish with acid and salt',text:'With low-sodium broth and only ½ tsp salt, red lentil soups often taste flat. Taste at the end — a squeeze of lemon and another pinch of salt usually make the difference.',
     change:{label:'Lemon finish',addIng:[{a:'1',n:'lemon',s:'produce'}],steps:[[4,'Off the heat, stir in the spinach until wilted. Add the juice of ½–1 lemon, taste, and adjust the salt. Serve.']]}},
    {id:'r2',kind:'check',title:'It thickens as it cools',text:'Red lentils break down and set up in the fridge. Thin leftovers with broth or water when reheating.'}
   ],
   logs:[],adj:[]},

  {id:'lib-quinoa-stuffed-peppers',title:'Vegetarian Quinoa Stuffed Peppers',
   source:'feelgoodfoodie.net',url:'https://feelgoodfoodie.net/recipe/vegetarian-quinoa-stuffed-peppers/',
   time:'—',servings:4,tags:['vegetarian','peppers','quinoa','dinner'],linkOnly:true,
   ing:[],steps:[],
   nut:{kcal:0,protein:0,carbs:0,fat:0,fiber:0},
   recs:[
    {id:'r1',kind:'check',title:'Ingredients not filled in yet',text:'This site blocks automated reading, so only the link is saved. Open the original, then save the page as a PDF (Share → Print → Save as PDF) and send it to Claude, or add the ingredients with Write it yourself.'}
   ],
      logs:[],adj:[]},

  {id:'lib-rrp-cream-rigatoni',title:'Roasted Red Pepper Cream Rigatoni',
   source:'Home Chef card (PDF)',url:'',
   time:'20–30 min',servings:2,tags:['pasta','vegetarian','meal kit','dinner'],
   ing:[
    {a:'5 oz',n:'rigatoni',s:'pantry',p:0},
    {a:'4 oz',n:'kale',s:'produce',p:0},
    {a:'1 can (15.5 oz)',n:'cannellini beans',s:'canned',p:0},
    {a:'4 oz',n:'light cream',s:'dairy',p:0},
    {a:'2 tbsp',n:'roasted red pepper pesto',s:'canned',p:0},
    {a:'1 tbsp',n:'butter',s:'dairy',p:0},
    {a:'1 oz',n:'grated Parmesan',s:'dairy',p:0},
    {a:'½ oz',n:'sliced almonds',s:'snacks',p:0},
    {a:'1 tsp',n:'seasoned salt blend',s:'pantry',p:0},
    {a:'2 tsp',n:'olive oil',s:'pantry',p:0},
    {a:'',n:'salt',s:'pantry',p:0}
   ],
   steps:[
    'Before you start: bring 8 cups water and 2 tsp salt to a boil in a medium pot.',
    'Cook the pasta: add rigatoni and cook until al dente, 11–13 minutes. Reserve ½ cup pasta water, then drain. Prep while it cooks.',
    'Prep: stem and coarsely chop the kale. Drain and rinse the beans.',
    'Kale and beans: heat 2 tsp olive oil in a large non-stick pan over medium-high. Add kale and a pinch of salt; stir until wilted, 2–3 minutes. Stir in beans and seasoned salt until warmed through, 1–2 minutes. Move to a plate; keep the pan on the heat.',
    'Sauce: add cream to the hot pan and bring to a simmer. Stir in half the Parmesan, the butter and the pesto until the butter melts, 1–2 minutes. Add pasta, 2 tbsp pasta water, and the kale and beans; stir to combine, loosening with more pasta water 1 tbsp at a time. Remove from heat.',
    'Serve topped with the remaining Parmesan and the almonds.',
    'Add protein: shrimp in 1 tsp oil over medium-high, 2–3 min then 1–2 min (145°F); or diced chicken in 2 tsp oil, 5–7 min (165°F).'
   ],
   nut:{kcal:822,protein:32,carbs:100,fat:34,fiber:0},
   recs:[
    {id:'r1',kind:'check',title:'Toast the almonds',text:'The almonds go on raw. A 2-minute toast in the dry pan before the kale makes them much better — just don\'t walk away.',
     change:{label:'Toast almonds',steps:[[3,'Kale and beans: toast the almonds in the dry large pan over medium, shaking, until golden, 2 minutes; set aside. Add 2 tsp olive oil and raise to medium-high. Add kale and a pinch of salt; stir until wilted, 2–3 minutes. Stir in beans and seasoned salt until warmed through, 1–2 minutes. Move to a plate; keep the pan on the heat.']]}},
    {id:'r2',kind:'check',title:'Keep the Parmesan smooth',text:'Grated Parmesan can clump if the cream is boiling hard. Simmer gently and stir it in a little at a time.'},
    {id:'r3',kind:'check',title:'Rich and salty',text:'822 kcal and 1,481 mg sodium per serving, mostly from seasoned salt, pesto and cheese. Skip the seasoned salt if your pesto is salty; the beans already make it a good protein dinner (32 g).'}
   ],
   logs:[],adj:[]},

  {id:'lib-cranberry-goat-cheese-spinach-salad',title:'Cranberry & Goat Cheese Spinach Salad',
   source:'Home Chef card (PDF)',url:'',
   time:'5 min',servings:2,tags:['salad','vegetarian','no cook','lunch','meal kit'],
   ing:[
    {a:'5 oz',n:'baby spinach',s:'produce',p:0},
    {a:'3 fl oz',n:'Dijon honey mustard dressing',s:'canned',p:0},
    {a:'1 oz',n:'walnut halves',s:'snacks',p:0},
    {a:'1 oz',n:'dried cranberries',s:'snacks',p:0},
    {a:'1 oz',n:'goat cheese',s:'dairy',p:0},
    {a:'1 oz',n:'crispy beet strips',s:'snacks',p:0}
   ],
   steps:[
    'Rinse and dry the spinach. Toss with the goat cheese (crumbled by hand), walnuts, dried cranberries and dressing.',
    'Top with the crispy beet strips.',
    'Add protein: season chicken breast with ¼ tsp salt and pepper and cook in 2 tsp oil over medium-high, 5–7 min (165°F), then slice; or warm pre-cooked roasted chicken 1–2 min.'
   ],
   nut:{kcal:423,protein:7,carbs:26,fat:31,fiber:0},
   recs:[
    {id:'r1',kind:'check',title:'Not much of an entrée as written',text:'7 g protein per serving. A can of chickpeas (or the card\'s chicken option) makes it a meal.',
     change:{label:'Add chickpeas',addIng:[{a:'1 can',n:'chickpeas, rinsed and patted dry',s:'canned'}],steps:[[0,'Rinse and dry the spinach. Toss with the goat cheese (crumbled by hand), walnuts, dried cranberries, chickpeas and dressing.']]}},
    {id:'r2',kind:'check',title:'Go easy on the dressing',text:'3 fl oz for 5 oz of spinach is heavy and drives most of the 31 g fat. Toss with half, then add to taste — baby spinach wilts fast under too much dressing.'},
    {id:'r3',kind:'check',title:'Beet strips are hard to find',text:'Outside the kit, use beet chips, or skip them and add more walnuts for crunch.'}
   ],
   mealServings:1,logs:[],adj:[]},

  {id:'lib-fiesta-wrap',title:'La Fiesta Wrap',
   source:'Mine — bowl, made as a wrap',url:'',
   time:'20 min',servings:2,tags:['wrap','lunch','dinner','mine'],
   ing:[
    {a:'2 large',n:'flour tortillas (burrito size)',s:'bakery',p:0},
    {a:'6 oz',n:'cooked chicken and/or steak, sliced',s:'meat',p:0},
    {a:'⅔ cup',n:'black beans, rinsed',s:'canned',p:0},
    {a:'½ cup',n:'fire-roasted corn',s:'frozen',p:0},
    {a:'1½ cups',n:'romaine, shredded',s:'produce',p:0},
    {a:'1',n:'tomato, diced',s:'produce',p:0},
    {a:'½',n:'avocado, sliced',s:'produce',p:0},
    {a:'⅓ cup',n:'shredded white cheddar',s:'dairy',p:0},
    {a:'3 tbsp',n:'avocado ranch',s:'canned',p:0},
    {a:'1 handful',n:'tortilla strips',s:'snacks',p:0}
   ],
   steps:[
    'Warm the chicken or steak, black beans and corn (a skillet or microwave is fine). Pat the beans and corn dry so the wrap doesn\'t get soggy.',
    'Warm the tortillas in a dry pan or microwave for 15–20 seconds so they roll without cracking.',
    'Down the middle of each tortilla, layer cheddar first (it melts against the warm fillings), then protein, beans and corn, romaine, tomato and avocado. Drizzle with avocado ranch and add the tortilla strips last for crunch.',
    'Fold in the sides, roll tightly, then toast seam-side down in a dry pan for 1–2 minutes to seal. Halve and serve.'
   ],
   nut:{kcal:765,protein:44,carbs:72,fat:34,fiber:12,est:true},
   recs:[
    {id:'r1',kind:'check',title:'Amounts and nutrition are estimates',text:'This is built from the bowl\'s ingredient list, so portions are a starting point for 2 wraps — adjust after the first try. Nutrition is estimated with chicken.'},
    {id:'r2',kind:'check',title:'Keep it from going soggy',text:'Wet fillings (tomato, ranch) go in the middle, not against the tortilla; dice and drain the tomato. If packing for later, keep the ranch and tortilla strips on the side.'},
    {id:'r3',kind:'check',title:'Make it vegetarian',text:'Swap the chicken/steak for the vegan chorizo tofu crumbles or a second scoop of black beans.'}
   ],
   logs:[],adj:[]},

  {id:'lib-garden-goat-grilled-cheese',title:'"Garden Goat" Grilled Cheese',
   source:'Mine',url:'',
   time:'45 min (10 with onions made ahead)',servings:1,tags:['sandwich','vegetarian','lunch','mine'],
   ing:[
    {a:'2 slices',n:'marble squaw bread (some bakeries now sell it as Sierra bread)',s:'bakery',p:0},
    {a:'1½ oz',n:'goat cheese, softened',s:'dairy',p:0},
    {a:'½',n:'yellow onion, thinly sliced (for caramelizing)',s:'produce',p:0},
    {a:'2 tbsp',n:'sun-dried tomatoes, chopped',s:'canned',p:0},
    {a:'1 tbsp',n:'arugula pesto',s:'canned',p:0},
    {a:'1 tbsp',n:'butter (plus 1 tsp oil for the onions)',s:'dairy',p:0}
   ],
   steps:[
    'Caramelize the onion: cook the slices in 1 tsp oil with a pinch of salt over medium-low, stirring now and then, until deep golden and jammy, 30–40 minutes. Add a splash of water if they stick.',
    'Spread goat cheese on one slice of bread and arugula pesto on the other.',
    'Layer caramelized onions and sun-dried tomatoes over the goat cheese; close the sandwich.',
    'Butter the outsides. Cook in a pan over medium-low, covered, 3–4 minutes per side until golden and the goat cheese is warm and soft.'
   ],
   nut:{kcal:640,protein:20,carbs:49,fat:42,fiber:4,est:true},
   recs:[
    {id:'r1',kind:'check',title:'Onions take 30–40 minutes',text:'Properly caramelized onions can\'t be rushed — high heat just browns them. Make a big batch on the weekend; they keep 5 days in the fridge or freeze in portions.'},
    {id:'r2',kind:'check',title:'Goat cheese doesn\'t melt or bind',text:'It softens but won\'t hold the sandwich together. A slice of fontina or mozzarella under the goat cheese gives the stretch of a grilled cheese.',
     change:{label:'Add a melting cheese',addIng:[{a:'1 slice',n:'fontina or mozzarella',s:'dairy'}],steps:[[2,'Layer a slice of fontina or mozzarella, the caramelized onions and sun-dried tomatoes over the goat cheese; close the sandwich.']]}},
    {id:'r3',kind:'check',title:'Low heat, lid on',text:'Dense marble bread browns before the middle warms. Medium-low with a lid gets it hot through without burning.'}
   ],
   logs:[],adj:[]},

  {id:'lib-caprese-sandwich',title:'Caprese Sandwich',
   source:'tastefullygrace.com',url:'https://tastefullygrace.com/caprese-sandwich/',
   time:'20 min',servings:4,tags:['sandwich','vegetarian','summer','lunch'],
   ing:[
    {a:'4–6',n:'ciabatta rolls',s:'bakery',p:0},
    {a:'1 lb',n:'fresh mozzarella, sliced',s:'dairy',p:0},
    {a:'1½ lb',n:'Campari or Roma tomatoes, sliced ½"',s:'produce',p:0},
    {a:'1 large handful',n:'fresh basil leaves',s:'produce',p:0},
    {a:'1 large clove',n:'garlic, peeled',s:'produce',p:0},
    {a:'',n:'thick balsamic glaze',s:'canned',p:0},
    {a:'',n:'extra-virgin olive oil',s:'pantry',p:0},
    {a:'',n:'flaky finishing salt',s:'pantry',p:0}
   ],
   steps:[
    'Heat the broiler. Split the rolls lengthwise.',
    'Broil cut-side up on a baking sheet until warm and just toasting, 2–4 minutes.',
    'Rub the cut sides with the garlic clove.',
    'Drizzle each piece with olive oil — generous, not soaked.',
    'On the bottoms, layer mozzarella, tomato and basil.',
    'Drizzle with balsamic glaze and sprinkle with salt.',
    'Close with the tops and halve if you like. Best eaten right away.'
   ],
   nut:{kcal:649,protein:31,carbs:43,fat:40,fiber:3},
   autoApply:['r1'],
   recs:[
    {id:'r1',kind:'mine',title:'With pesto (how you make it)',text:'You always have pesto on hand: spread it on the top halves instead of the olive-oil drizzle there. It\'s marked as usually on hand, so it\'s left off the shopping list.',
     change:{label:'Your pesto version',addIng:[{a:'2–3 tbsp',n:'pesto',s:'canned',h:1}],steps:[[3,'Drizzle the bottoms with olive oil and spread pesto on the tops.']]}},
    {id:'r2',kind:'check',title:'Salt and drain the tomatoes',text:'Juicy tomato slices soak the bread. Salt them on a towel for 10 minutes and pat dry before layering.'},
    {id:'r3',kind:'check',title:'Mozzarella as a moisture barrier',text:'Putting the mozzarella directly on the bread (as written) keeps tomato juice off it — keep that order, especially if packing for later.'},
    {id:'r4',kind:'reviews',title:'Few reviews yet',text:'Rated 5 stars by 8 people, with only one written comment (positive, no changes).'}
   ],
      logs:[],adj:[]},

  {id:'lib-breakfast-burrito',title:'Breakfast Burrito',
   source:'Mine — from a café menu',url:'',
   time:'45 min',servings:4,tags:['breakfast','vegetarian','tofu','meal prep','mine'],
   ing:[
    {a:'4 large',n:'flour tortillas (burrito size)',s:'bakery',p:0},
    {a:'1 lb',n:'Yukon Gold potatoes, ½" dice',s:'produce',p:0},
    {a:'1 tsp each',n:'smoked paprika and garlic powder',s:'pantry',p:0},
    {a:'14 oz',n:'extra-firm tofu, pressed',s:'produce',p:0},
    {a:'½ tsp',n:'ground turmeric',s:'pantry',p:0},
    {a:'2 tbsp',n:'nutritional yeast (optional)',s:'pantry',p:0},
    {a:'8 oz',n:'soy chorizo (or the vegan chorizo tofu crumbles)',s:'meat',p:0},
    {a:'1 can (4 oz)',n:'diced green chiles, drained',s:'canned',p:0},
    {a:'1 cup',n:'shredded cheddar or Monterey Jack',s:'dairy',p:0},
    {a:'3 Roma',n:'tomatoes (salsa)',s:'produce',p:0},
    {a:'¼',n:'white onion (salsa)',s:'produce',p:0},
    {a:'½ bunch',n:'cilantro (salsa)',s:'produce',p:0},
    {a:'1',n:'lime (salsa)',s:'produce',p:0},
    {a:'2 tbsp',n:'olive oil',s:'pantry',p:0},
    {a:'',n:'salt and pepper',s:'pantry',p:0}
   ],
   steps:[
    'Potatoes: heat the oven to 425°F. Toss the diced potatoes with 1 tbsp oil, the paprika, garlic powder and ½ tsp salt; roast in one layer until crisp, 25–30 minutes, turning once.',
    'Salsa: finely chop the tomatoes, onion and cilantro; mix with the lime juice and a good pinch of salt. Let it sit while you cook.',
    'Chorizo: brown the soy chorizo in a skillet over medium, breaking it up, 5–6 minutes. Move to a bowl.',
    'Tofu scramble: in the same pan, add 1 tbsp oil and crumble in the tofu. Cook over medium-high until the moisture is gone and it starts to brown, 6–8 minutes. Stir in the turmeric, nutritional yeast, green chiles, ½ tsp salt and pepper.',
    'Warm the tortillas so they fold without cracking. Down the middle of each, layer cheese, potatoes, chorizo and tofu scramble. Fold in the sides and roll tightly.',
    'Grill seam-side down in a dry skillet or panini press over medium until golden and sealed, 2–3 minutes per side. Serve with the salsa.'
   ],
   nut:{kcal:765,protein:34,carbs:83,fat:35,fiber:9,est:true},
   recs:[
    {id:'r1',kind:'check',title:'The TAG upgrade: jalapeño + avocado',text:'The menu\'s TAG version adds fresh jalapeño and avocado inside the burrito.',
     change:{label:'TAG version',addIng:[{a:'1',n:'jalapeño, finely diced',s:'produce'},{a:'1',n:'avocado, sliced',s:'produce'}],steps:[[4,'Warm the tortillas so they fold without cracking. Down the middle of each, layer cheese, potatoes, chorizo, tofu scramble, fresh jalapeño and avocado. Fold in the sides and roll tightly.']]}},
    {id:'r2',kind:'check',title:'Built from a menu description',text:'Amounts, method and nutrition are estimates for 4 burritos — adjust after the first try.'},
    {id:'r3',kind:'check',title:'Dry tofu, crisp potatoes',text:'Watery tofu and soft potatoes are what make breakfast burritos soggy. Press the tofu 15+ minutes and cook it until it squeaks; don\'t crowd the potatoes on the sheet pan; drain the green chiles well.'},
    {id:'r4',kind:'check',title:'Freezes well',text:'Skip the avocado and salsa, wrap each grilled burrito in foil and freeze up to 2 months. Reheat in the foil at 375°F for 30–35 minutes from frozen, or microwave unwrapped 2–3 minutes then crisp in a pan.'}
   ],
   logs:[],adj:[]},

  {id:'lib-das-visbek',title:'Das Visbek',
   source:'Mine — from a café menu',url:'',
   time:'10 min',servings:1,tags:['breakfast','sandwich','vegetarian','mine'],
   ing:[
    {a:'1',n:'tomato basil bagel',s:'bakery',p:0},
    {a:'2',n:'eggs',s:'dairy',p:0},
    {a:'1 slice',n:'Swiss cheese',s:'dairy',p:0},
    {a:'½',n:'avocado',s:'produce',p:0},
    {a:'1 tbsp',n:'pesto',s:'canned',p:0,h:1},
    {a:'2 slices',n:'tomato',s:'produce',p:0},
    {a:'1 handful',n:'mixed greens',s:'produce',p:0},
    {a:'1 tsp',n:'butter',s:'dairy',p:0},
    {a:'',n:'salt and pepper',s:'pantry',p:0}
   ],
   steps:[
    'Split and toast the bagel.',
    'Beat the eggs with a pinch of salt and pepper. Melt the butter in a small non-stick pan over medium-low, pour in the eggs and let them set, then fold into a square about the size of the bagel, 2–3 minutes.',
    'Lay the Swiss on the eggs, cover the pan and let it melt, about 30 seconds.',
    'Spread pesto on the top half of the bagel. Mash or slice the avocado onto the bottom half and season it.',
    'Stack the egg and cheese on the avocado, then the tomato and mixed greens. Close and serve.'
   ],
   nut:{kcal:765,protein:33,carbs:67,fat:43,fiber:8,est:true},
   recs:[
    {id:'r1',kind:'check',title:'Built from a menu description',text:'The egg style and amounts are my guess (a folded egg sized to the bagel). Nutrition is estimated.'},
    {id:'r2',kind:'check',title:'Can\'t find tomato basil bagels?',text:'Use a plain or everything bagel and add a few fresh basil leaves with the greens — it gets you most of the way there.'},
    {id:'r3',kind:'check',title:'Keep the greens crisp',text:'Hot egg wilts greens on contact. Keep the tomato between the egg and the greens, and dry the greens well.'}
   ],
   logs:[],adj:[]}
];

