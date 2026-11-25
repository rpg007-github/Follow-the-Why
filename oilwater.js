window.LESSONS = window.LESSONS || {};
window.LESSONS.oilwater = {
title: "Why do oil and water separate?",
blocks: [
{p:"Shake a bottle of salad dressing and watch. In a minute the oil is back on top. You've known that your whole life, and on a test you'd write \"oil is nonpolar and water is polar.\" That's right, but it doesn't explain anything yet. Why should that make them separate? Once you really get this one, it explains membranes, protein folding, how soap works and even part of Alzheimer's disease. I say it all the time: water always wins. Let's find out what that means."},

{h:"Fundamentals"},
{p:"Start with water itself. Go back to general chemistry and electronegativity, which just means how much an atom loves electrons."},
{q:"Oxygen pulls on electrons harder than hydrogen does. What does that do to a water molecule?",
 a:"It makes the molecule lopsided. The shared electrons spend more time near the oxygen, so the oxygen end is slightly negative and the hydrogen ends are slightly positive. The molecule is neutral overall, but it has charged ends. That's what polar means."},
{q:"So what holds one water molecule to the next?",
 a:"Hydrogen bonds. The slightly positive hydrogen of one water is attracted to the slightly negative oxygen of another. Each hydrogen bond is weak, but water makes enormous numbers of them, constantly breaking and reforming. Liquid water is a crowd of molecules always grabbing and letting go."},
{q:"Oil is almost all carbon and hydrogen. Can water form hydrogen bonds with it?",
 a:"No. Carbon and hydrogen share electrons about evenly, so oil has no lopsided ends for water to grab. Here's something most students don't know: oil and water actually attract each other a little, through weak van der Waals forces. So oil doesn't separate because water pushes it away. Something else is going on."},
{q:"If water doesn't repel oil, why do they separate?",
 a:"Look at the water right next to the oil. Those water molecules can't hydrogen bond to the oil, so to keep as many hydrogen bonds as they can, they line up in a tidy cage around it. A tidy cage means those water molecules have lost their freedom to tumble around. The fix is to push all the oil together into one blob, so fewer water molecules have to touch it and get trapped. Water gets its freedom back. That push is called the hydrophobic effect. Water always wins."},

{h:"Connecting the courses"},
{p:"Now bring in general chemistry II. Whether something happens on its own depends on ΔG, the change in free energy. ΔG equals ΔH minus T times ΔS. A negative ΔG means it happens on its own. ΔH is about heat and bonds. ΔS is about disorder, and the universe favors more of it."},
{q:"When oil and water separate, which part of that equation is doing most of the work?",
 a:"The entropy term, ΔS, and it's the entropy of the water, not the oil. Mixing oil into water forces water into ordered cages, so disorder goes down. Separating lets that water go free, so disorder goes up. That makes ΔG negative for separating. This surprises students, because the oil actually becomes more organized when it clumps. But there's far more water than oil, and the water's gain wins."},
{q:"A phospholipid has a water friendly head and two oily tails. Drop phospholipids in water and they form a sheet two layers thick. Why a sheet and not a ball?",
 a:"Structure begets function. Water pushes the oily tails together and away from water, with the heads facing out. A molecule with two tails is roughly shaped like a cylinder, and cylinders pack side by side into a flat sheet, a bilayer. A molecule with one tail, like a free fatty acid or a soap, is shaped more like a cone, and cones pack into a ball called a micelle. Nobody builds the membrane. Water does."},
{q:"How does soap get grease off your hands? And how is bile doing the same job in your gut?",
 a:"Soap molecules have a water loving end and an oily end. The oily ends bury themselves in the grease, and the water loving ends face out, so the grease is wrapped in tiny balls that wash away with water. Your liver makes bile salts that work the same way. They break fat in your gut into tiny droplets, which gives the enzymes that digest fat far more surface to work on. That's why you need bile to digest fat but not sugar."},
{q:"How does the same idea fold a protein?",
 a:"A protein chain has some amino acids with oily side chains and some with charged or polar ones. Water pushes the oily side chains together into the core of the protein, and the polar ones end up on the surface touching water. The hydrophobic effect is one of the biggest forces driving folding. Hydrogen bonds and ionic attractions help hold the final shape, but much of the push comes from water."},

{h:"Predicting new cases"},
{q:"Oxygen and carbon dioxide slip straight through a cell membrane. Glucose can't. Why?",
 a:"The middle of a membrane is oily. Oxygen and carbon dioxide are small and nonpolar, so they dissolve right into that oily layer and pass through. Glucose is covered in OH groups that are hydrogen bonded to water. To cross, it would have to strip off that water and enter an oily layer, which costs too much. So glucose needs a protein door, a transporter."},
{q:"Why can't fat travel in your blood the way sugar does?",
 a:"Blood is mostly water, and water always wins, so free fat would clump. Your body ships fat inside particles that have a water friendly shell of phospholipids and proteins with the fat packed inside. Those particles are lipoproteins, like the LDL you hear about with cholesterol. Free fatty acids ride on a blood protein called albumin, which has oily pockets for them."},
{q:"When you cook an egg, the clear part turns white and solid, and it doesn't turn back when it cools. Why?",
 a:"Heat shakes the proteins until they unfold. Unfolding exposes the oily side chains that were tucked inside. Now water pushes those oily patches together, but between different protein molecules, so they tangle into a solid mass. Cooling doesn't untangle them. You can't unboil an egg."},
{q:"In Alzheimer's disease, misfolded proteins clump into plaques and tangles. Using what you know, why might a misfolded protein clump?",
 a:"A properly folded protein keeps its oily parts hidden inside. A misfolded one leaves oily patches facing the water, and water pushes those patches together, so the proteins stick to each other and build up. That's part of how amyloid beta and tau aggregate in Alzheimer's disease. Exactly why some proteins misfold and how the clumps damage neurons is still being worked out."},

{h:"MCAT level"},
{mcat:{passage:"A researcher studies a small protein that folds on its own in water. She makes three single mutations and measures how stable each folded protein is compared with normal. Mutation 1 changes a leucine buried in the protein's core to aspartate. Mutation 2 changes the same buried leucine to isoleucine. Mutation 3 changes a lysine on the protein's surface to glutamate. Mutation 1 sharply reduced stability, mutation 2 barely changed it, and mutation 3 barely changed it. This is a teaching passage, and the results describe expected directions, not real data.",
 qs:[
 {q:"Which explanation best accounts for the large effect of mutation 1?",
  choices:["A. Aspartate is larger than leucine and doesn't fit","B. A charged side chain buried in the oily core can't interact with water, which costs a lot of free energy","C. Aspartate forms a disulfide bond","D. Leucine is the only amino acid that can form hydrogen bonds"],
  a:"B. Aspartate carries a negative charge at body pH. Burying a charge in an oily core strips it of the water that stabilized it, which is very costly, so the folded form is less favorable. A is wrong because aspartate is actually smaller than leucine. C is wrong because only cysteine forms disulfide bonds. D is simply false."},
 {q:"Why did mutation 2 barely change stability?",
  choices:["A. Isoleucine is also nonpolar and about the same size, so the core stays oily","B. Isoleucine is charged","C. The mutation was on the surface","D. Isoleucine forms more hydrogen bonds with water"],
  a:"A. Leucine and isoleucine are both nonpolar with the same number of carbons, so the core stays oily and packed. C is a trap: the mutation was in the core, not the surface."},
 {q:"Mutation 3 reverses a surface charge from positive to negative. Why did it barely matter?",
  choices:["A. Surface side chains face water, and both lysine and glutamate are happy in water","B. Charges have no effect on proteins","C. Glutamate is nonpolar","D. Lysine was buried in the core"],
  a:"A. Both side chains are charged and both are comfortable facing water. Unless that lysine was making a specific contact, swapping it usually changes stability little. B is too extreme, since charges matter a great deal when they're buried or making specific pairs."},
 {q:"Discrete question. A new drug is very nonpolar. Predict how it crosses cell membranes and how it travels in blood.",
  choices:[],
  a:"It should cross membranes easily by dissolving through the oily middle of the bilayer, with no transporter needed. In blood, it will likely ride on a carrier protein such as albumin, because water would push it out of solution on its own."}
 ]}},

{h:"Explain it in 60 seconds"},
{q:"Explain to a friend, in five sentences or fewer, why oil and water separate.",
 a:"Water molecules love sticking to each other. Oil has nothing for water to stick to, so the water right next to the oil gets stuck in an orderly cage. Water would rather be free, so it pushes all the oil together into one blob, which frees up most of the water. That push is why oil floats in a layer. The same push builds the membranes around every one of your cells and folds your proteins."},
{p:"<b>Notice what we did.</b> \"Polar and nonpolar\" was the right answer, but it didn't explain anything until we asked why. When you have a right answer you can't explain, ask what each molecule is doing, and keep going until you can."}
]};
