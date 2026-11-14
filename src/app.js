
const RED='#B93A26', GREEN='#2E6B4E', MUST='#D3A32E', INK='#1A1712', CREAM='#F7F1E3';
const DV={kcal:2000,protein:50,carbs:275,fat:78,fiber:28};

const ICONS={
  produce:['M11 20c-4 0-7-3-7-7 0-5 4-9 16-9 0 9-4 12-9 12','M4 20c3-6 7-9 12-10'],
  meat:['M5 19l-1.5 1.5','M7 17a5 5 0 1 1 7-7 5 5 0 0 1 0 7 5 5 0 0 1-7 0Z','M14 10l4-4'],
  dairy:['M9 3h6v3l2.5 4V20a1 1 0 0 1-1 1H7.5a1 1 0 0 1-1-1V10L9 6Z','M6.5 12h11'],
  bakery:['M3 13a4 4 0 0 1 4-4h10a4 4 0 0 1 0 8H7a4 4 0 0 1-4-4Z','M8 9v8','M13 9v8'],
  canned:['M6 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7','M6 7c0-1.1 2.7-2 6-2s6 .9 6 2-2.7 2-6 2-6-.9-6-2Z','M8.5 11.5h7'],
  pantry:['M7 9h10v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z','M8.5 9V6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v3','M7 13h10'],
  snacks:['M5 8h14l-1.6 11.3a2 2 0 0 1-2 1.7H8.6a2 2 0 0 1-2-1.7Z','M9 8V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V8'],
  beverages:['M6 7h12l-1.3 12.2a2 2 0 0 1-2 1.8H9.3a2 2 0 0 1-2-1.8Z','M15 3l-2 4','M7 12h10'],
  frozen:['M12 3v18','M4.2 7.5l15.6 9','M19.8 7.5l-15.6 9','M12 7l2.5-2.5M12 7L9.5 4.5','M12 17l2.5 2.5M12 17l-2.5 2.5'],
  house:['M6 9h7v12H6Z','M13 13h5','M9 9V5a1 1 0 0 1 1-1h2','M16 4h3v5'],
  other:['M4 8h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z','M4 8l2-4h12l2 4','M10 12h4']
};
const SECTION_COLOR={produce:GREEN,meat:RED,dairy:'#8A6A14',bakery:MUST,canned:'#7A5230',pantry:'#8A6A14',snacks:RED,beverages:'#3F7A8C',frozen:'#3F7A8C',house:'rgba(26,23,18,0.45)',other:'rgba(26,23,18,0.45)'};

const MODIFIERS=[
  [/\b(soy sauce|hot sauce|fish sauce|worcestershire|sriracha|tahini|sesame paste|miso paste|curry paste|tomato powder)\b/,'pantry'],
  [/\b(canned|can of|cans of|tinned|jarred|jar of|diced|crushed|stewed|pureed|puree|pickled|marinated|refried|paste|passata|in syrup|in juice|sauce)\b/,'canned'],
  [/\b(frozen)\b/,'frozen'],
  [/\b(juice|soda|cola|seltzer|sparkling|lemonade|iced tea|kombucha|beer|wine|coffee beans|ground coffee)\b/,'beverages'],
  [/\b(chips|crisps|crackers|pretzels|popcorn|cookies|candy|granola bar|trail mix|jerky)\b/,'snacks'],
  [/\b(dried|dry|powdered)\b|\bground\b(?!\s+(?:beef|pork|turkey|chicken|lamb|veal|bison|meat|sausage))/,'pantry']
];

const KEYS={
  produce:'apple apples banana bananas lettuce romaine spinach arugula kale chard tomato tomatoes onion onions shallot scallion leek garlic carrot carrots potato potatoes sweet potato yam avocado lemon lemons lime limes orange oranges grapefruit cilantro basil thyme rosemary parsley dill mint sage oregano broccoli cauliflower mushroom mushrooms cucumber celery ginger zucchini squash pumpkin eggplant pepper peppers jalapeno poblano cabbage brussels asparagus green beans corn radish beet turnip parsnip fennel artichoke pear pears peach peaches plum grape grapes strawberr blueberr raspberr blackberr cherry cherries melon watermelon cantaloupe pineapple mango kiwi papaya pomegranate salad greens herbs sprouts bok choy snap peas snow peas',
  meat:'chicken thigh thighs breast breasts wings drumstick beef steak ribeye sirloin brisket chuck ground beef mince pork chop tenderloin ribs bacon pancetta prosciutto sausage chorizo salami turkey lamb veal duck ham hot dog bratwurst salmon tuna cod halibut tilapia trout snapper bass shrimp prawns scallops mussels clams oysters crab lobster squid calamari anchovy sardine',
  dairy:'milk whole milk skim buttermilk cream heavy cream half and half sour cream creme fraiche yogurt greek yogurt kefir butter ghee margarine cheese cheddar mozzarella parmesan pecorino gruyere swiss provolone gouda brie feta goat cheese ricotta cottage cheese cream cheese mascarpone egg eggs',
  bakery:'bread sourdough baguette ciabatta focaccia rye pumpernickel brioche challah bun buns roll rolls bagel english muffin tortilla tortillas pita naan croissant danish muffin scone donut cake pie crust pizza dough breadcrumbs panko',
  canned:'canned beans black beans chickpeas garbanzo kidney beans cannellini pinto refried tomato sauce tomato paste crushed tomatoes diced tomatoes whole tomatoes passata coconut milk evaporated condensed tuna can sardines olives capers pickles pickled artichoke hearts roasted peppers salsa marinara enchilada sauce chipotle adobo soup broth stock',
  pantry:'rice basmati jasmine arborio brown rice quinoa couscous farro barley bulgur lentils split peas pasta spaghetti penne rigatoni fusilli orzo lasagna noodles ramen soba udon flour bread flour cornmeal polenta cornstarch baking powder baking soda yeast sugar brown sugar powdered sugar honey maple syrup molasses salt kosher salt pepper peppercorns cumin paprika smoked paprika chili powder cayenne turmeric coriander cardamom cinnamon nutmeg cloves allspice bay leaves curry powder garam masala za atar sumac vanilla extract oil olive oil vegetable oil canola sesame oil coconut oil vinegar balsamic red wine vinegar rice vinegar apple cider soy sauce tamari fish sauce worcestershire hot sauce sriracha mustard dijon ketchup mayonnaise mayo tahini peanut butter almond butter jam jelly preserves nutella oats oatmeal cereal granola almonds walnuts pecans cashews pistachios peanuts sunflower seeds pumpkin seeds sesame seeds chia flax raisins dates figs apricots cranberries chocolate cocoa chocolate chips gelatin cornflakes tea coffee filters',
  snacks:'chips crisps tortilla chips crackers pretzels popcorn cookies biscuits candy chocolate bar granola bars protein bar trail mix nuts jerky fruit snacks gum',
  beverages:'water sparkling water seltzer soda cola juice orange juice apple juice lemonade iced tea kombucha coffee tea beer wine cider sports drink energy drink almond milk oat milk soy milk coconut water',
  frozen:'frozen peas frozen corn frozen berries frozen fruit ice cream gelato sorbet popsicles frozen pizza frozen waffles fries tater tots frozen vegetables frozen spinach ice',
  house:'paper towels toilet paper tissues napkins detergent laundry dish soap dishwasher pods sponges trash bags garbage bags foil aluminum foil parchment plastic wrap ziploc bags cleaner bleach disinfectant glass cleaner hand soap shampoo conditioner toothpaste deodorant razors batteries light bulbs lighter matches candles'
};

const CLUSTERS=[
  {id:'canned',name:'Canned & Jarred',test:/\b(canned|can|cans|tinned|jarred|jar)\b/},
  {id:'snacks',name:'Snacks',test:/\b(chips|crackers|cookies|candy|popcorn|pretzels|bars?)\b/},
  {id:'beverages',name:'Beverages',test:/\b(juice|soda|seltzer|water|coffee|tea|beer|wine|drink)\b/},
  {id:'baby',name:'Baby & Pet',test:/\b(diaper|formula|wipes|dog|cat|puppy|kitten|litter)\b/},
  {id:'baking',name:'Baking',test:/\b(flour|sugar|yeast|baking|vanilla|cocoa|sprinkles|frosting)\b/},
  {id:'spices',name:'Spices',test:/\b(cumin|paprika|turmeric|oregano|cinnamon|curry|chili powder|peppercorn)\b/}
];

const FIXBOOK={
  dry:{label:'Came out dry',fix:'Drop the oven 25°F and pull it 8–10 minutes sooner — check the thickest part rather than the clock.',alt:'Add fat instead of time: two extra tablespoons of oil or butter in the pan, and baste twice while it cooks.',adj:'Oven 25°F lower, pull 8–10 min early'},
  soggy:{label:'Came out soggy',fix:'Preheat the empty sheet pan, then spread everything in one layer with space between the pieces.',alt:'Pat the ingredients dry, salt them 15 minutes ahead, then blot before they go in.',adj:'Preheat the pan; single layer, nothing touching'},
  bland:{label:'Tasted flat',fix:'Salt in three stages instead of once, and finish with acid off the heat — a squeeze of lemon or a splash of vinegar.',alt:'Bloom the dry spices in hot fat for 30 seconds before any liquid goes in.',adj:'Salt in three stages; acid at the end'},
  salty:{label:'Too salty',fix:'Cut the added salt by a third next time and season at the end rather than the start.',alt:'To rescue a batch: add unsalted bulk — more stock, rice, or a halved potato simmered 15 minutes.',adj:'Two thirds of the salt, added at the end'},
  overcooked:{label:'Overcooked',fix:'Start checking at 70% of the stated time, pull it 5°F early, and let it rest 10 minutes.',alt:'Cut the pieces to an even thickness so they all finish at the same moment.',adj:'Check at 70% of the time; rest 10 min'},
  tough:{label:'Tough or chewy',fix:'Longer and lower — collagen needs time, not heat. Drop 50°F and add 45 minutes.',alt:'Slice across the grain and rest it before serving.',adj:'50°F lower for 45 min longer'},
  fell:{label:'Fell apart',fix:'Chill the mixture 30 minutes before shaping, and leave it alone for the first three minutes in the pan.',alt:'Add a binder: one egg or two tablespoons of breadcrumbs per pound.',adj:'Chill 30 min before shaping'},
  greasy:{label:'Too greasy',fix:'Render the fat first and pour off all but a tablespoon before the rest goes in.',alt:'Rest the finished dish five minutes and skim the surface.',adj:'Render first, pour off all but 1 tbsp'},
  sweet:{label:'Too sweet',fix:'Cut the sugar by a quarter — most recipes take it without any change in texture.',alt:'Balance rather than remove: salt, acid, or something bitter like citrus zest.',adj:'Sugar cut by a quarter'},
  pale:{label:"Didn't brown",fix:"Get the pan hotter and the surface drier, then don't crowd it and don't move it for three minutes.",alt:'Work in two batches — steam off a full pan is what stops browning.',adj:'Hotter pan, dry surface, two batches'}
};

