window.LESSONS = window.LESSONS || {};
window.LESSONS.enzyme = {
title: "What does an enzyme actually do?",
blocks: [
{p:"Here's a puzzle. Burning sugar releases a lot of energy, so it's very downhill. Yet a bowl of sugar sits on your table for years without catching fire. And your cells burn sugar all day at body temperature. What's the difference? Enzymes. Ask most students what an enzyme does and they'll say \"speeds up reactions.\" True, but how? And what doesn't it change? Let's find out."},

{h:"Fundamentals"},
{q:"If burning sugar is so downhill, why doesn't the sugar bowl burst into flames?",
 a:"Because there's a hill to climb first. To react, molecules have to be pushed into an awkward, high energy arrangement called the transition state. The energy needed to get there is the activation energy. Downhill overall doesn't mean fast. A boulder on a ledge can sit forever until something gives it a push."},
{q:"So what does an enzyme do to that hill?",
 a:"It lowers it. An enzyme gives the reaction an easier path with a lower activation energy, so many more molecules make it over each second. The reaction goes faster, often millions of times faster."},
{q:"Does an enzyme change whether a reaction is downhill, or where it ends up at equilibrium?",
 a:"No. An enzyme doesn't change ΔG, and it doesn't change the equilibrium. It speeds up the forward and reverse reactions equally, so equilibrium is reached faster but at the same place. An enzyme can't make an uphill reaction go. Cells handle uphill reactions a different way, by coupling them to something downhill, like ATP."},
{q:"Is an enzyme used up in the reaction?",
 a:"No. It comes out unchanged and can do the reaction again, thousands of times per second for some enzymes. That's why a small amount of enzyme can process a lot of substrate."},

{h:"Connecting the courses"},
{q:"Lock and key, or hand and glove: which is closer to how an enzyme binds its substrate?",
 a:"Hand and glove is closer. Lock and key suggests a rigid fit. Real enzymes are flexible, and binding the substrate changes the enzyme's shape to fit more snugly. That's called induced fit. Here's the deeper part: an enzyme binds the transition state even more tightly than it binds the substrate. Think of a metal rod held between magnets that pull it toward a bent shape. The enzyme stabilizes the bent, awkward arrangement, which is exactly what lowers the hill."},
{q:"When you measure how fast an enzyme works, why do you measure the rate right at the start?",
 a:"Think of Pac Man at the beginning of a level, eating as fast as he can with dots everywhere. That's the initial rate. Later, substrate runs low and product builds up, and product can push the reaction backward. Measuring at the start gives you the enzyme's true speed at that substrate concentration."},
{q:"What does Vmax tell you, and what does Km tell you?",
 a:"Vmax is the top speed, when every enzyme molecule is busy all the time. Add more enzyme and Vmax goes up. Km is the substrate concentration that gets you to half of Vmax. A low Km means the enzyme reaches half speed with very little substrate, so it binds its substrate tightly. A high Km means it needs a lot of substrate."},
{q:"A competitive inhibitor looks like the substrate and sits in the active site. What happens to Km and Vmax?",
 a:"Km goes up: you need more substrate to reach half speed, because substrate has to compete for the site. Vmax stays the same: flood the system with enough substrate and the substrate wins nearly every time, so the enzyme can still reach top speed."},

{h:"Predicting new cases"},
{q:"Statins lower cholesterol by blocking HMG CoA reductase, a key enzyme in making cholesterol. Why does that lower cholesterol in the blood, not just in the liver?",
 a:"When liver cells make less cholesterol, they sense the shortage and put more LDL receptors on their surface. Those receptors pull LDL cholesterol out of the blood. So blocking one enzyme in the liver lowers the LDL in your blood, which lowers the risk of heart disease."},
{q:"Why does a high fever become dangerous for enzymes?",
 a:"Heat makes proteins shake. A little extra heat speeds reactions, but too much shakes the enzyme out of its folded shape. Structure begets function, so an unfolded enzyme stops working. Each enzyme has a temperature where it works best, and for human enzymes that's near body temperature."},
{q:"A noncompetitive inhibitor binds somewhere other than the active site and keeps the enzyme from working. Can adding more substrate overcome it?",
 a:"No. The inhibitor isn't competing for the active site, so more substrate doesn't push it off. It effectively takes enzyme molecules out of action, so Vmax goes down, while the enzymes still working bind substrate normally."},
{q:"Your liver uses glucokinase, which has a high Km for glucose. Your muscles and brain use hexokinase, with a low Km. Why would that make sense?",
 a:"Hexokinase, with its low Km, works near top speed even when glucose is low, so the brain and muscle keep getting fuel. Glucokinase, with its high Km, speeds up only when glucose is high, like after a meal. So the liver stores glucose mainly when there's extra. It acts as a sensor. Same reaction, two enzymes, tuned for two jobs."},

{h:"MCAT level"},
{mcat:{passage:"An enzyme's reaction rate is measured at several substrate concentrations, with and without Compound X. At low substrate, the rate with Compound X is much lower than without it. At very high substrate, the two rates become nearly equal. This is a teaching passage, and the results describe expected directions, not real data.",
 qs:[
 {q:"What kind of inhibitor is Compound X most likely to be?",
  choices:["A. Competitive","B. Noncompetitive","C. An irreversible inhibitor","D. Not an inhibitor"],
  a:"A. Its effect disappears at high substrate, which means substrate can outcompete it. That's the signature of a competitive inhibitor. A noncompetitive or irreversible inhibitor would lower the top rate no matter how much substrate you add."},
 {q:"How does Compound X affect Km and Vmax?",
  choices:["A. Km up, Vmax unchanged","B. Km unchanged, Vmax down","C. Both down","D. Km down, Vmax unchanged"],
  a:"A. More substrate is needed to reach half speed, but the top speed is still reachable."},
 {q:"A researcher adds more enzyme to both samples. Which statement is true?",
  choices:["A. Vmax rises in both samples","B. Km falls in both samples","C. The equilibrium of the reaction shifts toward product","D. Compound X stops working"],
  a:"A. Vmax depends on how much enzyme there is, so more enzyme raises the top speed in both. C is the trap: enzymes change speed, never the equilibrium. Km is a property of the enzyme and substrate and doesn't depend on how much enzyme you add."},
 {q:"Discrete question. If the substrate concentration equals Km, what fraction of Vmax is the rate? And at nine times Km?",
  choices:[],
  a:"Half of Vmax at Km, by definition. At nine times Km, the rate is 9 divided by 10, or 90 percent of Vmax, from the Michaelis Menten equation: rate equals Vmax times substrate divided by Km plus substrate."}
 ]}},

{h:"Explain it in 60 seconds"},
{q:"Explain to a friend, in five sentences or fewer, what an enzyme does.",
 a:"Most reactions in your body would happen on their own eventually, but far too slowly, because molecules first have to be pushed into an awkward shape. An enzyme is a protein that grabs the molecules and holds them in that awkward shape, so the reaction happens thousands or millions of times faster. It doesn't change where the reaction ends up, only how fast it gets there. And the enzyme isn't used up, so it can do the job again and again. Many drugs, like statins for cholesterol, work by blocking a specific enzyme."},
{p:"<b>Notice what we did.</b> We started with a puzzle that seemed impossible: a very downhill reaction that doesn't happen. When two facts seem to contradict each other, that's usually where the real lesson is."}
]};
