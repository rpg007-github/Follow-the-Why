window.LESSONS = window.LESSONS || {};
window.LESSONS.bloodph = {
title: "Why is a small change in blood pH an emergency?",
blocks: [
{p:"Normal blood pH is about 7.4. If it drops to 7.1, a patient can be in serious danger. That sounds like a tiny change, three tenths of a unit. So why is it an emergency? To answer that you need pH, pKa and buffers from general chemistry, and you need to know what a proton does to a protein. Let's build it."},

{h:"Fundamentals"},
{q:"What is pH actually measuring?",
 a:"How much free H+ is around. pH is the negative log of the H+ concentration. Two things follow. First, a lower pH means more H+, more acidic. Second, because it's a log scale, each whole unit is a tenfold change in H+."},
{q:"So how much more H+ is there at pH 7.1 than at 7.4?",
 a:"About twice as much. A drop of 0.3 is ten to the 0.3 power, which is about 2. So \"a small change\" is actually the free H+ in your blood doubling. That's not small at all."},
{q:"An acid gives up H+. When it does, does an electron go with it?",
 a:"No. H+ is a bare proton with no electrons. The pair of electrons that held it stays behind on what's left, which is why that leftover piece, the base, becomes negative. No electrons changed owners, so this isn't oxidation or reduction. It's acid and base chemistry. When hydrogen moves, count the electrons."},
{q:"Why would extra H+ matter to a protein?",
 a:"Many amino acid side chains can gain or lose a proton. Gaining or losing one changes their charge. Change the charges and you change which parts attract and repel each other, so you change the protein's shape. Structure begets function, so a changed shape means a changed function. Enzymes slow down or stop, and hemoglobin holds oxygen differently. Everything that depends on shape is at risk."},

{h:"Connecting the courses"},
{q:"What is pKa?",
 a:"The pH at which a group is half on and half off: half carries its proton and half has given it up. Below the pKa the group mostly keeps its proton. Above the pKa it mostly gives it up."},
{q:"Histidine's side chain has a pKa of about 6. Why does that make histidine so common in enzyme active sites?",
 a:"Because 6 is close to the pH inside cells. That means histidine can easily go either way, picking up a proton or handing one off, under normal conditions. That makes it ideal for moving protons around during a reaction. A group with a pKa of 2 or 12 would be stuck one way."},
{q:"What is a buffer, and when does it work best?",
 a:"A buffer is a weak acid paired with its base. Add acid and the base soaks up the H+. Add base and the acid gives up H+ to neutralize it. A buffer works best within about one pH unit of its pKa, where there's plenty of both forms. The Henderson Hasselbalch equation says it: pH equals pKa plus the log of base over acid."},
{q:"Blood's main buffer is bicarbonate. Its partner, carbonic acid, has a pKa of about 6.1, which is more than one unit below blood pH. So why does it work so well at 7.4?",
 a:"Because carbonic acid falls apart into carbon dioxide and water, and you can breathe carbon dioxide out. The system is open. When acid is added, bicarbonate soaks it up to make carbonic acid, which becomes carbon dioxide, and your lungs get rid of it. Your kidneys can adjust bicarbonate over hours to days. Lungs and kidneys together keep resetting the buffer, which a closed bottle of buffer could never do."},

{h:"Predicting new cases"},
{q:"A patient's blood becomes acidic. Why does breathing faster and deeper help?",
 a:"Le Chatelier's principle. Carbon dioxide, carbonic acid and H+ are linked by equilibrium. Breathing faster removes carbon dioxide, so the equilibrium shifts to replace it, which uses up H+ and raises the pH. This is respiratory compensation."},
{q:"In diabetic ketoacidosis, the liver floods the blood with ketone bodies. What happens to pH, bicarbonate and breathing?",
 a:"Ketone bodies are acids, so they release H+ and pH falls. Bicarbonate is used up soaking up that H+, so bicarbonate falls. The patient breathes deep and fast to blow off carbon dioxide, so carbon dioxide in the blood falls too. All three go down, which is the signature of a metabolic acidosis with respiratory compensation."},
{q:"Someone panicking breathes very fast for several minutes and their fingers start tingling. What happened to their blood pH?",
 a:"It went up. Blowing off too much carbon dioxide shifts the equilibrium the other way, using up H+, so the blood becomes alkaline. That's respiratory alkalosis. The tingling happens because, in more alkaline blood, proteins like albumin bind more calcium, so less free calcium is available to nerves."},
{q:"Lungs fix pH in minutes. Kidneys take days. Why have both?",
 a:"Lungs can only change carbon dioxide. They can't get rid of other acids, like ketone bodies or the acids from breaking down protein. Kidneys can excrete H+ and make new bicarbonate, which actually removes acid from the body, but it's slow. Lungs buy time and kidneys fix the account."},

{h:"MCAT level"},
{mcat:{passage:"A patient arrives with deep, rapid breathing. Blood values: pH 7.25 (normal 7.35 to 7.45), bicarbonate 14 mEq/L (normal 22 to 26), and partial pressure of carbon dioxide 30 mmHg (normal 35 to 45).",
 qs:[
 {q:"What is the primary disorder?",
  choices:["A. Respiratory acidosis","B. Metabolic acidosis","C. Respiratory alkalosis","D. Metabolic alkalosis"],
  a:"B. The pH is low, so it's an acidosis. Bicarbonate is low, which matches the acidosis, so the problem is metabolic. Carbon dioxide is also low, which would push pH up, not down, so it can't be the cause. It's the compensation."},
 {q:"Which condition is most consistent with these values?",
  choices:["A. Diabetic ketoacidosis","B. Severe vomiting","C. A drug overdose that slows breathing","D. Hyperventilating from anxiety"],
  a:"A. Ketoacids use up bicarbonate and drop the pH, and the fast breathing is the lungs compensating. B causes metabolic alkalosis, from losing stomach acid. C causes respiratory acidosis, with high carbon dioxide. D causes respiratory alkalosis, with high pH."},
 {q:"Why is the low carbon dioxide helpful to this patient?",
  choices:["A. It shifts the bicarbonate equilibrium to use up H+, raising pH toward normal","B. It provides more oxygen","C. It increases bicarbonate production by the lungs","D. It isn't helpful, it's the cause of the problem"],
  a:"A. Removing carbon dioxide pulls the equilibrium toward carbon dioxide, consuming H+. C is wrong because the lungs don't make bicarbonate. D is the trap of mistaking compensation for cause."},
 {q:"Discrete question. A buffer of acetic acid, pKa 4.76, is at pH 5.76. What is the ratio of acetate to acetic acid?",
  choices:[],
  a:"10 to 1. pH minus pKa is 1, and the log of the ratio equals 1, so the ratio is 10. Every pH unit above the pKa is ten times more of the base form."}
 ]}},

{h:"Explain it in 60 seconds"},
{q:"Explain to a friend, in five sentences or fewer, why a small change in blood pH is dangerous.",
 a:"pH is on a log scale, so a drop that looks small, from 7.4 to 7.1, means the acid in your blood has doubled. Extra acid puts protons onto your proteins and changes their charges. Changing the charges changes their shapes, and proteins only work when they're the right shape. So enzymes, hemoglobin and much else stop working properly. Your lungs and kidneys work constantly to keep pH in a narrow range for exactly that reason."},
{p:"<b>Notice what we did.</b> \"Three tenths of a unit\" sounded harmless until we asked what pH actually measures. Whenever a number seems too small to matter, check the scale it's on."}
]};