let UID=100;
const uid=p=>p+Date.now().toString(36)+(++UID);
const money=n=>'$'+(Math.round(n*100)/100).toFixed(2);

function guessSection(name){
  const n=' '+(name||'').toLowerCase().trim()+' ';
  for(const [re,sec] of MODIFIERS){ if(re.test(n)) return sec; }
  let best=null,bestLen=0;
  for(const k of Object.keys(KEYS)){
    for(const w of KEYS[k].split(' ')){
      if(w.length>2 && n.includes(' '+w) && w.length>bestLen){ best=k; bestLen=w.length; }
    }
  }
  return best||'pantry';
}

// ---- Recipe import: fetch a page and read its schema.org Recipe data ----
// Most recipe sites embed this (JSON-LD) for Google, so one parser covers them.
async function fetchPageHtml(url){
  const tries=[
    // 1. Same-site helper (functions/api/fetch.js) when hosted on Cloudflare Pages.
    ()=>fetch('api/fetch?url='+encodeURIComponent(url)),
    // 2. Direct, works for the few sites that allow it.
    ()=>fetch(url),
    // 3. Public CORS relay, last resort.
    ()=>fetch('https://api.allorigins.win/raw?url='+encodeURIComponent(url))
  ];
  for(const t of tries){
    try{
      const res=await t();
      if(!res.ok) continue;
      const html=await res.text();
      if(html&&html.length>200&&/<html|<head|<script/i.test(html)) return html;
    }catch(e){}
  }
  throw new Error('fetch');
}
function decodeText(s){
  if(s==null) return '';
  const d=new DOMParser().parseFromString('<p>'+String(s)+'</p>','text/html');
  return (d.body.textContent||'').replace(/\s+/g,' ').trim();
}
function findRecipeNode(x){
  if(!x||typeof x!=='object') return null;
  if(Array.isArray(x)){for(const y of x){const r=findRecipeNode(y);if(r)return r;}return null;}
  const t=x['@type'];
  if(t==='Recipe'||(Array.isArray(t)&&t.includes('Recipe'))) return x;
  for(const k of ['@graph','mainEntity','itemListElement','item']){const r=findRecipeNode(x[k]);if(r)return r;}
  return null;
}
function isoDuration(v){
  const m=/P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?/i.exec(String(v||''));
  if(!m) return '';
  let h=(+m[1]||0)*24+(+m[2]||0), mi=+m[3]||0;
  h+=Math.floor(mi/60); mi%=60;
  return [h?h+' hr':'',mi?mi+' min':''].filter(Boolean).join(' ');
}
function flattenSteps(v){
  if(!v) return [];
  if(typeof v==='string') return v.split(/\n+|(?<=\.)\s{2,}/).map(decodeText).filter(Boolean);
  if(Array.isArray(v)) return v.flatMap(flattenSteps);
  if(v.itemListElement) return flattenSteps(v.itemListElement);
  return [decodeText(v.text||v.name||'')].filter(Boolean);
}
const QTY_RE=/^((?:[\d½¼¾⅓⅔⅛⅜⅝⅞⅕⅙]+(?:[.,\/]\d+)?(?:\s*(?:-|–|to)\s*[\d½¼¾⅓⅔⅛⅜⅝⅞]+(?:[.,\/]\d+)?)?\s*)+(?:\(\s*[^)]*\)\s*)?(?:(?:cups?|c\.|tablespoons?|tbsps?\.?|tbs\.?|teaspoons?|tsps?\.?|ounces?|oz\.?|fl\.? oz\.?|pounds?|lbs?\.?|grams?|g|kilograms?|kg|millilit(?:er|re)s?|ml|lit(?:er|re)s?|l|cloves?|cans?|jars?|pinch(?:es)?|dash(?:es)?|bunch(?:es)?|sticks?|slices?|sprigs?|heads?|packages?|pkgs?\.?|large|medium|small|whole)\b\.?\s*)?)(?:of\s+)?(.+)$/i;
function splitIngredient(line){
  const t=decodeText(line);
  const m=QTY_RE.exec(t);
  return m&&m[2]?{a:m[1].trim(),n:m[2].trim()}:{a:'',n:t};
}
function firstNumber(v){
  if(Array.isArray(v)) v=v[0];
  const m=/(\d+(?:\.\d+)?)/.exec(String(v||''));
  return m?Math.round(+m[1]):0;
}
// Guess the aisle from the ingredient itself, ignoring prep notes after a comma
// ("onion, diced" is produce, not canned); a can/jar amount means canned.
function importSection(g){
  const base=g.n.split(',')[0].replace(/\([^)]*\)/g,' ');
  if(/\b(cans?|jars?|tins?)\b/i.test(g.a+' '+base)) return 'canned';
  return guessSection(base);
}
function parseRecipeHtml(html,url){
  const doc=new DOMParser().parseFromString(html,'text/html');
  let node=null;
  doc.querySelectorAll('script[type="application/ld+json"]').forEach(el=>{
    if(node) return;
    try{node=findRecipeNode(JSON.parse(el.textContent));}catch(e){}
  });
  const meta=n=>{const e=doc.querySelector('meta[property="'+n+'"],meta[name="'+n+'"]');return e?e.getAttribute('content'):'';};
  const pageTitle=decodeText(meta('og:title')||(doc.querySelector('title')||{}).textContent||'');
  if(!node) return {title:pageTitle,url,time:'',servings:4,ing:[],steps:[],nut:{kcal:0,protein:0,carbs:0,fat:0,fiber:0},partial:true};
  const nu=node.nutrition||{};
  return {
    title:decodeText(node.name)||pageTitle, url,
    time:isoDuration(node.totalTime)||isoDuration(node.cookTime)||'',
    servings:firstNumber(node.recipeYield)||4,
    ing:[].concat(node.recipeIngredient||node.ingredients||[]).map(splitIngredient).filter(g=>g.n)
      .map(g=>({a:g.a,n:g.n,s:importSection(g),p:0})),
    steps:flattenSteps(node.recipeInstructions),
    nut:{kcal:firstNumber(nu.calories),protein:firstNumber(nu.proteinContent),carbs:firstNumber(nu.carbohydrateContent),
      fat:firstNumber(nu.fatContent),fiber:firstNumber(nu.fiberContent)},
    partial:false
  };
}

