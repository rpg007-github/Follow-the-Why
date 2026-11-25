# Follow the Why

A free study page for biology majors. A student picks a question, taps a best guess, and gets a reply written in Professor Guttmann's voice. One plain question at a time, the page walks them from something they half remember to why it matters, the way he does in class.

Live site: https://rpg007-github.github.io/Follow-the-Why/

Part of the College Success Hub: https://rpg007-github.github.io/College-Success-Hub/

## How it works for a student

1. Open the page. There's no sign up and nothing to set up.
2. Pick a question from the "Start here" list, or search all 200.
3. Tap a guess for each question, or tap "Not sure." Every choice gets its own reply, labeled Yes, Close or Not quite.
4. At the end, read "Here's what you just figured out" and one line showing the thinking move that unlocked it.

Nothing is scored, saved or sent anywhere. Everything runs in the student's browser.

## Files

```
index.html            The page and all of its code
data/questions.js     The 200 questions, grouped into ten areas
data/dialogues.js     The finished conversations
README.md             This file
```

There's no build step. GitHub Pages serves the files as they are.

## Adding a conversation

1. Write it in `data/dialogues.js`, following the five that are already there. Each conversation has a title, a list of steps and an ending.

```js
yourid:{title:"Why do we need oxygen?",steps:[
 {q:"The question the student sees",ch:[
   ["Choice text", 1, "Reply for a right answer"],
   ["Choice text", 2, "Reply for a close answer"],
   ["Choice text", 0, "Reply for a wrong answer"]],
  ns:"Reply when the student taps Not sure"}
 ],
 end:{sum:"Here's what you just figured out, in two or three sentences.",
      notice:"The thinking move that unlocked it.",
      next:["eat","protein"]}}
```

The middle number marks the answer: 1 for yes, 2 for close, 0 for not quite. Every choice moves the student to the next question, so the path is always the same.

2. In `data/questions.js`, change that question from plain text to an object with the same id:

```js
{t:"Why do we need oxygen?",id:"oxygen"}
```

It then shows up as Ready on the home page and in the Start here list. Questions without a finished conversation show as Coming soon.

## Writing rules

* Plain words first, then the formal term.
* Remind the student of the prerequisite fact before asking why it matters.
* At every redox step, say where the electrons go.
* Use only real disease connections, and never give medical advice.
* Write everything originally. Never copy textbook text.
* No dashes of any kind, and no course numbers.
* Professor Guttmann reviews every conversation before it goes live.

## Accessibility and privacy

Built to WCAG 2.1 AA. Every control works by keyboard, focus is always visible, answers are labeled in words and not only by color, and the layout works on a phone and in light or dark mode. No accounts, no cookies, no trackers and no outside fonts.

## Notice

A free supplement to class, not a replacement for it, and not exam preparation. Written with AI assistance and reviewed by the author, but it may contain errors. Check it against your textbook and instructor. Disease connections are for learning only, and nothing here is medical advice. Not affiliated with or endorsed by any university, testing organization or publisher.
