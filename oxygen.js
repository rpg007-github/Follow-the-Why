window.LESSONS = window.LESSONS || {};
window.LESSONS.oxygen = {
title: "Why do we need oxygen?",
blocks: [
{p:"Stop breathing and you're in trouble within minutes. Stop eating and you can last weeks. So oxygen must be doing something urgent. But oxygen has no calories. You can't burn it for energy. So what is it actually doing? Let's reason it out, and by the end you'll understand why the electron transport chain is built the way it is."},

{h:"Fundamentals"},
{q:"If you stop breathing, why does the brain get into trouble so fast?",
 a:"The brain runs on ATP, uses a lot of it, and stores almost none. Without oxygen, cells can make only a small amount of ATP, so within minutes the brain can't keep its pumps running. Whatever oxygen does, it's tied to making ATP."},
{q:"Does oxygen contain energy the way food does?",
 a:"No. Food contains loosely held electrons that can fall to somewhere lower. Oxygen is the somewhere lower. It's not the fuel. It's the bottom of the hill the fuel's electrons fall down."},
{q:"Why oxygen? What makes it the best bottom of the hill?",
 a:"Electronegativity, how much an atom loves electrons. Oxygen sits near the top right of the periodic table and loves electrons more than almost any other atom. Electrons falling onto oxygen release a lot of energy. Energy in biology is electrons falling toward something that wants them more, and oxygen wants them very badly."},
{q:"The oxygen you breathe in: what does it become?",
 a:"Water. At the end of the electron transport chain, oxygen catches electrons, picks up protons and becomes water. Students often think the oxygen leaves as carbon dioxide. It doesn't. The carbon in the carbon dioxide you breathe out comes from the carbon in your food."},

{h:"Connecting the courses"},
{q:"The electrons come off food in glycolysis, the Krebs cycle and fat breakdown. What carries them to the mitochondrion's inner membrane? And when hydrogen moves, what should you count?",
 a:"NADH and FADH2 carry them. Count the electrons every time hydrogen moves. NAD+ catches a hydride, one proton with two electrons, and the other proton leaves as a plain H+, so you see NADH + H+. FAD catches two whole hydrogen atoms and becomes FADH2. A bare H+ carries no electrons, so it carries no energy."},
{q:"Why does the cell pass electrons down a chain of carriers instead of handing them straight to oxygen?",
 a:"Handing them over all at once is fire: everything released as heat in one burst. The electron transport chain is a staircase. Each carrier wants electrons a bit more than the one before, so electrons step down a little at a time, and the cell catches the energy at each step instead of losing it as heat."},
{q:"What does the cell do with the energy at each step?",
 a:"It pumps protons, bare H+, from the matrix out across the inner membrane. Protons pile up on one side, which makes a gradient of both concentration and charge, like water piling up behind a dam. Notice the separate jobs: the electrons provide the energy, and the protons store it."},
{q:"How does that gradient become ATP?",
 a:"The protons flow back into the matrix through one door, ATP synthase. ATP synthase is a tiny rotating machine. The proton flow turns it, and the turning joins ADP and phosphate into ATP. Electrons fall, protons are pumped, ATP is made. Three jobs, three different things moving."},
{q:"Electrons from NADH enter the chain at complex I. Electrons from FADH2 enter at complex II, one step lower. Which gives more ATP, and why?",
 a:"NADH, about 2.5 ATP per pair of electrons compared with about 1.5 for FADH2. Electrons from FADH2 skip complex I, which is one of the proton pumps, so fewer protons get pumped per pair. Where electrons enter the staircase decides how many steps they fall."},

{h:"Predicting new cases"},
{q:"Cyanide blocks complex IV, the last step where electrons are handed to oxygen. Predict what happens to oxygen use, NADH, ATP and lactate.",
 a:"Oxygen use drops, because electrons can't reach it. The whole chain backs up, so NADH piles up and NAD+ runs short. Protons stop being pumped, so ATP production crashes. Cells lean on glycolysis and make lactate to free up NAD+, so lactate rises. Glycolysis alone can't supply the heart and brain, which is why cyanide kills quickly."},
{q:"Why does a sprinting muscle make lactate?",
 a:"When oxygen can't keep up, NADH can't unload into the chain, and NAD+ runs out. Without NAD+, glycolysis stops. Making lactate hands the electrons from NADH back onto pyruvate, which frees NAD+ so glycolysis keeps making a little ATP. It buys time."},
{q:"When you exercise hard you breathe out more carbon dioxide. Where is it coming from?",
 a:"From the Krebs cycle turning faster. As you burn more fuel, more carbons get walked up to carbon dioxide in the mitochondria, and you breathe it out. Your breathing rate rises partly because your body senses that carbon dioxide."},
{q:"Sometimes a single electron leaks out of the chain early and lands on oxygen. What does that make, and why is it a problem?",
 a:"Superoxide, a free radical, meaning a molecule with an unpaired electron. An unpaired electron grabs an electron from whatever is nearby, often a fatty acid in a membrane, which creates a new radical, and so on in a chain reaction. Cells defend themselves with enzymes like superoxide dismutase and catalase and with antioxidants like vitamins C and E. Oxidative damage plays a part in aging, heart disease, cancer and Alzheimer's disease, though how much it causes those diseases versus results from them is still being worked out."},

{h:"MCAT level"},
{mcat:{passage:"Isolated mitochondria are given oxygen and one of two fuels. Malate is oxidized in the matrix and hands its electrons to NAD+, so they enter the chain at complex I. Succinate hands its electrons to FAD at complex II. Each fuel is tested with and without rotenone, a drug that blocks complex I. With malate, rotenone stopped oxygen use. With succinate, rotenone had little effect on oxygen use. This is a teaching passage, and the results describe expected directions, not real data.",
 qs:[
 {q:"Why does succinate keep oxygen use going in the presence of rotenone?",
  choices:["A. Succinate's electrons enter at complex II, below the block","B. Rotenone is broken down by succinate","C. Succinate supplies oxygen","D. Succinate blocks complex IV"],
  a:"A. Rotenone blocks complex I. Electrons from succinate enter at complex II and continue to complex III, complex IV and oxygen, so they never need to pass the blocked step."},
 {q:"With malate and rotenone, what happens to the ratio of NADH to NAD+ in the matrix?",
  choices:["A. It falls, because NADH is used faster","B. It rises, because NADH can't unload its electrons","C. It doesn't change","D. It falls, because malate stops being oxidized"],
  a:"B. NADH hands its electrons to complex I, which is blocked, so NADH piles up and NAD+ runs short. D is tempting, since malate oxidation does slow down, but that happens because NAD+ runs short, which is the same story told from the other end."},
 {q:"Without rotenone, which fuel gives more ATP per pair of electrons, and why?",
  choices:["A. Succinate, because FADH2 holds more energy","B. Malate, because its electrons pass through complex I and pump more protons","C. They're equal, because both reach oxygen","D. Succinate, because complex II pumps the most protons"],
  a:"B. Electrons from NADH pass through three proton pumps: complexes I, III and IV. Electrons from FADH2 skip complex I. C is the trap: it's true that both reach oxygen, but that doesn't answer the question. D is wrong because complex II doesn't pump protons at all."},
 {q:"Discrete question. How many electrons does one molecule of O2 need to become two molecules of water?",
  choices:[],
  a:"Four. Each oxygen atom needs two electrons and two protons to become water, and O2 has two oxygen atoms. Complex IV holds onto the electrons until it can deliver all four, which keeps partly reduced, dangerous forms of oxygen from escaping."}
 ]}},

{h:"Explain it in 60 seconds"},
{q:"Explain to a friend, in five sentences or fewer, why you need oxygen.",
 a:"Your cells make energy by pulling electrons off the food you eat. Those electrons have to go somewhere, and oxygen is where they end up, because oxygen grabs electrons harder than almost anything. On the way down to oxygen, the electrons drive pumps that power the machine that makes your cells' energy molecule, ATP. Without oxygen at the bottom, the whole line backs up and ATP runs out in minutes. That's why you can go weeks without food but only minutes without air."},
{p:"<b>Notice what we did.</b> The question that unlocked everything was: where do the electrons end up? Whenever you're stuck on anything about energy, follow the electrons, and separately, follow the protons."}
]};
