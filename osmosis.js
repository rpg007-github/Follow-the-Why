window.LESSONS = window.LESSONS || {};
window.LESSONS.osmosis = {
title: "What is osmosis, really?",
blocks: [
{p:"Remember the semipermeable membrane lab, the bag of solution sitting in a beaker? Most students did it, wrote down the result and never thought about it again. So why did you do that experiment at all? Because it explains why red blood cells burst, why IV fluid has to be a certain saltiness, why drinking seawater dehydrates you and why uncontrolled diabetes makes people thirsty. Let's work it out."},

{h:"Fundamentals"},
{q:"In osmosis, what actually moves?",
 a:"Water. Osmosis is water moving across a membrane that lets water through but blocks the dissolved stuff, the solute. If the solute could cross, it would just spread out on its own, and you wouldn't need osmosis."},
{q:"Which way does the water move?",
 a:"Toward the side with more dissolved particles. Another way to say it: water moves from where water is more concentrated to where it's less concentrated, because dissolved particles take up some of the space. Water moves to even things out."},
{q:"Does it matter what the dissolved particles are, or just how many there are?",
 a:"Just how many. That's what colligative means: the effect depends on the number of particles, not what they are. One glucose molecule counts as one particle. One sodium chloride splits into a sodium ion and a chloride ion when it dissolves, so it counts as two."},
{q:"Put a red blood cell in pure water. What happens? Now put one in very salty water.",
 a:"In pure water, the cell has more particles inside than outside, so water rushes in, the cell swells and bursts. In very salty water, there are more particles outside, so water leaves, and the cell shrivels. A cell is happy only when the particle count inside and out is about the same."},

{h:"Connecting the courses"},
{q:"The inside of a cell is about 300 milliosmolar, meaning 300 millimoles of dissolved particles per liter. What concentration of sodium chloride outside would match it?",
 a:"About 150 millimolar. Each sodium chloride gives two particles, and 150 times 2 is 300. That's why normal saline used in IVs is about 0.9 percent sodium chloride, roughly 154 millimolar, which comes out near the particle count of blood."},
{q:"So 150 millimolar sodium chloride and 300 millimolar glucose behave about the same in osmosis. Why?",
 a:"Both give about 300 millimoles of particles per liter. Osmosis counts particles, not what they are. This is the van 't Hoff factor from general chemistry at work: how many particles each unit of solute breaks into."},
{q:"Here's a twist. Put a red blood cell in 300 millimolar urea. Same particle count as the inside of the cell. What happens?",
 a:"It swells and bursts anyway. Urea is small and crosses the membrane. As urea moves in, the cell gains particles inside, and water follows it in. Only particles that can't cross the membrane hold water back. Chemists call the particle count osmolarity. Biologists care about tonicity, which counts only the particles that can't cross."},
{q:"Why do your cells store sugar as glycogen instead of as thousands of free glucose molecules?",
 a:"Because osmosis counts particles. One glycogen molecule can hold tens of thousands of glucose units but counts as a single particle. If a liver cell stored all that glucose free, the particle count inside would be enormous, and water would rush in and burst it."},

{h:"Predicting new cases"},
{q:"In uncontrolled diabetes, glucose spills into the urine. Why does that make a person thirsty and urinate a lot?",
 a:"The glucose in the urine adds particles that the kidney can't pull back fast enough, so water follows it out into the urine. The person loses a lot of water, gets dehydrated and becomes thirsty. Frequent urination and thirst are classic early signs of diabetes, and this is why."},
{q:"Why does drinking seawater make you more dehydrated, not less?",
 a:"Seawater has more salt than your blood. To get rid of that salt, your kidneys have to make urine, and they can't make urine much saltier than seawater. So you end up spending more water to get rid of the salt than you took in."},
{q:"A plant wilts when you forget to water it and perks back up when you do. What's happening inside its cells?",
 a:"Plant cells have more particles inside than the water around their roots, so water flows in and pushes against the stiff cell wall. That pressure, called turgor, holds the plant upright, like air in a tire. Without water, the pressure drops and the plant goes limp. Water it, and osmosis pumps the pressure back up."},
{q:"An IV bag of pure water would be dangerous. Why?",
 a:"It would add water to the blood with no particles, so the blood's particle count would drop. Water would then rush into red blood cells and other cells, and they could swell and burst. That's why IV fluids are matched to blood, as with normal saline."},

{h:"MCAT level"},
{mcat:{passage:"Red blood cells, with an internal concentration of about 300 milliosmolar, are placed in four solutions: (1) 300 millimolar glucose, (2) 150 millimolar sodium chloride, (3) 300 millimolar sodium chloride, and (4) 300 millimolar urea. Assume glucose crosses the red cell membrane slowly over the time of the experiment, sodium and chloride effectively don't cross, and urea crosses quickly.",
 qs:[
 {q:"In which solution will the cells shrink?",
  choices:["A. 300 millimolar glucose","B. 150 millimolar sodium chloride","C. 300 millimolar sodium chloride","D. 300 millimolar urea"],
  a:"C. 300 millimolar sodium chloride gives about 600 milliosmolar of particles that don't cross, which is double the inside, so water leaves the cells. B matches the inside and is isotonic."},
 {q:"In which solution will the cells swell and burst, even though its particle count matches the inside of the cell?",
  choices:["A. 300 millimolar glucose","B. 150 millimolar sodium chloride","C. 300 millimolar sodium chloride","D. 300 millimolar urea"],
  a:"D. Urea crosses the membrane quickly, so it adds particles inside the cell, and water follows. The solution has the same osmolarity as the cell but is hypotonic. That's the classic trap: same particle count, but the particles cross."},
 {q:"Which statement best explains why solution 2 is a good model for IV fluid?",
  choices:["A. It contains the same number of non crossing particles as the inside of the cell","B. Sodium is a fuel for cells","C. It has the same mass of solute as blood","D. Chloride kills bacteria"],
  a:"A. It matches the cells' particle count with particles that stay outside, so water doesn't move either way. C is wrong because osmosis counts particles, not mass. B is false, since sodium has no carbon to burn."},
 {q:"Discrete question. What is the osmolarity of 0.1 molar calcium chloride, CaCl2?",
  choices:[],
  a:"0.3 osmolar. Each calcium chloride splits into one calcium ion and two chloride ions, three particles in all, so 0.1 times 3 is 0.3."}
 ]}},

{h:"Explain it in 60 seconds"},
{q:"Explain to a friend, in five sentences or fewer, what osmosis is and why it matters.",
 a:"Osmosis is water moving across a barrier toward the side with more stuff dissolved in it. What matters is how many dissolved particles there are, not what they are. Your cells are surrounded by a barrier like that, so if the water around them has too few particles, water rushes in and they can burst, and if it has too many, they shrivel. That's why IV fluid has to match your blood. It's also why sugar in the urine of someone with diabetes pulls water out and makes them thirsty."},
{p:"<b>Notice what we did.</b> We asked why you did a lab you'd already forgotten. Every lab you did was meant to teach something you'll use later. When a lab felt pointless, ask what it would explain about a living cell."}
]};
