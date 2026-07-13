/* 
   JAVASCRIPT ARRAYS 
   
// -------------------- 1. CREATION --------------------
const hunters = ["Sung Jinwoo", "Cha Hae-in", "Go Gunhee"]; // literal (preferred)
const slayers = new Array("Tanjiro", "Zenitsu", "Inosuke"); // constructor (avoid, confusing with single number arg)
const emptySlots = new Array(5); // ⚠️ creates 5 empty slots, NOT [undefined]*5 in a useful way

// -------------------- 2. INDEXING & LENGTH --------------------
console.log(hunters[0]);          // "Sung Jinwoo" — O(1) access
console.log(hunters.length);      // 3
hunters[3] = "Baek Yoonho";        // arrays are dynamic, auto-grows
hunters.length = 2;                // truncates! ["Sung Jinwoo","Cha Hae-in"]

// -------------------- 3. MUTATING METHODS (change original array) --------------------
slayers.push("Giyu");        // add to end   -> O(1) amortized
slayers.pop();                // remove from end -> O(1)
slayers.unshift("Kanao");     // add to start -> O(n) shifts all indices
slayers.shift();               // remove from start -> O(n)
slayers.splice(1, 1, "Rengoku"); // (start, deleteCount, ...items) -> O(n)
slayers.sort();                 // in-place sort (default = string/unicode order!)
slayers.reverse();              // in-place reverse

// -------------------- 4. NON-MUTATING METHODS (return new array) --------------------
const doubleRank = hunters.map(h => h + " (S-Rank)");     // transform
const sRanks = hunters.filter(h => h.includes("Jinwoo")); // select
const total = [1, 2, 3].reduce((sum, n) => sum + n, 0);   // aggregate -> 6
const sliced = slayers.slice(0, 2);                        // shallow copy portion
const merged = [...hunters, ...slayers];                   // spread = concat alt.
const flat = [[1, 2], [3, [4]]].flat(2);                    // flatten nested arrays

// -------------------- 5. SEARCHING --------------------
hunters.includes("Cha Hae-in");        // true (uses SameValueZero, NaN-safe)
hunters.indexOf("Go Gunhee");          // 2, -1 if not found
hunters.find(h => h.startsWith("Sung"));      // returns first match VALUE
hunters.findIndex(h => h.startsWith("Sung")); // returns first match INDEX
hunters.some(h => h.includes("Cha"));  // true if ANY match
hunters.every(h => h.length > 3);      // true if ALL match

// -------------------- 6. ITERATION --------------------
for (const h of hunters) console.log(h);        // for...of (values)
hunters.forEach((h, i) => console.log(i, h));   // no break/continue support!

// -------------------- 7. DEEP FUNDAMENTAL: REFERENCE vs COPY --------------------
const original = ["Nezuko"];
const shallowRef = original;        // same reference in memory
const shallowCopy = [...original];  // new array, same top-level refs
shallowRef.push("Muzan");
console.log(original.length);       // 2 (shallowRef mutated original!)
console.log(shallowCopy.length);    // 1 (unaffected)

// Deep copy needed when array holds nested objects/arrays:
const squad = [{ name: "Jinwoo", rank: "S" }];
const deepCopy = structuredClone(squad); // true deep clone (modern, preferred over JSON tricks)

// -------------------- 8. SORTING GOTCHA --------------------
const levels = [40, 5, 100, 20];
levels.sort();                 // ❌ [100, 20, 40, 5] — sorts as STRINGS
levels.sort((a, b) => a - b);  // ✅ [5, 20, 40, 100] — numeric comparator required

/* ============================================================
   INTERVIEW Q&A
   ============================================================

Q1: Difference between map() and forEach()?
A1: map() returns a NEW array of transformed values; forEach() returns
    undefined and is used purely for side effects (like logging).

Q2: How do you remove duplicates from an array?
A2: const unique = [...new Set(arr)];  // Set only stores unique values

Q3: How does splice() differ from slice()?
A3: splice(start, deleteCount, ...items) MUTATES the original array
    and can insert/remove. slice(start, end) returns a NEW array,
    original untouched.

Q4: Why does [] == false but [] !== false?
A4: == triggers type coercion: [] -> "" -> 0, false -> 0, so true.
    === compares type+value without coercion, so false (Array vs Boolean).

Q5: How to flatten a deeply nested array of unknown depth?
A5: arr.flat(Infinity);

Q6: What's the time complexity of push/pop vs shift/unshift?
A6: push/pop: O(1) (operate at the end).
    shift/unshift: O(n) (must re-index every remaining element).

Q7: How do you check if a variable is really an array?
A7: Array.isArray(value); // typeof arr gives "object", unreliable

Q8: How to sum values conditionally in one pass?
A8: const total = arr.filter(n => n > 10).reduce((s, n) => s + n, 0);
    // works, but reduce alone with an if-check inside is O(n) vs O(2n)

Q9: What happens with sparse arrays (new Array(3))?
A9: Creates "empty slots" — forEach/map SKIP them, but length still
    reports 3. Different from actual `undefined` values.

Q10: Stable sort guarantee?
A10: Since ES2019, Array.prototype.sort() is required to be stable
     (equal elements keep their relative order).
============================================================ */