// ---- Versions, recommendations, duplicates, planning ----
const clone=x=>JSON.parse(JSON.stringify(x));
const todayStr=()=>new Date().toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'});
const DAYS=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const DAY_NAMES=['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY'];
// Rough dinner targets: about 35% of a day, protein a bit higher.
const DINNER={kcal:700,protein:25,carbs:95,fat:27,fiber:10};
function snap(r,label,extra){
  return {id:uid('v'),label,date:todayStr(),ing:clone(r.ing),steps:[...r.steps],time:r.time,servings:r.servings,adj:clone(r.adj||[]),...(extra||{})};
}
function withV1(r){
  if(r.versions&&r.versions.length) return r;
  return {...r,versions:[{id:'v1',label:(r.url||String(r.id).startsWith('lib-'))?'Original — as written':'Original',date:todayStr(),
    ing:clone(r.ing),steps:[...r.steps],time:r.time,servings:r.servings,adj:clone(r.adj||[])}],recState:r.recState||{}};
}
// Recommendation changes reference ingredient/step positions in the original;
// they only replace or append, so positions stay valid across versions.
function applyChange(r,ch){
  const ing=r.ing.map(g=>({...g}));
  (ch.ing||[]).forEach(([i,g])=>{ if(ing[i]) ing[i]={...ing[i],...g}; });
  (ch.addIng||[]).forEach(g=>ing.push({p:0,...g}));
  const steps=[...r.steps];
  (ch.steps||[]).forEach(([i,t])=>{ if(i<steps.length) steps[i]=t; });
  (ch.addStep||[]).forEach(t=>steps.push(t));
  return {...r,ing,steps,time:ch.time||r.time,servings:ch.servings||r.servings};
}
const normUrl=u=>{try{const x=new URL(/^https?:/i.test(u)?u:'https://'+u);return x.hostname.replace(/^www\./,'')+x.pathname.replace(/\/+$/,'').toLowerCase();}catch(e){return '';}};
const normTitle=t=>(t||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
function findDuplicate(recipes,url,title){
  const u=url?normUrl(url):'', t=normTitle(title);
  return recipes.find(r=>(u&&r.url&&normUrl(r.url)===u)||(t&&normTitle(r.title)===t))||null;
}
const STAPLE_RE=/^(water|salt|pepper|black pepper|kosher salt|sea salt|salt and pepper|salt & pepper|pepper, to taste|salt and pepper, to taste)$/i;
const itemKey=n=>n.toLowerCase().split(',')[0].replace(/\([^)]*\)/g,'').replace(/\s+/g,' ').trim();
// "2 cloves" + "3 cloves" -> "5 cloves"; different units stay side by side.
const FRAC={'½':0.5,'¼':0.25,'¾':0.75,'⅓':1/3,'⅔':2/3,'⅛':0.125};
function parseAmt(a){
  const m=/^(\d+(?:\.\d+)?)?\s*([½¼¾⅓⅔⅛])?(?:\s*\/\s*(\d+))?\s+(.+)$|^(\d+(?:\.\d+)?)?\s*([½¼¾⅓⅔⅛])?$/.exec(a.trim());
  if(!m) return null;
  const whole=m[1]||m[5], fr=m[2]||m[6];
  if(!whole&&!fr) return null;
  let v=(whole?parseFloat(whole):0)+(fr?FRAC[fr]:0);
  if(m[3]&&whole&&!fr) v=parseFloat(whole)/parseFloat(m[3]);
  return {v,u:(m[4]||'').toLowerCase().replace(/^(\w+?)(es|s)?\b/,'$1').trim()};
}
function fmtAmt(v){
  const w=Math.floor(v+1e-9), f=v-w, near=x=>Math.abs(f-x)<0.04;
  const fs=near(0)?'':near(0.25)?'¼':near(0.5)?'½':near(0.75)?'¾':near(1/3)?'⅓':near(2/3)?'⅔':String(Math.round(f*100)/100).slice(1);
  return (w?String(w):'')+fs||'0';
}
function combineAmounts(existing,add){
  const parts=existing.split(' + '), b=parseAmt(add);
  if(b){
    for(let i=0;i<parts.length;i++){
      const a=parseAmt(parts[i]);
      if(a&&a.u===b.u){
        const unit=parts[i].trim().replace(/^[\d.\/\s½¼¾⅓⅔⅛]+/,'');
        parts[i]=fmtAmt(a.v+b.v)+(unit?' '+unit:'');
        return parts.join(' + ');
      }
    }
  }
  return existing+' + '+add;
}
// Add recipe ingredients to the list, merging repeats into one line.
function addIngredientsToItems(items,entries){
  const out=items.map(i=>({...i}));
  entries.forEach(({g,title})=>{
    const k=itemKey(g.n);
    const hit=out.find(i=>!i.checked&&itemKey(i.name)===k);
    if(hit){
      if(g.a) hit.unit=hit.unit?combineAmounts(hit.unit,g.a):g.a;
      if(title&&!(hit.from||'').split(', ').includes(title)) hit.from=hit.from?hit.from+', '+title:title;
    } else out.push({id:uid('i'),name:g.n.charAt(0).toUpperCase()+g.n.slice(1),qty:1,unit:g.a,sec:g.s,checked:false,from:title,price:g.p||0});
  });
  return out;
}
const cookable=r=>!r.linkOnly&&r.ing&&r.ing.length>0;
const mealNut=r=>{const m=r.mealServings||1,n=r.nut||{};return {kcal:(n.kcal||0)*m,protein:(n.protein||0)*m,carbs:(n.carbs||0)*m,fat:(n.fat||0)*m,fiber:(n.fiber||0)*m};};
// ---- Kitchen: shelf life ----
// Typical fridge/pantry days after purchase; first match wins. Rough guides, not food-safety rules.
const SHELF=[
  [/\b(chicken|turkey|ground|shrimp|fish|salmon|sausage)\b/,2],[/\b(steak|beef|pork|lamb)\b/,4],
  [/\b(spinach|arugula|mixed greens|spring mix|basil|cilantro|mint|parsley|dill|chives|berries|raspberr|strawberr|mushroom)/,5],
  [/\b(avocado|lettuce|romaine|green onion|scallion|asparagus|zucchini|broccoli|kale|leek|bean sprouts|corn on)/,6],
  [/\b(tomato|cucumber|pepper|poblano|jalape|mango|eggplant|grape|peach|banana|squash|lemon|lime)/,8],
  [/\b(carrot|celery|cabbage|apple|orange|beet)/,21],[/\b(onion|shallot|potato|sweet potato|garlic|ginger)/,30],
  [/\b(milk|cream|half and half|buttermilk)\b/,7],[/\b(mozzarella|ricotta|goat cheese|burrata|feta|cottage|cream cheese)/,7],
  [/\b(tofu|tempeh|hummus|pesto|fresh pasta|gnocchi)\b/,7],[/\b(yogurt|sour cream)\b/,14],
  [/\b(cheddar|oaxaca|fontina|jack|swiss|provolone|pecorino|parmesan|parmigiano)/,28],[/\b(butter|eggs?)\b/,28],
  [/\b(bread|rolls?|ciabatta|baguette|buns?|bagels?)\b/,5],[/\b(tortillas?|pita|naan)\b/,14]
];
const SEC_DAYS={produce:7,dairy:10,meat:3,bakery:5,canned:365,pantry:180,frozen:90,snacks:60,beverages:30,other:14};
function estimateDays(name,sec){
  const n=' '+name.toLowerCase()+' ';
  if(sec==='frozen'||/\bfrozen\b/.test(n)) return 90;
  if(sec==='canned'||/\b(canned|can of|jar)\b/.test(n)){ if(!/\b(pesto|hummus)\b/.test(n)) return 365; }
  for(const [re,d] of SHELF) if(re.test(n)) return d;
  return SEC_DAYS[sec]||14;
}
const isoDay=d=>{const x=new Date(d);x.setMinutes(x.getMinutes()-x.getTimezoneOffset());return x.toISOString().slice(0,10);};
const addDays=(iso,n)=>{const d=new Date(iso+'T12:00:00');d.setDate(d.getDate()+n);return isoDay(d);};
const daysUntil=iso=>Math.round((new Date(iso+'T12:00:00')-new Date(isoDay(new Date())+'T12:00:00'))/86400000);
const shortDate=iso=>new Date(iso+'T12:00:00').toLocaleDateString(undefined,{month:'short',day:'numeric'});
function kitchenItem(name,sec,bought){
  const b=bought||isoDay(new Date());
  return {id:uid('k'),name,sec:sec||'other',bought:b,expires:addDays(b,estimateDays(name,sec)),est:true};
}
// ---- Paste recipe text ----
function parseRecipeText(text){
  const lines=text.split(/\r?\n/).map(l=>l.replace(/^[\s•*\-–▢☐□◦·]+/,'').replace(/^\d+[.)]\s+(?=[A-Za-z])/,'').trim()).filter(Boolean);
  const H_ING=/^(ingredients?|for the [\w\s]+:?|you('|’)ll need|what you need)\s*:?$/i;
  const H_STEP=/^(instructions?|directions?|method|steps?|preparation|how to make( it)?)\s*:?$/i;
  const H_STOP=/^(notes?|nutrition|tips?|equipment|storage|video)\b.*$/i;
  let title='',mode='',ing=[],steps=[];
  lines.forEach((l,i)=>{
    if(H_ING.test(l)){ mode='ing'; return; }
    if(H_STEP.test(l)){ mode='step'; return; }
    if(H_STOP.test(l)&&l.length<40){ mode='stop'; return; }
    if(!mode){ if(!title&&l.length<90) title=l; else if(QTY_RE.test(l)&&l.length<80) ing.push(l); else if(l.length>60) steps.push(l); return; }
    if(mode==='ing'){ if(/^for the /i.test(l)&&l.length<40) return; ing.push(l); }
    else if(mode==='step') steps.push(l);
  });
  const ings=ing.map(splitIngredient).filter(g=>g.n).map(g=>({a:g.a,n:g.n,s:importSection(g),p:0}));
  const tm=/(?:total|ready in)[^\d]{0,12}(\d+\s*(?:hours?|hrs?|minutes?|mins?)(?:\s*\d+\s*(?:minutes?|mins?))?)/i.exec(text);
  const yl=/(?:serves|servings|yield)[^\d]{0,6}(\d+)/i.exec(text);
  return {title:title.replace(/\s*(recipe)?\s*$/i,''),url:'',time:tm?tm[1].replace(/minutes?|mins?/i,'min').replace(/hours?|hrs?/i,'hr'):'',
    servings:yl?+yl[1]:4,ing:ings,steps,nut:{kcal:0,protein:0,carbs:0,fat:0,fiber:0},partial:!ings.length};
}

const pickRandom=a=>a.length?a[Math.floor(Math.random()*a.length)]:null;

class Component extends DCLogic {
  constructor(p){
    super(p);
    this.state={
      tab:'list', shopping:false, view:null, activeRecipe:null, editItem:null,
      draft:'', draftQty:1, draftSection:null, newSec:'',
      ingSel:{}, justAdded:'', recipeMenu:false, confirmDelete:false, confirmClear:false,
      cookRating:4, cookIssues:[], cookNote:'', cookApplied:[],
      imUrl:'', imState:'idle', imDraft:null, imErr:'', suggestion:null,
      viewVer:null, showDismissed:false, recQuery:'', plan:[null,null,null,null,null,null,null], pickDay:null, pickQuery:'', weekMsg:'', kitchen:[], kDraft:'', imText:'',
      mnTitle:'', mnServings:'', mnTime:'', mnSteps:'',
      mnRows:[{id:'r1',amount:'',name:''},{id:'r2',amount:'',name:''},{id:'r3',amount:'',name:''}],
      sections:[
        {id:'produce',name:'Produce'},{id:'bakery',name:'Bakery'},{id:'meat',name:'Meat & Seafood'},
        {id:'dairy',name:'Dairy & Eggs'},{id:'canned',name:'Canned & Jarred'},{id:'pantry',name:'Dry Goods & Pantry'},
        {id:'snacks',name:'Snacks'},{id:'beverages',name:'Beverages'},{id:'frozen',name:'Frozen'},{id:'house',name:'Household'}
      ],
      items:[],
      recipes:[],
      dayLog:[]
    };
  }

  componentDidMount(){
    let d={};
    try{const raw=localStorage.getItem('marketlist.v2');if(raw) d=JSON.parse(raw)||{};}catch(e){}
    // Merge in library recipes this device hasn't seen yet (and hasn't deleted).
    const LIB=typeof RECIPE_LIBRARY!=='undefined'?RECIPE_LIBRARY:[];
    const libById={}; LIB.forEach(r=>{libById[r.id]=r;});
    const removedLib=d.removedLib||[];
    // Library-owned details (recommendations, tags) refresh on every load;
    // a link-only recipe is replaced once the library has its ingredients.
    let recipes=(d.recipes||this.state.recipes).map(r=>{
      const L=libById[r.id]; if(!L) return r;
      if(r.linkOnly&&!L.linkOnly) return {...clone(L),logs:r.logs||[],adj:r.adj||[]};
      if((L.rev||1)>(r.rev||1)){
        // The library corrected this recipe: take its content, keep the old copy in history.
        const base=withV1(r), nr={...base,ing:clone(L.ing),steps:[...L.steps],time:L.time,servings:L.servings,nut:clone(L.nut),rev:L.rev};
        const keep={}; Object.keys(base.recState||{}).forEach(k=>{ if((L.recs||[]).some(c=>c.id===k)&&base.recState[k].st!=='applied') keep[k]=base.recState[k]; });
        r={...nr,recState:keep,versions:[...base.versions,snap(nr,'Recipe updated')]};
      }
      return {...r,recs:clone(L.recs||[]),tags:L.tags||r.tags,mealServings:L.mealServings,linkOnly:L.linkOnly,url:r.url||L.url};
    });
    const have=new Set(recipes.map(r=>r.id));
    const noH=list=>(list||[]).map(g=>{ if(!g||!('h' in g)) return g; const {h,...rest}=g; return rest; });
    recipes=recipes.map(r=>({...r,ing:noH(r.ing),versions:(r.versions||[]).map(v=>({...v,ing:noH(v.ing)}))}));
    recipes=[...recipes,...LIB.filter(r=>!have.has(r.id)&&!removedLib.includes(r.id)).map(r=>{
      let x=withV1(clone(r));
      (r.autoApply||[]).forEach(rid=>{const c=(r.recs||[]).find(z=>z.id===rid); if(!c||!c.change) return;
        const nr=applyChange(x,c.change), v=snap(nr,'Applied: '+c.change.label);
        x={...nr,versions:[...x.versions,v],recState:{...(x.recState||{}),[rid]:{st:'applied',ver:v.id}}};});
      return x;
    })].map(withV1);
    const kitchen=Array.isArray(d.kitchen)?d.kitchen:[];
    const plan=Array.isArray(d.plan)&&d.plan.length===7?d.plan.map(id=>recipes.some(r=>r.id===id)?id:null):this.state.plan;
    this.setState({items:d.items||this.state.items,sections:d.sections||this.state.sections,
      recipes,dayLog:d.dayLog||this.state.dayLog,removedLib,plan,kitchen});
    this._ts=e=>{const t=e.touches[0];this._sx=t.clientX;this._sy=t.clientY;};
    this._te=e=>{
      if(this._sx==null) return;
      const t=e.changedTouches[0], dx=t.clientX-this._sx, dy=Math.abs(t.clientY-this._sy);
      if(this._sx<60 && dx>70 && dy<60) this.back();
      this._sx=null;
    };
    window.addEventListener('touchstart',this._ts,{passive:true});
    window.addEventListener('touchend',this._te,{passive:true});
  }
  componentDidUpdate(){
    try{const s=this.state;localStorage.setItem('marketlist.v2',JSON.stringify({items:s.items,sections:s.sections,recipes:s.recipes,dayLog:s.dayLog,removedLib:s.removedLib||[],plan:s.plan,kitchen:s.kitchen}));}catch(e){}
  }
  componentWillUnmount(){
    window.removeEventListener('touchstart',this._ts);
    window.removeEventListener('touchend',this._te);
  }

  back=()=>{
    const v=this.state.view;
    if(v==='fixes') return this.set({view:'cook'});
    if(v==='cook') return this.set({view:'recipe'});
    if(v==='import'||v==='manual') return this.set({view:'new'});
    if(v) return this.closeSheet();
    if(this.state.shopping) return this.set({shopping:false});
  };

  set(o){ this.setState(o); }
  closeSheet=()=>this.set({view:null,editItem:null,recipeMenu:false,confirmDelete:false,confirmClear:false});
  recipe(id){ return this.state.recipes.find(r=>r.id===id); }
  secName(id){ const s=this.state.sections.find(x=>x.id===id); return s?s.name:'Pantry'; }
  icon(id,size,color){
    const paths=ICONS[id]||ICONS.other;
    return React.createElement('svg',{width:size,height:size,viewBox:'0 0 24 24',fill:'none',stroke:color,strokeWidth:1.6,strokeLinecap:'round',strokeLinejoin:'round'},
      paths.map((d,i)=>React.createElement('path',{key:i,d})));
  }
  secIcon(id,size){ return this.icon(ICONS[id]?id:'other',size||19,SECTION_COLOR[id]||'rgba(26,23,18,0.45)'); }

  addItem=()=>{
    const name=this.state.draft.trim(); if(!name) return;
    const sec=this.state.draftSection||guessSection(name);
    this.setState(s=>({items:[...s.items,{id:uid('i'),name:name.charAt(0).toUpperCase()+name.slice(1),qty:s.draftQty,unit:'',sec,checked:false,from:null,price:0}],draft:'',draftQty:1,draftSection:null}));
  };
  patch(id,fields){ this.setState(s=>({items:s.items.map(i=>i.id===id?{...i,...fields}:i)})); }
  removeItem(id){ this.setState(s=>({items:s.items.filter(i=>i.id!==id),view:null,editItem:null})); }
  moveSec(id,dir){
    this.setState(s=>{const a=[...s.sections];const i=a.findIndex(x=>x.id===id);const j=i+dir;
      if(j<0||j>=a.length) return null;const t=a[i];a[i]=a[j];a[j]=t;return {sections:a};});
  }

  detectSuggestion(){
    const s=this.state;
    const have=new Set(s.sections.map(x=>x.id));
    for(const c of CLUSTERS){
      if(have.has(c.id)) continue;
      const hits=s.items.filter(i=>c.test.test(i.name.toLowerCase()));
      if(hits.length>=3) return {cluster:c,items:hits.map(i=>({name:i.name})),ids:hits.map(i=>i.id)};
    }
    return null;
  }
  finishShop=()=>{
    const sug=this.detectSuggestion();
    this.setState(st=>{
      const bought=st.items.filter(i=>i.checked&&i.sec!=='house').map(i=>kitchenItem(i.name,i.sec));
      return {items:st.items.filter(i=>!i.checked),kitchen:[...bought,...st.kitchen],shopping:false,view:sug?'suggest':null,suggestion:sug};
    });
  };
  applySuggestion=()=>{
    const sg=this.state.suggestion; if(!sg) return;
    this.setState(st=>({
      sections:[...st.sections,{id:sg.cluster.id,name:sg.cluster.name}],
      items:st.items.map(i=>sg.ids.includes(i.id)?{...i,sec:sg.cluster.id}:i),
      view:null,suggestion:null
    }));
  };

  openRecipe(id){
    const r=this.recipe(id); const sel={};
    r.ing.forEach((g,i)=>{sel[id+'-'+i]=true;});
    this.set({view:'recipe',activeRecipe:id,ingSel:sel,justAdded:'',recipeMenu:false,confirmDelete:false,viewVer:null});
  }
  deleteRecipe=()=>{
    if(!this.state.confirmDelete) return this.set({confirmDelete:true});
    const id=this.state.activeRecipe;
    this.setState(st=>({recipes:st.recipes.filter(r=>r.id!==id),removedLib:id.startsWith('lib-')?[...(st.removedLib||[]),id]:(st.removedLib||[]),view:null,activeRecipe:null,recipeMenu:false,confirmDelete:false,
      dayLog:st.dayLog.filter(d=>d.rid!==id)}));
  };
  addRecipeToList=()=>{
    const r=this.recipe(this.state.activeRecipe);
    const disp=this.displayed(r);
    const picked=disp.ing.filter((g,i)=>this.state.ingSel[r.id+'-'+i]!==false);
    if(!picked.length) return;
    this.setState(s=>{
      const items=addIngredientsToItems(s.items,picked.map(g=>({g,title:r.title})));
      return {items,justAdded:picked.length+(picked.length===1?' ingredient added to the list.':' ingredients added to the list.')};
    });
  };

  // The recipe as currently shown: the latest, or an older version being viewed.
  displayed(r){
    const v=this.state.viewVer&&(r.versions||[]).find(x=>x.id===this.state.viewVer);
    return v?{...r,ing:v.ing,steps:v.steps,time:v.time,servings:v.servings,adj:v.adj||[]}:r;
  }
  updRecipe(id,fn){ this.setState(s=>({recipes:s.recipes.map(r=>r.id===id?fn(r):r)})); }
  allSelected(r){ const o={}; r.ing.forEach((g,i)=>{o[r.id+'-'+i]=true;}); return o; }
  applyRec(rec){
    const id=this.state.activeRecipe;
    this.updRecipe(id,r=>{
      const nr=applyChange(r,rec.change);
      const v=snap(nr,'Applied: '+rec.change.label);
      return {...nr,versions:[...(r.versions||[]),v],recState:{...(r.recState||{}),[rec.id]:{st:'applied',ver:v.id}}};
    });
    const r=applyChange(this.recipe(id),rec.change);
    this.set({viewVer:null,ingSel:this.allSelected(r)});
  }
  pinRec(rec){
    this.updRecipe(this.state.activeRecipe,r=>{
      const nr={...r,adj:[{id:uid('a'),text:rec.title+' — '+rec.text+' (pinned '+todayStr()+')'},...r.adj]};
      const v=snap(nr,'Pinned note: '+rec.title);
      return {...nr,versions:[...(r.versions||[]),v],recState:{...(r.recState||{}),[rec.id]:{st:'pinned',ver:v.id}}};
    });
    this.set({viewVer:null});
  }
  setRecState(rec,st){
    this.updRecipe(this.state.activeRecipe,r=>{const rs={...(r.recState||{})}; if(st) rs[rec.id]={st}; else delete rs[rec.id]; return {...r,recState:rs};});
  }
  restoreVersion(vid){
    const id=this.state.activeRecipe;
    this.updRecipe(id,r=>{
      const idx=r.versions.findIndex(x=>x.id===vid); if(idx<0) return r;
      const v=r.versions[idx];
      const nr={...r,ing:clone(v.ing),steps:[...v.steps],time:v.time,servings:v.servings,adj:clone(v.adj||[])};
      const later=new Set(r.versions.slice(idx+1).map(x=>x.id));
      const rs={...(r.recState||{})}; Object.keys(rs).forEach(k=>{ if(rs[k].ver&&later.has(rs[k].ver)) delete rs[k]; });
      return {...nr,recState:rs,versions:[...r.versions,snap(nr,'Restored v'+(idx+1)+' ('+v.label+')')]};
    });
    const r=this.recipe(id), v=r.versions.find(x=>x.id===vid);
    this.set({viewVer:null,ingSel:this.allSelected({...r,ing:v.ing})});
  }
  addKitchen=()=>{
    const n=this.state.kDraft.trim(); if(!n) return;
    const name=n.charAt(0).toUpperCase()+n.slice(1);
    this.setState(st=>({kitchen:[kitchenItem(name,guessSection(n)),...st.kitchen],kDraft:''}));
  };
  updKitchen(id,patch){ this.setState(st=>({kitchen:st.kitchen.map(k=>k.id===id?{...k,...patch}:k)})); }
  readPastedText=()=>{
    const t=this.state.imText.trim(); if(!t) return;
    const d=parseRecipeText(t); d.url=this.state.imUrl.trim()?(/^https?:/i.test(this.state.imUrl.trim())?this.state.imUrl.trim():'https://'+this.state.imUrl.trim()):'';
    this.set({imState:'done',imDraft:d,imErr:''});
  };
  toggleFav=()=>this.updRecipe(this.state.activeRecipe,r=>({...r,fav:!r.fav}));
  surpriseMe=()=>{ const r=pickRandom(this.state.recipes.filter(cookable)); if(r) this.openRecipe(r.id); };
  // ---- week plan ----
  setPlan(i,rid){ this.setState(s=>{const plan=[...s.plan]; plan[i]=rid; return {plan,weekMsg:''};}); }
  randomFor(plan,i){
    const pool=this.state.recipes.filter(cookable);
    const unused=pool.filter(r=>!plan.includes(r.id));
    const r=pickRandom(unused.length?unused:pool.filter(r=>r.id!==plan[i]));
    return r?r.id:plan[i];
  }
  reroll(i){ this.setPlan(i,this.randomFor(this.state.plan,i)); }
  fillWeek=()=>{
    const plan=[...this.state.plan];
    plan.forEach((rid,i)=>{ if(!rid) plan[i]=this.randomFor(plan,i); });
    this.set({plan,weekMsg:''});
  };
  shopWeek=()=>{
    const s=this.state, entries=[];
    s.plan.forEach(rid=>{ const r=this.recipe(rid); if(!r) return; r.ing.forEach(g=>{ if(!STAPLE_RE.test(g.n.trim())) entries.push({g,title:r.title}); }); });
    if(!entries.length) return this.set({weekMsg:'Plan a few dinners first.'});
    const before=s.items.length, items=addIngredientsToItems(s.items,entries);
    const added=items.length-before, merged=entries.length-added;
    this.set({items,weekMsg:added+' items added to the list'+(merged?', '+merged+' merged with ones already there':'')+'. Salt, pepper and water skipped.'});
  };

  submitCook=()=>this.set({view:'fixes',cookApplied:[...this.state.cookIssues]});
  saveCook=()=>{
    const rid=this.state.activeRecipe;
    this.setState(s=>({
      recipes:s.recipes.map(r=>{
        if(r.id!==rid) return r;
        const fixes=s.cookApplied.filter(k=>FIXBOOK[k]);
        const nr={...r,
          logs:[{id:uid('l'),date:todayStr(),rating:s.cookRating,note:s.cookNote||'No notes.',issues:[...s.cookIssues]},...r.logs],
          adj:[...fixes.map(k=>({id:uid('a'),text:FIXBOOK[k].adj+' — added '+todayStr()})),...r.adj]};
        return fixes.length?{...nr,versions:[...(r.versions||[]),snap(nr,'Cook log fixes: '+fixes.map(k=>FIXBOOK[k].label).join(', '))]}:nr;
      }),
      view:'recipe',cookRating:4,cookIssues:[],cookNote:'',cookApplied:[]
    }));
  };

  fetchUrl=async()=>{
    let url=this.state.imUrl.trim();
    if(!url) return;
    if(!/^https?:\/\//i.test(url)) url='https://'+url;
    this.set({imState:'loading',imDraft:null,imErr:''});
    try{
      const html=await fetchPageHtml(url);
      const d=parseRecipeHtml(html,url);
      if(this.state.imUrl.trim()&&this.state.imState==='loading') this.set({imState:'done',imDraft:d});
    }catch(e){
      this.set({imState:'error',imDraft:{title:'',url,time:'',servings:4,ing:[],steps:[],nut:{kcal:0,protein:0,carbs:0,fat:0,fiber:0},partial:true},
        imErr:"Couldn't open that page from here. You can still save it as a link and open the original when you cook."});
    }
  };
  saveImport=()=>{
    const d=this.state.imDraft; if(!d) return;
    const host=d.url?(d.url.replace(/^https?:\/\//,'').split('/')[0]||'web').replace(/^www\./,''):'pasted text';
    const r={id:uid('rc'),title:(d.title||'').trim()||host,source:host,url:d.url,time:d.time||'—',servings:d.servings||4,
      ing:d.ing,steps:d.steps,nut:d.nut,logs:[],adj:[]};
    this.setState(s=>({recipes:[withV1(r),...s.recipes],view:null,imUrl:'',imText:'',imState:'idle',imDraft:null,imErr:'',tab:'recipes'}));
  };
  saveManual=()=>{
    const t=this.state.mnTitle.trim(); if(!t) return;
    const rows=this.state.mnRows.filter(r=>r.name.trim());
    const r={id:uid('rc'),title:t,source:'Mine',time:this.state.mnTime||'—',servings:Number(this.state.mnServings)||4,
      ing:rows.map(x=>({a:x.amount,n:x.name,s:guessSection(x.name),p:0})),
      steps:this.state.mnSteps.split('\n').map(x=>x.trim()).filter(Boolean),
      nut:{kcal:0,protein:0,carbs:0,fat:0,fiber:0},logs:[],adj:[]};
    this.setState(s=>({recipes:[withV1(r),...s.recipes],view:null,mnTitle:'',mnServings:'',mnTime:'',mnSteps:'',
      mnRows:[{id:uid('r'),amount:'',name:''},{id:uid('r'),amount:'',name:''},{id:uid('r'),amount:'',name:''}],tab:'recipes'}));
  };

  dots(rating){ return [1,2,3,4,5].map(n=>({bg:n<=rating?MUST:'rgba(26,23,18,0.15)'})); }

  renderVals(){
    const s=this.state;
    const behave=this.props.checkoffStyle||'Drop to bottom of section';
    const showNutrition=this.props.showNutrition!==false;
    const qtyLabel=i=>(i.unit?(/^[\d½¼¾⅓⅔⅛⅜⅝⅞]/.test(i.unit)?i.unit:i.qty+' '+i.unit):String(i.qty));
    const lineCost=i=>(i.price||0)*(i.unit&&/^[\d½¼¾⅓⅔⅛⅜⅝⅞]/.test(i.unit)?1:i.qty);

    const buildGroups=shop=>s.sections.map(sec=>{
      let list=s.items.filter(i=>i.sec===sec.id);
      if(!list.length) return null;
      if(shop&&behave==='Hide checked items') list=list.filter(i=>!i.checked);
      if(shop&&behave==='Drop to bottom of section') list=[...list.filter(i=>!i.checked),...list.filter(i=>i.checked)];
      if(!list.length) return null;
      const done=list.filter(i=>i.checked).length;
      return {id:sec.id,name:sec.name,count:String(list.length),icon:this.secIcon(sec.id,19),
        tally:done+'/'+list.length,dim:done===list.length?0.45:1,
        items:list.map(i=>({
          id:i.id,name:i.name,qtyLabel:qtyLabel(i),from:i.from,checked:i.checked,
          hasPrice:!!i.price,priceLabel:i.price?money(lineCost(i)):'',
          strike:i.checked?'line-through':'none',fade:i.checked?0.45:1,
          boxBg:i.checked?GREEN:'transparent',boxBorder:i.checked?GREEN:INK,
          toggle:()=>this.patch(i.id,{checked:!i.checked}),
          edit:()=>this.set({view:'item',editItem:i.id})
        }))};
    }).filter(Boolean);

    const groups=buildGroups(false), shopGroups=buildGroups(true);
    const total=s.items.length, done=s.items.filter(i=>i.checked).length;
    const estTotal=money(s.items.reduce((a,i)=>a+lineCost(i),0));
    const cartTotal=money(s.items.filter(i=>i.checked).reduce((a,i)=>a+lineCost(i),0));

    const tabs=[['list','LIST'],['recipes','RECIPES'],['week','WEEK'],['kitchen','KITCHEN'],['today','TODAY']].map(([id,label])=>{
      const on=s.tab===id;
      return {label,sub:id==='list'?total+' items':id==='recipes'?s.recipes.length+' saved':id==='week'?s.plan.filter(Boolean).length+'/7':id==='kitchen'?(s.kitchen.filter(k=>daysUntil(k.expires)<=3).length?s.kitchen.filter(k=>daysUntil(k.expires)<=3).length+' soon':s.kitchen.length+' items'):'kcal',
        line:on?RED:'transparent',color:on?RED:'rgba(26,23,18,0.45)',subColor:on?'rgba(185,58,38,0.7)':'rgba(26,23,18,0.3)',
        go:()=>this.set({tab:id,view:null,shopping:false})};
    });

    const ei=s.items.find(i=>i.id===s.editItem)||{id:null,name:'',qty:1,unit:'',sec:'pantry',price:0};
    const eid=ei.id;
    const ed={
      name:ei.name, qty:String(ei.qty),
      unitNote:ei.unit?(/^[\d½¼¾⅓⅔⅛⅜⅝⅞]/.test(ei.unit)?'Recipe amount: '+ei.unit:'Counted in '+ei.unit+'s'):'Plain count',
      price:ei.price?String(ei.price):'',
      lineTotal:ei.price?money(lineCost(ei))+' total':'No price set',
      inc:()=>eid&&this.patch(eid,{qty:ei.qty+1}),
      dec:()=>eid&&this.patch(eid,{qty:Math.max(1,ei.qty-1)}),
      onPrice:e=>{const v=parseFloat(e.target.value);eid&&this.patch(eid,{price:isNaN(v)?0:v});},
      remove:()=>eid&&this.removeItem(eid),
      sections:s.sections.map(sec=>{const on=sec.id===ei.sec;
        return {name:sec.name,on,icon:this.secIcon(sec.id,19),bg:on?INK:'#FFFDF6',border:on?INK:'rgba(26,23,18,0.16)',color:on?CREAM:INK,
          pick:()=>eid&&this.patch(eid,{sec:sec.id})};})
    };

    const curDraftSec=s.draftSection||guessSection(s.draft);
    const draftSections=s.sections.map(sec=>{const on=sec.id===curDraftSec;
      return {name:sec.name,on,icon:this.secIcon(sec.id,19),bg:on?INK:'#FFFDF6',border:on?INK:'rgba(26,23,18,0.16)',color:on?CREAM:INK,
        pick:()=>this.set({draftSection:sec.id,view:null})};});

    const secRows=s.sections.map(sec=>({
      name:sec.name,icon:this.secIcon(sec.id,19),count:s.items.filter(i=>i.sec===sec.id).length+' items',
      rename:e=>{const v=e.target.value;this.setState(st=>({sections:st.sections.map(x=>x.id===sec.id?{...x,name:v}:x)}));},
      up:()=>this.moveSec(sec.id,-1),down:()=>this.moveSec(sec.id,1),
      del:()=>this.setState(st=>({sections:st.sections.filter(x=>x.id!==sec.id),items:st.items.map(i=>i.sec===sec.id?{...i,sec:'pantry'}:i)}))
    }));

    const recipeCost=r=>r.ing.reduce((a,g)=>a+(g.p||0),0);
    const q=s.recQuery.trim().toLowerCase();
    const matches=r=>q==='★ favorites'?!!r.fav:!q||[r.title,r.source,(r.tags||[]).join(' '),r.ing.map(g=>g.n).join(' ')].join(' ').toLowerCase().includes(q);
    const tagCount={}; s.recipes.forEach(r=>(r.tags||[]).forEach(t=>{tagCount[t]=(tagCount[t]||0)+1;}));
    const favN=s.recipes.filter(r=>r.fav).length;
    const tagChips=(favN?['★ favorites']:[]).concat(Object.keys(tagCount).sort((a,b)=>tagCount[b]-tagCount[a]||a.localeCompare(b)).slice(0,12)).map(t=>{
      const on=q===t; return {label:t,bg:on?INK:'transparent',color:on?CREAM:INK,go:()=>this.set({recQuery:on?'':t})};});
    const recipeCards=s.recipes.filter(matches).sort((a,b)=>(b.fav?1:0)-(a.fav?1:0)).map(r=>{
      const last=r.logs[0], c=recipeCost(r);
      return {id:r.id,title:(r.fav?'★ ':'')+r.title,kcal:r.nut.kcal?String(r.nut.kcal):'—',
        cost:c?money(c):'—',meta:r.time+' · '+r.servings+' servings · '+r.source,
        dots:this.dots(last?last.rating:0),lastNote:r.linkOnly?'link only — ingredients to add':last?'cooked '+last.date:'not cooked yet',
        tileBg:last&&last.rating>=4?'#F7EBCF':'#FFFDF6',open:()=>this.openRecipe(r.id)};
    });

    const base=this.recipe(s.activeRecipe)||s.recipes[0]||{id:'x',title:'—',ing:[],steps:[],logs:[],adj:[],nut:DV,time:'',servings:1,source:'',versions:[]};
    const ar=this.displayed(base);
    const vers=base.versions||[], orig=vers[0];
    const viewingOld=!!s.viewVer&&vers.length>0&&s.viewVer!==vers[vers.length-1].id;
    const viewIdx=viewingOld?vers.findIndex(v=>v.id===s.viewVer):vers.length-1;
    const ingText=g=>(g.a?g.a+' ':'')+g.n;
    const tagFor=(cur,o,i,len)=>viewingOld||!orig?'':(i>=len?'ADDED':cur!==o?'REVISED':'');
    const recState=base.recState||{};
    const verNum=vid=>{const i=vers.findIndex(v=>v.id===vid);return i<0?'':'v'+(i+1);};
    const selCount=ar.ing.filter((g,i)=>s.ingSel[ar.id+'-'+i]!==false).length;
    const arCost=recipeCost(ar);
    const inDay=s.dayLog.some(d=>d.rid===ar.id);
    const rd={
      title:ar.title,meta:ar.time+' · '+ar.servings+' servings · '+ar.source,
      hasUrl:!!base.url,openUrl:()=>{if(base.url) window.open(base.url,'_blank','noopener');},
      menuOpen:s.recipeMenu,menuBg:s.recipeMenu?'rgba(26,23,18,0.1)':'transparent',
      toggleMenu:()=>this.set({recipeMenu:!s.recipeMenu,confirmDelete:false}),
      delLabel:s.confirmDelete?'TAP AGAIN TO DELETE':'DELETE THIS RECIPE',
      delBg:s.confirmDelete?RED:'transparent',delColor:s.confirmDelete?CREAM:RED,del:this.deleteRecipe,
      ingredients:ar.ing.map((g,i)=>{
        const key=ar.id+'-'+i,on=s.ingSel[key]!==false;
        const tag=orig?tagFor(ingText(g),orig.ing[i]?ingText(orig.ing[i]):'',i,orig.ing.length):'';
        return {tag,hasTag:!!tag,text:(g.a?g.a+' ':'')+g.n,icon:this.secIcon(g.s,17),priceLabel:g.p?money(g.p):'',on,
          boxBg:on?RED:'transparent',boxBorder:on?RED:'rgba(26,23,18,0.35)',
          toggle:()=>this.setState(st=>({ingSel:{...st.ingSel,[key]:st.ingSel[key]===false}}))};
      }),
      toggleAllLabel:selCount===ar.ing.length?'NONE':'ALL',
      toggleAll:()=>{const all=selCount===ar.ing.length;const o={};ar.ing.forEach((g,i)=>{o[ar.id+'-'+i]=!all;});this.set({ingSel:o});},
      addLabel:selCount?'ADD '+selCount+' TO LIST':'PICK INGREDIENTS',
      addToList:this.addRecipeToList,justAdded:!!s.justAdded,addedMsg:s.justAdded,
      steps:ar.steps.map((t,i)=>{const tag=orig?tagFor(t,orig.steps[i]||'',i,orig.steps.length):'';return {n:String(i+1),text:t,tag,hasTag:!!tag};}),
      linkOnly:!!base.linkOnly,fav:!!base.fav,favLabel:base.fav?'★':'☆',favColor:base.fav?MUST:'rgba(26,23,18,0.4)',toggleFav:this.toggleFav,
      viewingOld,verBanner:viewingOld?'Viewing v'+(viewIdx+1)+' · '+vers[viewIdx].label+' · '+vers[viewIdx].date:'',
      backToCurrent:()=>this.set({viewVer:null}),restoreThis:()=>this.restoreVersion(s.viewVer),
      versions:vers.map((v,i)=>{const cur=i===vers.length-1, viewing=viewingOld?v.id===s.viewVer:cur;
        return {n:'v'+(i+1),label:v.label,date:v.date,current:cur,viewing:viewing&&!cur,
          bg:viewing?'#F7EBCF':'#FFFDF6',border:viewing?'#D3A32E':'rgba(26,23,18,0.16)',
          open:()=>this.set({viewVer:cur?null:v.id})};}).reverse(),
      hasRecs:(base.recs||[]).length>0,
      hasDismissed:(base.recs||[]).some(c=>(recState[c.id]||{}).st==='dismissed'),
      dismissedLabel:s.showDismissed?'HIDE DISMISSED':'SHOW DISMISSED',
      toggleDismissed:()=>this.set({showDismissed:!s.showDismissed}),
      recs:(base.recs||[]).filter(c=>s.showDismissed||(recState[c.id]||{}).st!=='dismissed').map(c=>{
        const st=recState[c.id], reviews=c.kind==='reviews', mine=c.kind==='mine';
        const status=!st?'':st.st==='applied'?'✓ Applied as '+verNum(st.ver)+' — undo from history':st.st==='pinned'?'✓ Pinned to your adjustments':'Dismissed · tap to restore';
        return {kindLabel:mine?'Your version':reviews?'What reviewers say':'From reading the recipe',accent:mine?RED:reviews?'#3F7A8C':'#8A6A14',
          title:c.title,text:c.text,fade:st&&st.st==='dismissed'?0.55:1,
          canApply:!st&&!!c.change&&!viewingOld,applyLabel:c.change?'Apply: '+c.change.label:'',apply:()=>this.applyRec(c),
          canPin:!st&&!c.change&&!viewingOld,pin:()=>this.pinRec(c),
          canDismiss:!st,dismiss:()=>this.setRecState(c,'dismissed'),
          hasStatus:!!st,status,statusClick:()=>{ if(st&&st.st==='dismissed') this.setRecState(c,null); }};
      }),
      hasAdjustments:ar.adj.length>0,adjustments:ar.adj,
      costPerServing:arCost?money(arCost/ar.servings)+' / serving':'no prices yet',
      nutrition:[['Calories','kcal',''],['Protein','protein','g'],['Carbs','carbs','g'],['Fat','fat','g'],['Fiber','fiber','g']]
        .map(([label,k,u])=>({label,value:ar.nut[k]+u+' · '+Math.round(ar.nut[k]/DV[k]*100)+'% DV',
          pct:Math.min(100,Math.round(ar.nut[k]/DV[k]*100))+'%',bg:k==='kcal'?INK:k==='protein'?GREEN:k==='fat'?RED:MUST})),
      logs:ar.logs.map(l=>({date:l.date,note:l.note,dots:this.dots(l.rating),hasIssues:l.issues.length>0,
        issues:l.issues.map(k=>({label:FIXBOOK[k]?FIXBOOK[k].label:k}))})),
      noLogs:ar.logs.length===0,openCook:()=>this.set({view:'cook'}),
      logToday:()=>this.setState(st=>({dayLog:inDay?st.dayLog.filter(d=>d.rid!==ar.id):[...st.dayLog,{id:uid('d'),rid:ar.id,servings:1}]})),
      logTodayLabel:inDay?'✓ LOGGED':'+ LOG SERVING'
    };

    const ck={
      title:ar.title,note:s.cookNote,onNote:e=>this.set({cookNote:e.target.value}),
      rating:[1,2,3,4,5].map(n=>({n:String(n),bg:s.cookRating===n?INK:'transparent',color:s.cookRating===n?CREAM:INK,pick:()=>this.set({cookRating:n})})),
      issues:Object.keys(FIXBOOK).map(k=>{const on=s.cookIssues.includes(k);
        return {label:FIXBOOK[k].label,bg:on?RED:'transparent',color:on?CREAM:INK,
          toggle:()=>this.setState(st=>({cookIssues:on?st.cookIssues.filter(x=>x!==k):[...st.cookIssues,k]}))};}),
      submitLabel:s.cookIssues.length?'SEE '+s.cookIssues.length+' SUGGESTED '+(s.cookIssues.length===1?'FIX':'FIXES'):'SAVE TO COOK LOG',
      submit:this.submitCook
    };

    const fx={
      kicker:ar.title+' · '+(s.cookIssues.length?s.cookIssues.length+(s.cookIssues.length===1?' problem flagged':' problems flagged'):'no problems flagged'),
      none:s.cookIssues.length===0,
      cards:s.cookIssues.filter(k=>FIXBOOK[k]).map(k=>{const on=s.cookApplied.includes(k);
        return {label:FIXBOOK[k].label,fix:FIXBOOK[k].fix,alt:FIXBOOK[k].alt,bg:on?INK:'transparent',color:on?CREAM:INK,
          actionLabel:on?'✓ Pinned to the recipe':'Pin this to the recipe',
          toggle:()=>this.setState(st=>({cookApplied:on?st.cookApplied.filter(x=>x!==k):[...st.cookApplied,k]}))};}),
      saveLabel:s.cookApplied.length?'SAVE COOK + '+s.cookApplied.length+(s.cookApplied.length===1?' CHANGE':' CHANGES'):'SAVE COOK LOG',
      save:this.saveCook
    };

    const imd=s.imDraft;
    const im={
      url:s.imUrl,onUrl:e=>this.set({imUrl:e.target.value,imState:'idle',imDraft:null,imErr:''}),
      fetch:this.fetchUrl,fetchLabel:s.imState==='loading'?'READING…':'FETCH RECIPE',
      loading:s.imState==='loading',done:(s.imState==='done'||s.imState==='error')&&!!imd,
      error:s.imState==='error',errText:s.imErr,
      partial:s.imState==='done'&&!!imd&&imd.partial,
      text:s.imText,onText:e=>this.set({imText:e.target.value}),readText:this.readPastedText,
      found:s.imState==='done'&&!!imd&&!imd.partial,
      title:imd?imd.title:'',onTitle:e=>this.setState(st=>({imDraft:{...st.imDraft,title:e.target.value}})),
      meta:imd?[imd.time,imd.servings+' servings',imd.ing.length?imd.ing.length+' ingredients':''].filter(Boolean).join(' · '):'',
      hasIng:!!imd&&imd.ing.length>0,
      ingredients:(imd?imd.ing:[]).map(g=>({text:(g.a?g.a+' ':'')+g.n,sectionName:this.secName(g.s)})),
      dup:null,
      save:this.saveImport,saveLabel:imd&&imd.ing.length?'SAVE TO RECIPES':'SAVE AS LINK'
    };

    const dupR=findDuplicate(s.recipes,s.imUrl.trim(),imd?imd.title:'');
    im.hasDup=!!dupR; im.dupText=dupR?'Already in your recipes: “'+dupR.title+'”. Saving again makes a second copy.':'';
    im.openDup=()=>{ if(dupR) this.openRecipe(dupR.id); };
    if(dupR) im.saveLabel='SAVE ANYWAY';

    // ---- week ----
    const planned=s.plan.map(id=>this.recipe(id)).filter(Boolean);
    const withNut=planned.filter(r=>r.nut&&r.nut.kcal>0);
    const avg=k=>{const list=k==='fiber'?withNut.filter(r=>r.nut.fiber>0):withNut; return list.length?list.reduce((a,r)=>a+mealNut(r)[k],0)/list.length:0;};
    const fiberN=withNut.filter(r=>r.nut.fiber>0).length;
    const NUTS=[['Calories','kcal','',GREEN],['Protein','protein','g',GREEN],['Carbs','carbs','g',MUST],['Fat','fat','g',RED],['Fiber','fiber','g','#8A6A14']];
    const wkBars=withNut.length?NUTS.map(([label,k,u,bg])=>{const a=Math.round(avg(k)),pct=a/DINNER[k];
      const flag=pct<0.7?' · low':pct>1.35?' · high':'';
      return {label,value:(k==='fiber'&&!fiberN?'not listed':a+u+' of ~'+DINNER[k]+u+flag),pct:Math.min(100,Math.round(pct*100))+'%',bg:pct<0.7?RED:pct>1.35?MUST:bg};}):[];
    const swaps=[];
    if(withNut.length){
      const unplanned=s.recipes.filter(r=>cookable(r)&&r.nut&&r.nut.kcal>0&&!s.plan.includes(r.id));
      [['protein','Protein','g'],['fiber','Fiber','g']].forEach(([k,label,u])=>{
        if(k==='fiber'&&!fiberN) return;
        const a=avg(k); if(a>=DINNER[k]*0.75) return;
        const lowDay=s.plan.map((id,i)=>({i,r:this.recipe(id)})).filter(x=>x.r&&x.r.nut&&x.r.nut.kcal>0&&(k!=='fiber'||x.r.nut.fiber>0))
          .sort((x,y)=>mealNut(x.r)[k]-mealNut(y.r)[k])[0];
        const best=unplanned.filter(r=>k!=='fiber'||r.nut.fiber>0).sort((x,y)=>mealNut(y)[k]-mealNut(x)[k])[0];
        if(!lowDay||!best) return;
        const gain=Math.round(mealNut(best)[k]-mealNut(lowDay.r)[k]); if(gain<=2) return;
        swaps.push({text:label+' is low this week (about '+Math.round(a)+u+' a dinner vs ~'+DINNER[k]+u+'). Swap '+DAYS[lowDay.i]+'’s '+lowDay.r.title+' for '+best.title+' (+'+gain+u+').',
          go:()=>this.setPlan(lowDay.i,best.id)});
      });
      if(avg('kcal')>DINNER.kcal*1.35) swaps.push({text:'Dinners average about '+Math.round(avg('kcal'))+' kcal — on the heavy side. The meal kits are the richest; a soup night balances the week.',go:null});
    }
    const wk={
      days:s.plan.map((id,i)=>{const r=this.recipe(id);
        return {day:DAYS[i],has:!!r,title:r?r.title:'Tap to choose',titleColor:r?INK:'rgba(26,23,18,0.4)',
          sub:r?[r.time,(r.nut&&r.nut.kcal?Math.round(mealNut(r).kcal)+' kcal':'')].filter(Boolean).join(' · '):'or shuffle →',
          main:()=>this.set({view:'pickmeal',pickDay:i,pickQuery:''}),reroll:()=>this.reroll(i),clear:()=>this.setPlan(i,null)};}),
      fill:this.fillWeek,shop:this.shopWeek,clearAll:()=>this.set({plan:[null,null,null,null,null,null,null],weekMsg:''}),
      hasMsg:!!s.weekMsg,msg:s.weekMsg,
      hasBars:wkBars.length>0,bars:wkBars,noBars:!wkBars.length,
      nutNote:withNut.length?'Average per planned dinner, from '+withNut.length+' of '+planned.length+' with nutrition info'+(fiberN<withNut.length?' (fiber listed for '+fiberN+')':'')+'. Tacos and spring rolls count as 3 per meal.':'',
      hasSwaps:swaps.length>0,swaps:swaps.map(x=>({text:x.text,canSwap:!!x.go,go:x.go||(()=>{})}))
    };
    const kSorted=[...s.kitchen].sort((a,b)=>a.expires.localeCompare(b.expires));
    const soon=kSorted.filter(k=>daysUntil(k.expires)<=3);
    const useIt=soon.length?s.recipes.filter(cookable).map(r=>{
      const hits=soon.filter(k=>{const kk=itemKey(k.name);return r.ing.some(g=>{const gk=itemKey(g.n);return gk.includes(kk)||kk.includes(gk);});});
      return {r,hits};}).filter(x=>x.hits.length).sort((a,b)=>b.hits.length-a.hits.length).slice(0,3):[];
    const kt={
      draft:s.kDraft,onDraft:e=>this.set({kDraft:e.target.value}),onKey:e=>{ if(e.key==='Enter') this.addKitchen(); },add:this.addKitchen,
      empty:!s.kitchen.length,
      summary:s.kitchen.length?(soon.length?soon.length+' to use in the next 3 days':'Nothing needs using up this week'):'',
      items:kSorted.map(k=>{const d=daysUntil(k.expires);
        return {name:k.name,expires:k.expires,
          sub:'Bought '+shortDate(k.bought)+' · use by '+shortDate(k.expires)+(k.est?' (estimate)':''),
          left:d<0?(-d)+'d ago':d===0?'today':d===1?'1 day':d>60?Math.round(d/30)+' mo':d+' days',
          badgeBg:d<=1?RED:d<=3?MUST:d<=7?'#E2EDE5':'rgba(26,23,18,0.07)',badgeColor:d<=1?CREAM:d<=3?INK:d<=7?'#23543D':'rgba(26,23,18,0.55)',
          onDate:e=>{ if(e.target.value) this.updKitchen(k.id,{expires:e.target.value,est:false}); },
          plus:()=>this.updKitchen(k.id,{expires:addDays(k.expires,2),est:false}),
          used:()=>this.setState(st=>({kitchen:st.kitchen.filter(x=>x.id!==k.id)}))};}),
      hasUse:useIt.length>0,
      use:useIt.map(x=>({title:x.r.title,uses:'Uses '+x.hits.map(k=>k.name.toLowerCase()).join(', '),open:()=>this.openRecipe(x.r.id)}))
    };
    const pq=s.pickQuery.trim().toLowerCase();
    const pk={
      title:s.pickDay!=null?DAY_NAMES[s.pickDay]:'',query:s.pickQuery,onQuery:e=>this.set({pickQuery:e.target.value}),
      surprise:()=>{ if(s.pickDay==null) return; this.setPlan(s.pickDay,this.randomFor(s.plan,s.pickDay)); this.closeSheet(); },
      items:s.recipes.filter(cookable).sort((a,b)=>(b.fav?1:0)-(a.fav?1:0)).filter(r=>!pq||[r.title,(r.tags||[]).join(' ')].join(' ').toLowerCase().includes(pq)).map(r=>{
        const on=s.pickDay!=null&&s.plan[s.pickDay]===r.id;
        return {title:(r.fav?'★ ':'')+r.title,meta:[r.time,r.nut&&r.nut.kcal?Math.round(mealNut(r).kcal)+' kcal':'',r.nut&&r.nut.protein?Math.round(mealNut(r).protein)+'g protein':''].filter(Boolean).join(' · '),
          border:on?RED:'rgba(26,23,18,0.16)',pick:()=>{ this.setPlan(s.pickDay,r.id); this.closeSheet(); }};})
    };

    const mn={
      title:s.mnTitle,onTitle:e=>this.set({mnTitle:e.target.value}),
      servings:s.mnServings,onServings:e=>this.set({mnServings:e.target.value}),
      time:s.mnTime,onTime:e=>this.set({mnTime:e.target.value}),
      steps:s.mnSteps,onSteps:e=>this.set({mnSteps:e.target.value}),
      rows:s.mnRows.map(r=>({amount:r.amount,name:r.name,sectionName:r.name.trim()?this.secName(guessSection(r.name)):'—',
        onAmount:e=>{const v=e.target.value;this.setState(st=>({mnRows:st.mnRows.map(x=>x.id===r.id?{...x,amount:v}:x)}));},
        onName:e=>{const v=e.target.value;this.setState(st=>({mnRows:st.mnRows.map(x=>x.id===r.id?{...x,name:v}:x)}));}})),
      addRow:()=>this.setState(st=>({mnRows:[...st.mnRows,{id:uid('r'),amount:'',name:''}]})),
      save:this.saveManual,saveLabel:s.mnTitle.trim()?'SAVE RECIPE':'NAME IT FIRST'
    };

    const dayTot=s.dayLog.reduce((a,d)=>{const r=this.recipe(d.rid);if(!r)return a;
      ['kcal','protein','carbs','fat','fiber'].forEach(k=>{a[k]+=r.nut[k]*d.servings;});return a;},{kcal:0,protein:0,carbs:0,fat:0,fiber:0});

    const sug=s.suggestion;
    const sg=sug?{
      title:'Add a “'+sug.cluster.name+'” aisle?',
      body:sug.items.length+' items on your list look like '+sug.cluster.name.toLowerCase()+' but are filed elsewhere. Want a section for them?',
      hasItems:true,items:sug.items,canApply:true,applyLabel:'ADD IT',
      apply:this.applySuggestion,dismiss:()=>this.set({view:null,suggestion:null})
    }:{title:'',body:'',hasItems:false,items:[],canApply:false,applyLabel:'',apply:()=>{},dismiss:()=>this.set({view:null})};

    return {
      tabList:s.tab==='list',tabRecipes:s.tab==='recipes',tabToday:s.tab==='today',
      shopping:s.shopping,notShopping:!s.shopping,showNutrition,
      headKicker:s.tab==='list'?(total+' items · '+s.sections.length+' aisles'):s.tab==='recipes'?'Saved and importable':s.tab==='week'?(s.plan.filter(Boolean).length+' of 7 dinners planned'):s.tab==='kitchen'?'What you have, and what to use first':new Date().toLocaleDateString(undefined,{weekday:'long',day:'numeric',month:'long'}),
      headTitle:s.tab==='list'?'GROCERIES':s.tab==='recipes'?'RECIPES':s.tab==='week'?'THIS WEEK':s.tab==='kitchen'?'KITCHEN':'TODAY',
      tabs,groups,listEmpty:groups.length===0,shopGroups,
      draft:s.draft,onDraft:e=>this.set({draft:e.target.value}),
      onDraftKey:e=>{if(e.key==='Enter')this.addItem();},
      draftQty:String(s.draftQty),
      incQty:()=>this.setState(st=>({draftQty:st.draftQty+1})),
      decQty:()=>this.setState(st=>({draftQty:Math.max(1,st.draftQty-1)})),
      draftSectionName:this.secName(curDraftSec),draftIcon:this.secIcon(curDraftSec,15),
      openDraftPicker:()=>this.set({view:'picker'}),draftSections,
      addItem:this.addItem,
      startShop:()=>this.set({shopping:true}),exitShop:()=>this.set({shopping:false}),
      shopHead:done+' of '+total+' picked',shopPct:(total?Math.round(done/total*100):0)+'%',
      progressLabel:done?done+' of '+total+' picked':'nothing picked yet',
      estTotal,cartTotal,
      finishLabel:done?'FINISH TRIP · '+done+(done===1?' ITEM':' ITEMS')+' TO KITCHEN':'NOTHING PICKED YET',
      finishShop:this.finishShop,
      openListMenu:()=>this.set({view:'listmenu'}),
      openSections:()=>this.set({view:'sections'}),
      clearChecked:()=>this.setState(st=>({items:st.items.filter(i=>!i.checked),view:null})),
      clearCheckedNote:done?'Removes the '+done+' checked '+(done===1?'item':'items')+'.':'Nothing is checked right now.',
      clearAll:()=>{ if(!s.confirmClear) return this.set({confirmClear:true});
        this.setState(st=>({items:[],view:null,confirmClear:false})); },
      clearAllLabel:s.confirmClear?'TAP AGAIN TO CLEAR ALL':'CLEAR THE WHOLE LIST',
      clearAllNote:s.confirmClear?'This cannot be undone.':'Removes all '+total+' items. Recipes are untouched.',
      clearAllBg:s.confirmClear?RED:'#FFFDF6',clearAllColor:s.confirmClear?CREAM:RED,
      clearAllSubColor:s.confirmClear?'rgba(247,241,227,0.75)':'rgba(26,23,18,0.55)',
      secRows,newSec:s.newSec,onNewSec:e=>this.set({newSec:e.target.value}),
      addSec:()=>{const n=s.newSec.trim();if(!n)return;this.setState(st=>({sections:[...st.sections,{id:uid('s'),name:n}],newSec:''}));},
      recipeCards,rd,ck,fx,im,mn,sg,ed,wk,pk,kt,tagChips,tabKitchen:s.tab==='kitchen',
      recQuery:s.recQuery,onRecQuery:e=>this.set({recQuery:e.target.value}),surpriseMe:this.surpriseMe,recEmpty:recipeCards.length===0,
      tabWeek:s.tab==='week',ovPickMeal:s.view==='pickmeal',
      openNewRecipe:()=>this.set({view:'new'}),
      openImport:()=>this.set({view:'import'}),
      openManual:()=>this.set({view:'manual'}),
      backToRecipe:()=>this.set({view:'recipe'}),
      backToCook:()=>this.set({view:'cook'}),
      closeSheet:this.closeSheet,
      scrim:['item','new','picker','listmenu','suggest'].includes(s.view),
      ovItem:s.view==='item',ovPicker:s.view==='picker',ovListMenu:s.view==='listmenu',ovSuggest:s.view==='suggest',
      ovSections:s.view==='sections',ovRecipe:s.view==='recipe',ovCook:s.view==='cook',ovFixes:s.view==='fixes',
      ovNew:s.view==='new',ovImport:s.view==='import',ovManual:s.view==='manual',
      dayKcal:String(dayTot.kcal),dvKcal:String(DV.kcal),
      dayLeft:dayTot.kcal<DV.kcal?(DV.kcal-dayTot.kcal)+' left':'over by '+(dayTot.kcal-DV.kcal),
      dayBars:[['Protein','protein',GREEN],['Carbs','carbs',MUST],['Fat','fat',RED],['Fiber','fiber','#8A6A14']]
        .map(([label,k,bg])=>({label,value:Math.round(dayTot[k])+'g of '+DV[k]+'g',pct:Math.min(100,Math.round(dayTot[k]/DV[k]*100))+'%',bg})),
      dayLog:s.dayLog.map(d=>{const r=this.recipe(d.rid);
        return {title:r?r.title:'—',sub:r?(d.servings+' serving'+(d.servings>1?'s':'')+' · '+r.nut.kcal*d.servings+' kcal'):'',
          remove:()=>this.setState(st=>({dayLog:st.dayLog.filter(x=>x.id!==d.id)}))};}),
      dayEmpty:s.dayLog.length===0
    };
  }
}

