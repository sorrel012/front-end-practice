const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

console.log('Array: ', exams);
console.log('Every: ', exams.every(score => score >= 75));
console.log('Some: ', exams.some(score => score >= 75));