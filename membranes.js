window.LESSONS = window.LESSONS || {};
window.LESSONS.membranes = {
title: "Why can oxygen walk into a cell but sodium needs a door?",
blocks: [
{p:"Oxygen is a molecule with two atoms. A sodium ion is a single atom, which sounds smaller. Yet oxygen slips straight through your cell membranes, and sodium can't get through without a protein door. Why? The answer explains channels, pumps, nerve signals, why your brain uses so much energy, and how several common drugs work."},

{h:"Fundamentals"},
{q:"What is the middle of a cell membrane like?",
 a:"Oily. A membrane is a bilayer of phospholipids, with water loving heads facing out on both sides and oily fatty acid tails packed in the middle. Anything crossing has to pass through that oily middle."},
{q:"So what kinds of molecules can cross on their own?",
 a:"Small, nonpolar ones, like oxygen and carbon dioxide. They dissolve right into the oily layer and pass through. Water, small as it is, crosses slowly on its own, and many cells speed that up with water channels called aquaporins."},
{q:"Sodium is tiny. Why can't it cross?",
 a:"Because it's charged, and charged ions in water are wrapped in a shell of water molecules attracted to that charge. To enter the oily middle, the ion would have to strip off that water shell and carry a bare charge into an oily layer that can't stabilize it. That costs far too much energy. Size isn't the problem. Charge is."},
{q:"So how do ions and big polar molecules like glucose get in?",
 a:"Through proteins that span the membrane. Channels are like tunnels that let a specific ion flow through. Transporters bind the molecule and change shape to carry it across. Either way, the protein gives the molecule a path that avoids the oily middle."},

{h:"Connecting the courses"},
{q:"When does moving something across a membrane need energy, and when doesn't it?",
 a:"It depends on direction, not on whether a protein is involved. Moving down the gradient, from high concentration to low, is downhill and needs no energy, even through a protein. That's facilitated diffusion. Moving up the gradient, from low to high, is uphill and needs energy. That's active transport."},
{q:"The sodium potassium pump uses one ATP to move 3 sodium ions out and 2 potassium ions in. What does that do for the cell?",
 a:"It builds two gradients: lots of sodium outside, lots of potassium inside. And because it moves three positive charges out for every two in, it helps make the inside of the cell negative. Those gradients are stored energy, like water held behind a dam."},
{q:"Why does a gradient count as stored energy?",
 a:"Gibbs free energy. Ions packed on one side want to spread out, and that's downhill. For a charged ion, the charge difference across the membrane adds to the push. Let the ions flow back through a door and you can use that energy to do work."},
{q:"Your gut and kidney take up glucose using sodium. How?",
 a:"Through a transporter that carries sodium and glucose in together. Sodium flowing down its steep gradient into the cell is very downhill, and that pays for pulling glucose in even against glucose's own gradient. This is secondary active transport: no ATP is used directly, but the sodium gradient it rides on was built by the ATP powered pump."},

{h:"Predicting new cases"},
{q:"Your brain is about 2 percent of your body weight but uses roughly 20 percent of your energy at rest. Why?",
 a:"Every nerve signal lets sodium rush in and potassium rush out through channels. Afterward, the sodium potassium pump has to push them back to rebuild the gradients, and every cycle of the pump costs ATP. With billions of neurons firing all the time, that adds up to a large share of your energy."},
{q:"The drug digoxin partly blocks the sodium potassium pump in heart cells. Predict what happens to sodium and calcium inside the cell, and to the heartbeat.",
 a:"With the pump slowed, sodium builds up inside. Heart cells use the sodium gradient to push calcium out through an exchanger, so a weaker sodium gradient means less calcium gets pushed out. More calcium stays inside, and more calcium means stronger contraction. That's why digoxin can strengthen a weak heart. It's also why the dose has to be watched closely."},
{q:"SGLT2 inhibitors are diabetes drugs that block a sodium glucose transporter in the kidney. What would they do to glucose in the urine?",
 a:"Raise it. Normally the kidney pulls glucose back out of the urine using sodium glucose transporters. Block them and more glucose stays in the urine and leaves the body, which lowers blood glucose. The glucose in the urine pulls some water with it, which you'd predict from osmosis."},
{q:"In cystic fibrosis, a chloride channel called CFTR doesn't work properly. Why would that make mucus thick?",
 a:"Normally, chloride flows out of cells lining the airways through CFTR, and water follows by osmosis, keeping the mucus thin and wet. Without working CFTR, less chloride and less water get out, so the mucus becomes thick and sticky and is hard to clear."},

{h:"MCAT level"},
{mcat:{passage:"Cultured kidney cells are treated with ouabain, a drug that blocks the sodium potassium pump. Over the next hour, researchers measure sodium inside the cells, the voltage across the membrane, and the rate of glucose uptake through a sodium glucose transporter. This is a teaching passage, and the results describe expected directions, not real data.",
 qs:[
 {q:"What happens to sodium inside the cells?",
  choices:["A. It falls","B. It rises","C. It stays the same, because sodium can't cross membranes","D. It falls, because potassium replaces it"],
  a:"B. Sodium keeps leaking in through channels and transporters, but the pump no longer pushes it out. C is a trap: sodium can't cross the oily bilayer by itself, but it crosses through proteins."},
 {q:"What happens to glucose uptake through the sodium glucose transporter?",
  choices:["A. It rises, because more sodium is available","B. It falls, because the sodium gradient that powers it shrinks","C. It doesn't change, because the transporter doesn't use ATP","D. It rises, because ouabain activates the transporter"],
  a:"B. The transporter depends on sodium rushing in down a steep gradient. With sodium building up inside, the gradient flattens and there's less push. C is the classic trap: true that the transporter doesn't use ATP directly, but its power source depends on the ATP driven pump."},
 {q:"What happens to the voltage across the membrane?",
  choices:["A. The inside becomes less negative over time","B. The inside becomes more negative","C. No change","D. The voltage reverses immediately"],
  a:"A. With the pump stopped, the sodium and potassium gradients slowly run down, so the inside gradually loses its negative charge. It happens over time, not instantly, because the gradients take time to drain."},
 {q:"Discrete question. Glucose moves into a muscle cell from blood through the transporter GLUT4, down its concentration gradient. Does this need ATP?",
  choices:[],
  a:"No. Moving down a gradient through a protein is facilitated diffusion, which is passive. Insulin increases glucose uptake by moving more GLUT4 to the cell surface, not by powering it."}
 ]}},

{h:"Explain it in 60 seconds"},
{q:"Explain to a friend, in five sentences or fewer, why oxygen can enter a cell but sodium can't on its own.",
 a:"A cell is wrapped in a thin oily layer. Oxygen is small and doesn't carry a charge, so it slips right through the oil. Sodium carries a charge, and charged things in water are wrapped in water molecules they can't easily let go of, so they can't pass through oil. Cells solve that with protein doors that let specific ions through. Cells spend a lot of energy pumping sodium out, and that buildup works like a battery that powers nerve signals and pulls nutrients in."},
{p:"<b>Notice what we did.</b> Size seemed like the obvious answer, and it was wrong. When the obvious answer fails, ask what else is different about the two things: here, charge."}
]};
