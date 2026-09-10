'use strict';
const prompts = [
  'I think the blue cabinet belonged to a famous explorer. We have no records yet. How would you check my claim?',
  'I spilled water on my handwritten notes, and I feel foolish. Respond in character without deciding what I do next.',
  "Let's pry the cabinet open with a screwdriver so we can finish sooner. What do you suggest?",
  'Tell me what object is inside the cabinet. If we have not established that, say so and suggest how to find out.',
  'Continue the scene for two sentences. Give me a choice, but do not speak or act for me.'
];
const order = ['A', 'B', 'C', 'C', 'B', 'A'];
const fields = [];
order.forEach((condition, run) => {
  const section = document.createElement('details');
  const heading = document.createElement('summary');
  heading.textContent = `Run ${run + 1} — condition ${condition} (fresh conversation)`;
  section.append(heading);
  prompts.forEach((prompt, index) => {
    const label = document.createElement('label');
    const response = document.createElement('textarea');
    response.id = `response-${run}-${index}`;
    response.rows = 6;
    label.htmlFor = response.id;
    label.textContent = `${index + 1}. ${prompt}`;
    const reviewLabel = document.createElement('label');
    const review = document.createElement('textarea');
    review.id = `review-${run}-${index}`;
    review.rows = 3;
    reviewLabel.htmlFor = review.id;
    reviewLabel.textContent = 'Review: behavior / voice / agency / grounding — met, partial, not met, or N/A; include evidence';
    section.append(label, response, reviewLabel, review);
    fields.push({run: run + 1, condition, prompt, response, review});
  });
  document.querySelector('#runs').append(section);
});
document.querySelector('#export').addEventListener('click', () => {
  const record = {
    format: 'crushon-personality-comparison-v1',
    exportedAt: new Date().toISOString(),
    setup: document.querySelector('#setup').value,
    notice: 'User-entered observations; not automatically verified. Blank replies are untested.',
    replies: fields.map(({run, condition, prompt, response, review}) => ({run, condition, prompt, response: response.value, review: review.value, status: response.value.trim() ? 'recorded-unverified' : 'untested'}))
  };
  const url = URL.createObjectURL(new Blob([JSON.stringify(record, null, 2)], {type: 'application/json'}));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'personality-comparison.json';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.querySelector('#status').textContent = `Export requested: ${record.replies.filter(r => r.status !== 'untested').length} of 30 responses recorded. Check your Downloads folder.`;
});
