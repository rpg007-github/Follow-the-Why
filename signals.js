window.LESSONS = window.LESSONS || {};
window.LESSONS.signals = {
title: "How do cells talk to each other?",
blocks: [
{p:"You have tens of trillions of cells, and they have to act together. When you eat, your liver stores sugar. When you're scared, your heart speeds up. When you cut yourself, cells nearby start dividing to heal it. None of that happens unless cells send and receive messages. So how does a cell know a message is meant for it, and how does one molecule outside change what happens inside? This is cell signaling, and it's behind diabetes, cancer and some of the most talked about drugs right now."},

{h:"Fundamentals"},
{q:"A hormone travels through your blood past nearly every cell. How does a cell know the message is meant for it?",
 a:"It has a receptor, a protein shaped to bind that specific hormone. Cells without the receptor ignore the hormone completely. Structure begets function: the shape of the receptor is what makes a cell a listener. Same hormone, different receptors, different responses in different cells."},
{q:"Insulin and epinephrine bind receptors on the cell surface. Steroid hormones like cortisol and estrogen go right inside. Why the difference?",
 a:"Think about the membrane. Insulin is a protein and epinephrine is charged, so neither can cross the oily membrane. They have to deliver the message at the surface. Steroids are built from cholesterol and are mostly oily, so they slip through the membrane and bind receptors inside, often ones that act directly on genes."},
{q:"If a hormone stays outside the cell, how does the message get inside?",
 a:"The receptor spans the membrane. When the hormone binds outside, the receptor changes shape, and that shape change is felt on the inside, where it switches on other proteins. The hormone never enters. The receptor passes the message through the wall."},
{q:"Once a message is turned on, how does a cell turn it off?",
 a:"Every on switch has an off switch. Hormones are cleared from the blood, receptors release them, phosphate groups are removed by enzymes called phosphatases, and switch proteins shut themselves off over time. A signal that can't turn off is just as dangerous as one that can't turn on."},

{h:"Connecting the courses"},
{q:"Epinephrine binds a G protein coupled receptor. What happens next, and why is it called a second messenger system?",
 a:"The receptor switches on a G protein, which swaps GDP for GTP and becomes active. The active G protein turns on an enzyme that makes a small molecule called cyclic AMP, or cAMP. The hormone is the first messenger, outside. cAMP is the second messenger, inside, and it switches on protein kinase A, which changes the activity of many other proteins."},
{q:"Why would a cell use a chain of steps instead of having the receptor act directly?",
 a:"Amplification and control. One hormone can activate many G proteins, each enzyme makes many cAMP molecules, and each kinase changes many proteins. A few hormone molecules can change thousands of proteins in seconds. Every step is also a place to tune or stop the signal."},
{q:"Insulin binds a different kind of receptor, a receptor tyrosine kinase. What does kinase mean here?",
 a:"A kinase is an enzyme that adds a phosphate group, taken from ATP, onto a protein. When insulin binds, the receptor adds phosphates onto itself, and those phosphates become docking spots for other proteins that carry the signal on. A phosphate brings negative charge, and that changes shape, which turns proteins on or off."},
{q:"The protein Ras passes growth signals inward from receptors like EGFR. It's on when holding GTP and turns itself off by breaking GTP down to GDP. What would happen if a mutation kept Ras from breaking down GTP?",
 a:"Ras would be stuck on, telling the cell to grow and divide even with no growth signal outside. That's exactly what happens in many cancers. Mutated Ras genes are among the most common changes found in human tumors."},

{h:"Predicting new cases"},
{q:"In type 2 diabetes, people often make plenty of insulin, yet their blood sugar stays high. Using what you know about signaling, what could be going wrong?",
 a:"The cells aren't responding well to the signal. That's insulin resistance: the receptor or the steps after it respond weakly, so fewer glucose transporters move to the cell surface in muscle and fat, and glucose stays in the blood. The message is being sent, but it isn't being heard well."},
{q:"Some cancers make too much EGFR, a growth factor receptor that's a tyrosine kinase. How might a targeted cancer drug work?",
 a:"By blocking the receptor or its kinase activity, so the excess growth signal can't get through. Several cancer drugs work exactly this way, which is why tumors are often tested for specific receptor changes before treatment is chosen."},
{q:"GLP-1 drugs, used for diabetes and weight loss, mimic a gut hormone. Its receptor is a G protein coupled receptor. What do they do?",
 a:"They activate the GLP-1 receptor. In the pancreas, that boosts insulin release when blood glucose is high. They also slow how fast the stomach empties and act on the brain to reduce appetite. One signal, many tissues, many effects, all depending on which cells carry the receptor."},
{q:"Cholera toxin locks a G protein in its on state in the cells lining your intestine. Predict what happens.",
 a:"cAMP stays high. In those intestinal cells, high cAMP opens the CFTR chloride channel, chloride pours into the gut, and water follows by osmosis. The result is massive watery diarrhea and dangerous dehydration. That's why cholera is treated mainly by replacing fluid and salts."},

{h:"MCAT level"},
{mcat:{passage:"Researchers compare normal cells with cells carrying a Ras mutation that prevents Ras from breaking down GTP. Both are grown with and without EGF, a growth factor that activates the EGF receptor. Cell division is measured. Normal cells divide only with EGF present. Mutant cells divide whether or not EGF is present. This is a teaching passage, and the results describe expected directions, not real data.",
 qs:[
 {q:"Which statement best explains why mutant cells divide without EGF?",
  choices:["A. The mutant cells make their own EGF","B. Ras stays bound to GTP and keeps signaling even without the receptor being activated","C. The EGF receptor is missing in mutant cells","D. Ras blocks the receptor"],
  a:"B. Ras normally turns itself off by breaking down GTP. If it can't, it stays on, and the growth signal continues no matter what's happening at the receptor. A would also explain the result, but nothing in the passage supports it, and the mutation is in Ras itself."},
 {q:"A drug blocks the EGF receptor's kinase activity. What effect would it have on the mutant cells?",
  choices:["A. It would stop their division","B. Little effect, because the stuck on signal comes from Ras, after the receptor","C. It would make them divide faster","D. It would repair the Ras mutation"],
  a:"B. The block is upstream of the problem. Ras is already stuck on, below the receptor. This is a real reason some tumors with Ras mutations don't respond to drugs that block EGFR. A is the tempting answer if you forget where in the chain the problem lies."},
 {q:"What does this experiment suggest Ras normally is?",
  choices:["A. A tumor suppressor","B. A protein whose overactivity can drive cancer, an oncogene when mutated","C. A hormone","D. A second messenger"],
  a:"B. A gene whose overactive version drives cancer is an oncogene. Tumor suppressors are the opposite: their loss drives cancer. Ras is a protein switch, not a hormone or a small second messenger."},
 {q:"Discrete question. Why do steroid hormones usually take hours to produce their effects, while epinephrine works in seconds?",
  choices:[],
  a:"Steroids mostly act by changing which genes are turned on, so the effect has to wait for new RNA and protein to be made. Epinephrine works through a second messenger cascade that changes the activity of proteins already in the cell, which takes seconds."}
 ]}},

{h:"Explain it in 60 seconds"},
{q:"Explain to a friend, in five sentences or fewer, how cells talk to each other.",
 a:"Cells send messages as chemicals, like hormones, that travel through the blood. Only cells with the right receptor, a protein shaped to fit that chemical, pay attention. When the message binds, the receptor changes shape and sets off a chain of switches inside the cell that turn proteins on or off. Many diseases come from those switches going wrong: in type 2 diabetes cells stop listening to insulin, and in many cancers a growth switch gets stuck on. A lot of modern drugs work by blocking or copying these messages."},
{p:"<b>Notice what we did.</b> We kept asking where the problem sits in the chain: the hormone, the receptor or a switch further down. When a process has many steps, find the broken step, and you can predict what will and won't fix it."}
]};
