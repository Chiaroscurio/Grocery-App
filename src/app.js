
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

class Component extends DCLogic {
  constructor(p){
    super(p);
    this.state={
      tab:'list', shopping:false, view:null, activeRecipe:null, editItem:null,
      draft:'', draftQty:1, draftSection:null, newSec:'',
      ingSel:{}, justAdded:'', recipeMenu:false, confirmDelete:false, confirmClear:false,
      cookRating:4, cookIssues:[], cookNote:'', cookApplied:[],
      imUrl:'', imState:'idle', imDraft:null, imErr:'', suggestion:null,
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
    const recipes=d.recipes||this.state.recipes, removedLib=d.removedLib||[];
    const have=new Set(recipes.map(r=>r.id));
    const fresh=(typeof RECIPE_LIBRARY!=='undefined'?RECIPE_LIBRARY:[]).filter(r=>!have.has(r.id)&&!removedLib.includes(r.id));
    this.setState({items:d.items||this.state.items,sections:d.sections||this.state.sections,
      recipes:[...recipes,...fresh.map(r=>JSON.parse(JSON.stringify(r)))],dayLog:d.dayLog||this.state.dayLog,removedLib});
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
    try{const s=this.state;localStorage.setItem('marketlist.v2',JSON.stringify({items:s.items,sections:s.sections,recipes:s.recipes,dayLog:s.dayLog,removedLib:s.removedLib||[]}));}catch(e){}
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
    this.setState(st=>({items:st.items.filter(i=>!i.checked),shopping:false,view:sug?'suggest':null,suggestion:sug}));
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
    this.set({view:'recipe',activeRecipe:id,ingSel:sel,justAdded:'',recipeMenu:false,confirmDelete:false});
  }
  deleteRecipe=()=>{
    if(!this.state.confirmDelete) return this.set({confirmDelete:true});
    const id=this.state.activeRecipe;
    this.setState(st=>({recipes:st.recipes.filter(r=>r.id!==id),removedLib:id.startsWith('lib-')?[...(st.removedLib||[]),id]:(st.removedLib||[]),view:null,activeRecipe:null,recipeMenu:false,confirmDelete:false,
      dayLog:st.dayLog.filter(d=>d.rid!==id)}));
  };
  addRecipeToList=()=>{
    const r=this.recipe(this.state.activeRecipe);
    const picked=r.ing.filter((g,i)=>this.state.ingSel[r.id+'-'+i]);
    if(!picked.length) return;
    this.setState(s=>{
      const items=[...s.items];
      picked.forEach(g=>{
        const hit=items.find(i=>i.name.toLowerCase()===g.n.toLowerCase());
        if(hit){ hit.from=hit.from||r.title; }
        else items.push({id:uid('i'),name:g.n.charAt(0).toUpperCase()+g.n.slice(1),qty:1,unit:g.a,sec:g.s,checked:false,from:r.title,price:g.p||0});
      });
      return {items,justAdded:picked.length+(picked.length===1?' ingredient added to the list.':' ingredients added to the list.')};
    });
  };

  submitCook=()=>this.set({view:'fixes',cookApplied:[...this.state.cookIssues]});
  saveCook=()=>{
    const rid=this.state.activeRecipe;
    this.setState(s=>({
      recipes:s.recipes.map(r=>r.id!==rid?r:{...r,
        logs:[{id:uid('l'),date:'Today',rating:s.cookRating,note:s.cookNote||'No notes.',issues:[...s.cookIssues]},...r.logs],
        adj:[...s.cookApplied.filter(k=>FIXBOOK[k]).map(k=>({id:uid('a'),text:FIXBOOK[k].adj+' — added today'})),...r.adj]}),
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
    const host=(d.url.replace(/^https?:\/\//,'').split('/')[0]||'web').replace(/^www\./,'');
    const r={id:uid('rc'),title:(d.title||'').trim()||host,source:host,url:d.url,time:d.time||'—',servings:d.servings||4,
      ing:d.ing,steps:d.steps,nut:d.nut,logs:[],adj:[]};
    this.setState(s=>({recipes:[r,...s.recipes],view:null,imUrl:'',imState:'idle',imDraft:null,imErr:'',tab:'recipes'}));
  };
  saveManual=()=>{
    const t=this.state.mnTitle.trim(); if(!t) return;
    const rows=this.state.mnRows.filter(r=>r.name.trim());
    const r={id:uid('rc'),title:t,source:'Mine',time:this.state.mnTime||'—',servings:Number(this.state.mnServings)||4,
      ing:rows.map(x=>({a:x.amount,n:x.name,s:guessSection(x.name),p:0})),
      steps:this.state.mnSteps.split('\n').map(x=>x.trim()).filter(Boolean),
      nut:{kcal:0,protein:0,carbs:0,fat:0,fiber:0},logs:[],adj:[]};
    this.setState(s=>({recipes:[r,...s.recipes],view:null,mnTitle:'',mnServings:'',mnTime:'',mnSteps:'',
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

    const tabs=[['list','LIST'],['recipes','RECIPES'],['today','TODAY']].map(([id,label])=>{
      const on=s.tab===id;
      return {label,sub:id==='list'?total+' items':id==='recipes'?s.recipes.length+' saved':'kcal',
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
    const recipeCards=s.recipes.map(r=>{
      const last=r.logs[0], c=recipeCost(r);
      return {id:r.id,title:r.title,kcal:r.nut.kcal?String(r.nut.kcal):'—',
        cost:c?money(c):'—',meta:r.time+' · '+r.servings+' servings · '+r.source,
        dots:this.dots(last?last.rating:0),lastNote:last?'cooked '+last.date:'not cooked yet',
        tileBg:last&&last.rating>=4?'#F7EBCF':'#FFFDF6',open:()=>this.openRecipe(r.id)};
    });

    const ar=this.recipe(s.activeRecipe)||s.recipes[0]||{id:'x',title:'—',ing:[],steps:[],logs:[],adj:[],nut:DV,time:'',servings:1,source:''};
    const selCount=ar.ing.filter((g,i)=>s.ingSel[ar.id+'-'+i]).length;
    const arCost=recipeCost(ar);
    const inDay=s.dayLog.some(d=>d.rid===ar.id);
    const rd={
      title:ar.title,meta:ar.time+' · '+ar.servings+' servings · '+ar.source,
      hasUrl:!!ar.url,openUrl:()=>{if(ar.url) window.open(ar.url,'_blank','noopener');},
      menuOpen:s.recipeMenu,menuBg:s.recipeMenu?'rgba(26,23,18,0.1)':'transparent',
      toggleMenu:()=>this.set({recipeMenu:!s.recipeMenu,confirmDelete:false}),
      delLabel:s.confirmDelete?'TAP AGAIN TO DELETE':'DELETE THIS RECIPE',
      delBg:s.confirmDelete?RED:'transparent',delColor:s.confirmDelete?CREAM:RED,del:this.deleteRecipe,
      ingredients:ar.ing.map((g,i)=>{
        const key=ar.id+'-'+i,on=!!s.ingSel[key];
        return {text:(g.a?g.a+' ':'')+g.n,icon:this.secIcon(g.s,17),priceLabel:g.p?money(g.p):'',on,
          boxBg:on?RED:'transparent',boxBorder:on?RED:'rgba(26,23,18,0.35)',
          toggle:()=>this.setState(st=>({ingSel:{...st.ingSel,[key]:!st.ingSel[key]}}))};
      }),
      toggleAllLabel:selCount===ar.ing.length?'NONE':'ALL',
      toggleAll:()=>{const all=selCount===ar.ing.length;const o={};ar.ing.forEach((g,i)=>{o[ar.id+'-'+i]=!all;});this.set({ingSel:o});},
      addLabel:selCount?'ADD '+selCount+' TO LIST':'PICK INGREDIENTS',
      addToList:this.addRecipeToList,justAdded:!!s.justAdded,addedMsg:s.justAdded,
      steps:ar.steps.map((t,i)=>({n:String(i+1),text:t})),
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
      found:s.imState==='done'&&!!imd&&!imd.partial,
      title:imd?imd.title:'',onTitle:e=>this.setState(st=>({imDraft:{...st.imDraft,title:e.target.value}})),
      meta:imd?[imd.time,imd.servings+' servings',imd.ing.length?imd.ing.length+' ingredients':''].filter(Boolean).join(' · '):'',
      hasIng:!!imd&&imd.ing.length>0,
      ingredients:(imd?imd.ing:[]).map(g=>({text:(g.a?g.a+' ':'')+g.n,sectionName:this.secName(g.s)})),
      save:this.saveImport,saveLabel:imd&&imd.ing.length?'SAVE TO RECIPES':'SAVE AS LINK'
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
      headKicker:s.tab==='list'?(total+' items · '+s.sections.length+' aisles'):s.tab==='recipes'?'Saved and importable':new Date().toLocaleDateString(undefined,{weekday:'long',day:'numeric',month:'long'}),
      headTitle:s.tab==='list'?'GROCERIES':s.tab==='recipes'?'RECIPES':'TODAY',
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
      finishLabel:done?'CLEAR '+done+' PICKED '+(done===1?'ITEM':'ITEMS'):'NOTHING PICKED YET',
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
      recipeCards,rd,ck,fx,im,mn,sg,ed,
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

