// ---- Recipe library ----
// Recipes kept in the repo. They are merged into the app on every device the
// first time it loads after a rebuild. Deleting one in the app hides it for
// good on that device. Ingredient fields: a = amount, n = name,
// s = aisle (produce, bakery, meat, dairy, canned, pantry, snacks, beverages,
// frozen, house), p = price (0 = unknown). Give each recipe a stable unique id.
const RECIPE_LIBRARY=[
  {id:'lib-buffalo-cauliflower-tacos',title:'Vegan Buffalo Cauliflower Tacos',
   source:'thissavoryvegan.com',url:'https://www.thissavoryvegan.com/vegan-buffalo-cauliflower-tacos/',
   time:'25 min',servings:8,tags:['vegan','tacos','weeknight'],
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
   nut:{kcal:191,protein:5,carbs:22,fat:10,fiber:0},logs:[],adj:[]},

  {id:'lib-cashew-tofu',title:'Cashew Tofu',
   source:'Home Chef card (PDF)',url:'',
   time:'35–45 min',servings:2,tags:['tofu','stir-fry','rice','meal kit'],
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
   nut:{kcal:783,protein:28,carbs:104,fat:30,fiber:0},logs:[],adj:[]}
];

