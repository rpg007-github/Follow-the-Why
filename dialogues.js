/* Finished conversations. Each step: q = question, ch = choices as [text, verdict, reply], ns = reply for "Not sure".
   Verdict: 1 = yes, 2 = close, 0 = not quite. Every choice moves on to the next question. */
window.DIALOGUES = {

eat:{title:"Why do we eat?",steps:[
{q:"Quick question to start. Why do you eat?",ch:[
 ["For energy",1,"Right, energy. That's the answer almost everyone gives. Now let's see if we actually know what it means."],
 ["Because I'm hungry",2,"True, but hunger is just your body's signal. The question is what your body is asking for. Mostly, it's asking for energy."],
 ["To get vitamins",2,"Vitamins matter, but you need only tiny amounts. Most of what you eat is there for energy and for building blocks. Let's start with energy."]],
 ns:"Most of what you eat is there for two reasons: energy, and building blocks to make more of you. Let's start with energy."},
{q:"So what do your cells actually spend for energy?",ch:[
 ["ATP",1,"Yes. ATP is what cells spend, like cash in your pocket. Every muscle contraction and every pump is paid for with ATP. Hold onto that, because here's the catch."],
 ["Glucose",2,"Close. Glucose is something cells burn to make what they spend. What they actually spend is ATP. Think of glucose as the paycheck and ATP as the cash."],
 ["Calories",0,"A calorie is just a unit, like an inch. It measures energy, but it isn't the thing cells use. What they actually spend is a molecule called ATP."]],
 ns:"Cells spend a molecule called ATP. Every muscle contraction, every pump and every nerve signal is paid for with ATP."},
{q:"Okay, so if cells run on ATP, why don't you just eat ATP?",ch:[
 ["Your gut would break it down, and cells make their own anyway",1,"Exactly. Your gut breaks ATP apart like any other nucleotide, and cells don't take in ATP from outside to run on. They make their own, all day long."],
 ["You'd need way too much of it",2,"You would need an enormous amount, that's true. But the bigger problem is that your gut breaks it apart, and cells make their own anyway."],
 ["Nobody sells it",0,"Ha. Even if you could buy it, it wouldn't work. Your gut breaks it apart, and cells don't run on ATP from outside. They make their own."]],
 ns:"Eating ATP wouldn't work. Your gut breaks it apart, and cells make their own ATP all day long."},
{q:"So the real question isn't where to get ATP. It's what your cells use to make it. Where in the cell is most ATP made?",ch:[
 ["Mitochondria",1,"Yes. Most ATP is made in the mitochondria, where the Krebs cycle and the electron transport chain are."],
 ["Nucleus",0,"The nucleus holds the DNA. Most ATP is made in the mitochondria."],
 ["Ribosomes",0,"Ribosomes build proteins, and they spend a lot of ATP doing it. Most ATP is made in the mitochondria."]],
 ns:"Most ATP is made in the mitochondria, where the Krebs cycle and the electron transport chain are."},
{q:"In Biology I you memorized glycolysis, the Krebs cycle and oxidative phosphorylation. Why did you have to learn those?",ch:[
 ["They're how cells turn food into ATP",1,"That's it. That's the whole reason. Anything that counts as food has to find a way into those pathways."],
 ["Because they're on the exam",0,"They are, but there's a much better reason: they're how your cells turn food into ATP. Anything that counts as food has to find a way into them."],
 ["They make glucose",0,"Glycolysis actually breaks glucose down. Those three pathways are how cells turn food into ATP."]],
 ns:"Those three pathways are how your cells turn food into ATP. Anything that counts as food has to find a way into them."},
{q:"So let's test it. Can table salt give you energy?",ch:[
 ["No",1,"Right. Salt has no carbon to burn and no way into glycolysis or the Krebs cycle. It matters a lot for nerves and water balance, but it can never be fuel."],
 ["Yes",0,"No. Salt has no carbon to burn and no way into those pathways. It matters for nerves and water balance, but it can never be fuel."]],
 ns:"No. Salt has no carbon to burn and no way into those pathways, so it can never be fuel."},
{q:"Now fat. How does fat give you energy?",ch:[
 ["It's cut into small pieces that enter the Krebs cycle",1,"Yes. Fatty acids are cut into two carbon pieces called acetyl CoA, and each one enters the Krebs cycle."],
 ["It turns straight into ATP",0,"Not directly. Fat is cut into two carbon pieces that enter the Krebs cycle, and that's what leads to ATP."],
 ["It doesn't. Fat is just storage",0,"It's stored energy, and stored energy is only useful if you can burn it. Fatty acids are cut into two carbon pieces that enter the Krebs cycle."]],
 ns:"Fatty acids are cut into two carbon pieces called acetyl CoA, and each one enters the Krebs cycle."},
{q:"Last one, and it's the deep one. What is actually being pulled off your food to make ATP?",ch:[
 ["Electrons",1,"Yes. Energy in biology is electrons falling toward something that wants them more. Food gives up electrons, carriers like NADH take them to the mitochondria, and they fall to oxygen. That fall pays for the ATP."],
 ["Carbon",0,"The carbon leaves as carbon dioxide, but what's actually used is the electrons. Food gives up electrons, NADH carries them, and they fall to oxygen. That fall pays for the ATP."],
 ["Oxygen",0,"Oxygen is where the electrons end up, not what comes off the food. Food gives up electrons, and they fall to oxygen. That fall pays for the ATP."]],
 ns:"Electrons. Food gives up electrons, NADH carries them, and they fall to oxygen. That fall pays for the ATP."}],
end:{sum:"You eat to get things your cells can burn. Cells spend ATP, but they make it themselves, mostly in the mitochondria, by pulling electrons off food and letting them fall to oxygen. Fat works because it fits into those pathways. Salt doesn't, so it can never be fuel.",
 notice:"\"Why do you eat?\" sounded too easy. So we asked about each word: what is energy, and where does it come from? When you're stuck, take the question apart and ask about each piece.",
 next:["oxygen","protein"]}},

oxygen:{title:"Why do we need oxygen?",steps:[
{q:"Why do you need oxygen?",ch:[
 ["To make energy",1,"Right direction. But oxygen itself has no energy stored in it. So what is it actually doing? Let's find out."],
 ["Because we'd die without it",2,"True, and fast. The question is why. What job does oxygen do that nothing else can?"],
 ["To turn it into carbon dioxide",0,"That's a common mix up. The carbon in the carbon dioxide you breathe out comes from your food. The oxygen you breathe in ends up somewhere else. Let's find out where."]],
 ns:"Oxygen helps you make energy, but it has no energy stored in it. So what is it doing? Let's find out."},
{q:"Energy in biology is electrons falling toward something that wants them more. Which of these wants electrons the most?",ch:[
 ["Oxygen",1,"Yes. Oxygen pulls on electrons harder than almost any other atom. Chemists call that electronegativity, which just means how much an atom loves electrons."],
 ["Carbon",0,"Carbon and hydrogen share electrons about evenly, so neither pulls very hard. Oxygen pulls harder than almost anything."],
 ["Hydrogen",0,"Hydrogen and carbon share electrons about evenly, so neither pulls very hard. Oxygen pulls harder than almost anything."]],
 ns:"Oxygen. It pulls on electrons harder than almost any other atom, which is called electronegativity."},
{q:"So in your cells, where do the electrons from your food end up?",ch:[
 ["On oxygen, which becomes water",1,"Yes. At the end of the electron transport chain, oxygen catches the electrons, picks up protons and becomes water. The oxygen you breathe in leaves as water."],
 ["In ATP",0,"Making ATP doesn't involve handing electrons to it. The electrons end up on oxygen, which becomes water."],
 ["In carbon dioxide",0,"The carbon dioxide comes from the carbon in your food. The electrons end up on oxygen, which becomes water."]],
 ns:"On oxygen. Oxygen catches the electrons, picks up protons and becomes water."},
{q:"Why not let the electrons drop onto oxygen all at once?",ch:[
 ["That would be fire",1,"Exactly. Burning a log and burning sugar in your cells are the same overall reaction. Fire releases it all at once as heat and light. Your cells let the electrons down a staircase of carriers and catch the energy at each step."],
 ["It would be too slow",0,"It's the opposite. All at once is fast. That's fire. Your cells use a staircase of carriers so they can catch the energy a little at a time."],
 ["Oxygen couldn't take them",0,"Oxygen could take them, and fast. That's what fire is. Your cells use a staircase of carriers so they can catch the energy a little at a time."]],
 ns:"All at once would be fire. Your cells let electrons down a staircase of carriers and catch the energy at each step."},
{q:"At each step down the staircase, the energy is used to pump something across the inner membrane of the mitochondrion. What gets pumped?",ch:[
 ["Protons, H+",1,"Yes. Bare protons, with no electrons. They pile up on one side, like water behind a dam."],
 ["Electrons",0,"The electrons travel along the chain. What gets pumped is protons, bare H+ with no electrons."],
 ["ATP",0,"ATP comes later. What gets pumped is protons, bare H+, piling up like water behind a dam."]],
 ns:"Protons, bare H+ with no electrons. They pile up on one side, like water behind a dam."},
{q:"Then the protons flow back through a machine in the membrane. What does that flow make?",ch:[
 ["ATP",1,"Yes. The machine is ATP synthase, and the proton flow drives it. Electrons fall, protons are pumped, ATP is made. Three separate jobs."],
 ["Water",0,"The water was made when oxygen caught the electrons. The proton flow drives ATP synthase, which makes ATP."],
 ["Glucose",0,"Glucose isn't made here. The proton flow drives ATP synthase, which makes ATP."]],
 ns:"ATP. The proton flow drives a machine called ATP synthase. Electrons fall, protons are pumped, ATP is made."},
{q:"So let's test it. Cyanide blocks the very last step, where electrons are handed to oxygen. What happens?",ch:[
 ["ATP production crashes",1,"Yes. The electrons back up, protons stop being pumped, and ATP runs out. Glycolysis can make a little ATP without oxygen, but nowhere near enough for the heart and brain. That's why cyanide kills so fast."],
 ["The cell switches to another way and is fine",0,"Glycolysis can make a little ATP without oxygen, but nowhere near enough for the heart and brain. That's why cyanide is so deadly."],
 ["Nothing, oxygen still gets into the cell",0,"Oxygen gets in, but it can't receive the electrons anymore. The chain backs up, the protons stop being pumped and ATP runs out."]],
 ns:"ATP production crashes. The electrons back up, protons stop being pumped, and the heart and brain run out of ATP."},
{q:"Last one. Sprint hard enough and your muscles make lactate. Why?",ch:[
 ["To free up NAD+ so glycolysis can keep going",1,"Yes. Without enough oxygen, NADH can't unload its electrons, so NAD+ runs out. Making lactate dumps those electrons and frees NAD+, so glycolysis keeps making a little ATP."],
 ["Lactate is just waste",0,"It looks like waste, but it has a job. Making lactate takes electrons off NADH and frees NAD+, so glycolysis can keep making a little ATP."],
 ["The muscle burns lactate as backup fuel",2,"Other tissues, like the heart and liver, can use lactate later. But the muscle makes it right now for another reason: it frees NAD+ so glycolysis can keep going."]],
 ns:"Making lactate takes electrons off NADH and frees NAD+, so glycolysis can keep making a little ATP without oxygen."}],
end:{sum:"You need oxygen because it's the bottom of the hill. Food gives up electrons, they fall down a staircase of carriers to oxygen, and each step pumps protons. The protons flow back through ATP synthase and make ATP. No oxygen, no bottom of the hill, and almost no ATP.",
 notice:"The question that unlocked everything was: where do the electrons end up? Whenever you're stuck on anything about energy, follow the electrons.",
 next:["eat","oilwater"]}},

butter:{title:"Why is butter solid and olive oil liquid?",steps:[
{q:"Butter is solid on the counter. Olive oil is liquid. Both are fat. What makes the difference?",ch:[
 ["Something about how the fats are built",1,"Good instinct. Same kitchen, same temperature, different result. So it has to be the fats themselves."],
 ["Butter has more water in it",0,"Butter does have a little water, but pure butterfat is still solid. So it's something about the fat itself."],
 ["The temperature of the kitchen",0,"Same kitchen, same temperature, different result. So it has to be something about the fats themselves."]],
 ns:"Same kitchen, same temperature, different result. So it has to be something about how the fats are built."},
{q:"When something differs, here's the question to ask yourself: what is it made of? So what is a fat mostly made of?",ch:[
 ["Fatty acids",1,"Yes. A fat is mostly fatty acids, three of them hooked onto a small backbone called glycerol."],
 ["Glucose",0,"Glucose is a sugar. A fat is mostly fatty acids, three of them hooked onto a backbone called glycerol."],
 ["Amino acids",0,"Amino acids build proteins. A fat is mostly fatty acids, three of them hooked onto a backbone called glycerol."]],
 ns:"Fatty acids. Three of them are hooked onto a small backbone called glycerol."},
{q:"A fatty acid is a long chain of carbons with hydrogens on them. So what could be different from one fatty acid to the next?",ch:[
 ["How long the chain is, and whether it has double bonds",1,"That's pretty much it. Chain length and double bonds. So the answer has to come from one of those two."],
 ["How many oxygen atoms it has",0,"Almost every fatty acid has the same two oxygens at its head. What differs is chain length and whether there are double bonds."],
 ["Its color",0,"Fatty acids are colorless. What differs is chain length and whether there are double bonds."]],
 ns:"Two things: how long the chain is, and whether it has double bonds."},
{q:"Now think about melting. When a solid fat melts, what's being pulled apart?",ch:[
 ["Weak attractions between the molecules",1,"Yes. No covalent bonds break. The chains just slide away from each other. Those weak attractions are called van der Waals forces."],
 ["Covalent bonds inside each molecule",0,"Melting doesn't break any covalent bonds. The chains just slide away from each other, breaking weak attractions called van der Waals forces."],
 ["The water inside it",0,"Melting pulls the fat molecules away from each other, breaking weak attractions called van der Waals forces."]],
 ns:"Weak attractions between molecules, called van der Waals forces. No covalent bonds break."},
{q:"So which chains hold together better: long straight ones or short ones?",ch:[
 ["Long straight ones",1,"Right. Longer chains touch along more of their length. More contact, more attraction, higher melting point."],
 ["Short ones",0,"Shorter chains have less surface to touch. Long straight chains touch along more of their length, so they hold together better."],
 ["It makes no difference",0,"It makes a big difference. Long straight chains touch along more of their length, so they hold together better."]],
 ns:"Long straight ones. More contact means more attraction and a higher melting point."},
{q:"Now double bonds. Most double bonds in natural fats put a permanent bend in the chain. What does a bend do?",ch:[
 ["Keeps the chains from stacking tightly",1,"Yes. Picture straight pencils in a box versus bent straws. Bent chains can't stack, so they touch less and melt more easily. Olive oil is mostly bent chains. Butter is mostly straight ones."],
 ["Helps them stack better",0,"The opposite. Picture straight pencils in a box versus bent straws. Bent chains can't stack, so they touch less and melt more easily."],
 ["Nothing, it's only one bond",0,"One bond, but a big effect. Bent chains can't stack like straight pencils, so they touch less and melt more easily."]],
 ns:"A bend keeps chains from stacking, like bent straws versus straight pencils. Less contact, lower melting point."},
{q:"Your membranes are built from these same chains. A bacterium is moved into the cold and its membranes start to stiffen. What should it do?",ch:[
 ["Build membranes with more bent chains",1,"Yes. More bends keep the membrane fluid in the cold. Bacteria really do this, and fish in icy water are rich in bent, unsaturated fats for the same reason."],
 ["Build membranes with longer straight chains",0,"That would make it even stiffer. More bent chains keep the membrane fluid in the cold."],
 ["Nothing, membranes don't depend on temperature",0,"They do. More bent chains keep the membrane fluid in the cold, and bacteria really do make that switch."]],
 ns:"Build membranes with more bent chains, which stay fluid in the cold."},
{q:"Last one. A trans fat has a double bond that keeps the chain nearly straight. How would it behave?",ch:[
 ["Like butter: it packs tightly and stays solid",1,"Yes. That's why food makers used them to make oils solid and shelf stable. Trans fats raise LDL cholesterol and are linked to heart disease, which is why the United States moved to remove them from the food supply."],
 ["Like olive oil, because it still has a double bond",2,"Good thinking, but the shape matters more than the bond. A trans double bond keeps the chain nearly straight, so it packs like butter."]],
 ns:"Like butter. The straight chain packs tightly. Trans fats are linked to heart disease, which is why the United States moved to remove them from food."}],
end:{sum:"Fats are solid or liquid depending on how well their chains stack. Long straight chains touch more and stay solid. Chains with bends can't stack, so they flow. Your cells use this same rule to keep their membranes fluid.",
 notice:"The question that unlocked it was: what is it made of, and what can be different? That one question works on almost anything a textbook says differs.",
 next:["oilwater","eat"]}},

oilwater:{title:"Why do oil and water separate?",steps:[
{q:"Shake oil and water together and they separate. Why?",ch:[
 ["Oil is nonpolar and water is polar",1,"That's the textbook answer, and it's right. But why does that make them separate? Let's go one level deeper."],
 ["Oil is lighter than water",2,"Oil does float because it's less dense, but that explains why it ends up on top, not why the two won't mix."],
 ["Oil pushes water away",0,"It feels that way, but oil and water actually attract each other a little. Something else is going on."]],
 ns:"The textbook answer is that water is polar and oil isn't. But let's find out why that makes them separate."},
{q:"Start with water. Oxygen pulls harder on electrons than hydrogen does. What does that do to a water molecule?",ch:[
 ["Gives it a slightly negative end and slightly positive ends",1,"Yes. The molecule is neutral overall, but it's lopsided. That's what polar means."],
 ["Gives it a full charge, like an ion",0,"Not a full charge, just partial ones. It's neutral overall but lopsided. That's what polar means."],
 ["Nothing, it's neutral",2,"It is neutral overall, but it's lopsided: slightly negative at the oxygen, slightly positive at the hydrogens. That's what polar means."]],
 ns:"It's lopsided: slightly negative at the oxygen, slightly positive at the hydrogens. That's what polar means."},
{q:"Those lopsided ends let water molecules stick to each other. What are those attractions called?",ch:[
 ["Hydrogen bonds",1,"Yes. Each one is weak, but water makes huge numbers of them, constantly breaking and reforming."],
 ["Covalent bonds",0,"Covalent bonds hold each water molecule together. The attractions between water molecules are hydrogen bonds."],
 ["Ionic bonds",0,"Water has no full charges. The attractions between water molecules are hydrogen bonds."]],
 ns:"Hydrogen bonds. Each one is weak, but water makes huge numbers of them."},
{q:"Now drop in oil. It's all carbon and hydrogen, which share electrons about evenly. Can water form hydrogen bonds with it?",ch:[
 ["No",1,"Right. Oil has no lopsided ends for water to grab."],
 ["Yes",0,"No. Oil has no lopsided ends, so water has nothing to hydrogen bond with."]],
 ns:"No. Oil has no lopsided ends for water to grab."},
{q:"So the water touching the oil is stuck. It can't bond to the oil, so it lines up in a tidy cage around it. Is that more ordered or less ordered for the water?",ch:[
 ["More ordered",1,"Yes. Those water molecules have lost their freedom to tumble around."],
 ["Less ordered",0,"More ordered. Those water molecules are locked into a cage and have lost their freedom to tumble around."]],
 ns:"More ordered. The water in the cage has lost its freedom to tumble around."},
{q:"Nature favors disorder. So what's the best move for the water?",ch:[
 ["Push the oil together so less water has to touch it",1,"Yes. When the oil clumps into one blob, fewer water molecules are trapped in cages, and the water gets its freedom back. That's the hydrophobic effect. Water always wins."],
 ["Dissolve the oil anyway",0,"Dissolving would trap even more water in cages. Instead, water pushes the oil together so less water has to touch it. Water always wins."],
 ["Freeze",0,"Freezing is even more ordered. Instead, water pushes the oil together so less water has to touch it. Water always wins."]],
 ns:"Push the oil together. Fewer water molecules get trapped, and water gets its freedom back. Water always wins."},
{q:"So let's test it. Phospholipids have an oily tail and a water friendly head. Drop them in water and a membrane forms all by itself. Why?",ch:[
 ["Water pushes the oily tails together, heads facing out",1,"Yes. Nobody builds a membrane. Water pushes the tails together and the bilayer assembles itself."],
 ["Proteins build it",0,"No builder is needed. Water pushes the oily tails together and the bilayer assembles itself."],
 ["The phospholipids form covalent bonds with each other",0,"No covalent bonds form. Water pushes the oily tails together and the bilayer assembles itself."]],
 ns:"Water pushes the oily tails together, heads facing out, and the membrane assembles itself."},
{q:"Last one. In Alzheimer's disease, misfolded proteins clump together. Using what you just learned, why might a misfolded protein clump?",ch:[
 ["Oily parts that should be hidden get exposed, and water pushes them together",1,"Yes. A folded protein tucks its oily parts inside. Misfold it, and those oily patches face the water, which pushes them to stick to each other. That's part of how amyloid beta and tau build up in Alzheimer's disease."],
 ["Misfolded proteins are magnetic",0,"No magnets involved. A misfolded protein exposes oily patches that should be hidden, and water pushes those patches together."],
 ["They form covalent bonds with each other",0,"The sticking is mostly not covalent. A misfolded protein exposes oily patches, and water pushes those patches together."]],
 ns:"A misfolded protein exposes oily patches that should be tucked inside, and water pushes them together."}],
end:{sum:"Oil and water separate because water would rather bond with itself. Oil forces nearby water into tidy cages, and water escapes by pushing the oil together. That same push builds your membranes, folds your proteins, and can make misfolded proteins clump.",
 notice:"\"Polar and nonpolar\" was the right answer, but it didn't explain anything until we asked why. When you get a right answer you can't explain, keep asking.",
 next:["butter","oxygen"]}},

protein:{title:"Why do we eat protein?",steps:[
{q:"You need protein in your diet. Why?",ch:[
 ["To build muscle and other proteins",1,"Right, building blocks. Let's make sure we know what that really means."],
 ["For energy",2,"Protein can give you energy, but that isn't its main job. Let's see why."],
 ["Everyone just says you need it",0,"Fair, but let's figure out why. The main reason is building blocks."]],
 ns:"The main reason is building blocks. Let's see what that means."},
{q:"When you eat a steak, do the steak's proteins become your proteins?",ch:[
 ["No, they're broken into amino acids first",1,"Right. Digestion breaks proteins into amino acids, and your cells rebuild them into your own proteins."],
 ["Yes, they're absorbed whole",0,"No. Digestion breaks proteins into amino acids, and your cells rebuild them into your own proteins."]],
 ns:"No. Digestion breaks proteins into amino acids, and your cells rebuild them into your own proteins."},
{q:"Why bother breaking them down? Why not just use the cow's proteins?",ch:[
 ["My cells need my own proteins, built from my own DNA",1,"Exactly. Your DNA holds the instructions for your proteins. The cow's proteins are the wrong ones for you, so you take them apart and reuse the pieces, like taking apart one set of toy bricks to build your own model."],
 ["They're too big to absorb",2,"True, they're too big. But even if they got in, they'd be the wrong proteins. Your DNA holds the instructions for your own, so you reuse the pieces."]],
 ns:"Your DNA holds the instructions for your own proteins. So you take the cow's apart and reuse the pieces."},
{q:"There are 20 amino acids. Can your body make all of them?",ch:[
 ["No, some have to come from food",1,"Right. Nine are essential, meaning you can't make them and have to eat them. That's a big reason protein in your diet matters."],
 ["Yes, all of them",0,"No. Nine are essential, meaning you can't make them and have to eat them."],
 ["No, none of them",0,"You can make most of them. Nine are essential, meaning you can't make them and have to eat them."]],
 ns:"No. Nine are essential, meaning you can't make them and have to eat them."},
{q:"Now energy. Can you get energy from protein?",ch:[
 ["Yes",1,"Yes. Amino acids can be broken down, and their carbon skeletons enter the same pathways as sugar and fat. Gram for gram, protein gives about the same energy as sugar."],
 ["No",0,"A lot of students say no, but you can. Amino acids can be broken down, and their carbon skeletons enter the same pathways as sugar and fat."]],
 ns:"Yes. The carbon skeletons of amino acids enter the same pathways as sugar and fat."},
{q:"But there's a catch. Amino acids have something that sugar and fat don't. What is it?",ch:[
 ["Nitrogen",1,"Yes. Every amino acid has an amino group, and that means nitrogen."],
 ["Oxygen",0,"Sugar and fat have oxygen too. What amino acids have that they don't is nitrogen, in the amino group."],
 ["Phosphorus",0,"Amino acids don't carry phosphorus. What they have that sugar and fat don't is nitrogen, in the amino group."]],
 ns:"Nitrogen, in the amino group."},
{q:"When you burn an amino acid for fuel, the nitrogen has to go somewhere. Free ammonia is toxic. What does your liver turn it into?",ch:[
 ["Urea, which the kidneys remove",1,"Yes. The liver packs the nitrogen into urea, and the kidneys send it out in urine."],
 ["Carbon dioxide",0,"Carbon dioxide has no nitrogen. The liver packs the nitrogen into urea, and the kidneys send it out."],
 ["ATP",0,"The nitrogen can't become ATP. The liver packs it into urea, and the kidneys send it out."]],
 ns:"Urea. The liver packs the nitrogen into urea, and the kidneys send it out in urine."},
{q:"So let's test it. Why is protein a poor fuel to rely on?",ch:[
 ["It makes nitrogen waste and uses up building blocks",1,"Yes. Getting rid of the nitrogen takes extra work, and every amino acid you burn is one you can't build with. That's why your body leans on protein for fuel mainly when sugar and fat run short, as in starvation."],
 ["Protein has no energy in it",0,"It does have energy. The problem is the nitrogen waste, and that every amino acid you burn is one you can't build with."]],
 ns:"Burning protein makes nitrogen waste, and every amino acid you burn is one you can't build with."}],
end:{sum:"You eat protein mainly for building blocks: amino acids your cells use to build your own proteins from your own DNA, including nine you can't make. Protein can be burned for energy, but it leaves nitrogen behind that the liver turns into urea, so it's a backup fuel, not a main one.",
 notice:"The last question did the real work: if protein can be fuel, is it a good one? Asking \"is it true, and does it make sense?\" is how a fact turns into understanding.",
 next:["eat","oxygen"]}}
};
