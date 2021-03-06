const Div = ([...children], {...attributes}) => {

  const flatAttributes = Object.entries(attributes).map(([key, value]) => {
    if (key == 'className') {
      return `class="${value}"`;
    }
    if (typeof value === 'object') {
      const flatValue = Object.entries(value).map(([subKey, subValue]) => `${subKey}: ${subValue}`).join('; ');
      return `${key}="${flatValue}"`;
    }
    return `${key}="${value}"`;
  }
  ).join(' ');

  const div = `<div ${flatAttributes}>`;

  return `${div}${children.map(child => {
    return typeof child === 'object' ? Object.values(child)[0] : child;
  }).join('')}</div>`;
};

export default Div;
