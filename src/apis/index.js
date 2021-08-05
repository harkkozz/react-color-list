const colors = [
  {
    id: 1,
    code: '#0000FF',
    name: 'blue'
  },

  {
    id: 2,
    code: '#FF0000',
    name: 'orange'
  },
  {
    id: 3,
    code: '#FFFF00',
    name: 'yellow'
  },
  {
    id: 4,
    code: '#008000',
    name: 'green'
  }
];

const fetchColors = () =>
  new Promise(resolve => setTimeout(() => resolve(colors), Math.random() * 1500));

const addColor = newColor => {
  const data = new Promise(resolve => {
    setTimeout(() => {
      colors.push(newColor);
      resolve(newColor);
    }, Math.random() * 1000);
  });

  return data;
};

const removeColor = colorId => {
  const data = new Promise(resolve => {
    setTimeout(() => {
      const index = colors.findIndex(x => x.id === colorId);
      if (index >= 0) {
        colors.splice(index, 1);
      }
      resolve(colorId);
    }, Math.random() * 500);
  });

  return data;
};

export { colors, fetchColors, addColor, removeColor };
