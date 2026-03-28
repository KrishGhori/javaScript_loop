function runJS() {
  // Strings
  let ans1 = "English ";
  let ans2 = "Gujarati";

  let combined = `${ans1}${ans2}`;

  // String methods
  let upper = ans1.toUpperCase();
  let lower = ans2.toLowerCase();
  let substring = ans1.substring(1, 4);

  // Split & Join
  let sentence = "hello hanji namaste";
  let words = sentence.split(" ");
  let joined = words.join(" ");

  // Logical OR
  let logic = (false || '3' || 0 || 'krish');

  // Loop example
  let loopOutput = "";
  for (let i = 1; i <= 5; i++) {
    loopOutput += i + " ";
  }

  // Final Output
  let result = `
    <b>Combined:</b> ${combined} <br>
    <b>Uppercase:</b> ${upper} <br>
    <b>Lowercase:</b> ${lower} <br>
    <b>Substring:</b> ${substring} <br>
    <b>Split:</b> ${words} <br>
    <b>Join:</b> ${joined} <br>
    <b>Logic Result:</b> ${logic} <br>
    <b>Loop:</b> ${loopOutput}
  `;

  document.getElementById("output").innerHTML = result;
}