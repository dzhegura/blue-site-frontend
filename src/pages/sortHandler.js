const GRID_SIZE = 40; // Шаг сетки

export function sortDots(projects, contacts, isSorted, setProjects, setContacts) {
  if (isSorted) {
    console.log("Сортировка активирована!");

    const startX = GRID_SIZE * 5;  // Левый столбец (проекты)
    const contactX = startX + GRID_SIZE * 15; // Правый столбец (контакты)
    const startY = GRID_SIZE * 4;  // Верхняя точка
    const gapY = GRID_SIZE * 2;    // Отступ между точками

    console.log("Координаты сортировки:", { startX, contactX, startY, gapY });

    // Выравниваем проекты (чётко по сетке)
    const sortedProjects = projects
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((project, index) => ({
        ...project,
        position: { 
          left: startX, 
          top: startY + index * gapY
        },
        cssClass: `sorted-project-${index + 1}`,
      }));

    // Выравниваем контакты (чётко по сетке)
    const sortedContacts = contacts
      .sort((a, b) => a.type.localeCompare(b.type))
      .map((contact, index) => ({
        ...contact,
        position: { 
          left: contactX, 
          top: startY + index * gapY
        },
        cssClass: `sorted-contact-${index + 1}`,
      }));

    setProjects(sortedProjects);
    setContacts(sortedContacts);
  } else {
    console.log("Unsort активирован! Разбрасываем точки по сетке хаотично.");

    setProjects(prevProjects =>
      prevProjects.map(project => ({
        ...project,
        position: getRandomGridPosition(),
        cssClass: "",
      }))
    );

    setContacts(prevContacts =>
      prevContacts.map(contact => ({
        ...contact,
        position: getRandomGridPosition(),
        cssClass: "",
      }))
    );
  }
}

// Функция для хаотичного размещения точек в пределах сетки
function getRandomGridPosition() {
  const maxX = Math.floor(window.innerWidth / GRID_SIZE);
  const maxY = Math.floor(window.innerHeight / GRID_SIZE);
  return {
    left: Math.floor(Math.random() * maxX) * GRID_SIZE,
    top: Math.floor(Math.random() * maxY) * GRID_SIZE,
  };
}
