export function sortDots(projects, contacts, isSorted, setProjects, setContacts, setIsSorted) {
    setIsSorted(!isSorted); // Переключаем режим сортировки
  
    if (!isSorted) {
      let sortedProjects = [...projects].sort((a, b) => a.title.localeCompare(b.title));
      let sortedContacts = [...contacts].sort((a, b) => a.type.localeCompare(b.type));
  
      let startX = 200;
      let startY = 150;
      let gap = 60;
      let COLUMN_GAP = 200;
  
      sortedProjects = sortedProjects.map((project, index) => ({
        ...project,
        position: { x: startX, y: startY + index * gap },
      }));
  
      sortedContacts = sortedContacts.map((contact, index) => ({
        ...contact,
        position: { x: startX + COLUMN_GAP, y: startY + index * gap },
      }));
  
      setProjects(sortedProjects);
      setContacts(sortedContacts);
    } else {
      // Возвращаем хаотичное движение
      setProjects(prevProjects =>
        prevProjects.map(project => ({
          ...project,
          position: getRandomPosition(),
        }))
      );
      setContacts(prevContacts =>
        prevContacts.map(contact => ({
          ...contact,
          position: getRandomPosition(),
        }))
      );
    }
  }
  
  // Функция получения случайной стартовой позиции
  function getRandomPosition() {
    const GRID_SIZE = 40;
    const maxX = Math.floor(window.innerWidth / GRID_SIZE);
    const maxY = Math.floor(window.innerHeight / GRID_SIZE);
    return {
      x: Math.floor(Math.random() * maxX) * GRID_SIZE + 15, // Сдвиг вправо
      y: Math.floor(Math.random() * maxY) * GRID_SIZE,
    };
  }
  