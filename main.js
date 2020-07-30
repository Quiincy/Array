const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function initPairs(students) {
    const pairs = [
        [students[0],students[2]],
        [students[1],students[3]],
        [students[4],students[5]]
    ];
    return pairs;
}
const pairs = initPairs(students);
console.log(pairs);

document.writeln('<pre>');

document.writeln('Pairs of students : ' + pairs);




function getThemes(pairs, themes) {
    const studentsAndThemes = [];
    for (i = 0; i < pairs.length; i++) {
        studentsAndThemes.push([pairs[i].join(' і '), themes[i]]);
    }
    return studentsAndThemes;
  }
  
  const studentsAndThemes = getThemes(pairs, themes);
  
  console.log(studentsAndThemes);
  
  document.writeln('Students and themes : ' + studentsAndThemes);

  

function getStudentsMarks(students, marks) {
    const studentsMarks = [];
    for (i = 0; i < students.length; i++) {
      studentsMarks.push([students[i], marks[i]]);
    }
    return studentsMarks;
  }
const studentsMarks = getStudentsMarks(students,marks);

console.log(getStudentsMarks(students, marks));
document.writeln('Marks : ' + studentsMarks);


function randomMarks() {
    return Math.floor(Math.random() * 5) + 1;
  }
  
  
function getRandomMarks() {
    const studentsRandomMarks = [];
    for (i = 0; i < pairs.length; i++) {
      studentsRandomMarks.push([pairs[i].join(' і '), themes[i], randomMarks()]);
    }
    return studentsRandomMarks;
  }

const studentsRandomMarks = getRandomMarks();
console.log(getRandomMarks());
document.writeln('Student, themes and marks : ' + studentsRandomMarks);

