export function create(tagName, classes, content) {
  const element = document.createElement(tagName);

  // console.log(classes);

  if (classes) addClasses(element, classes);

  if (content) addContent(element, content);

  return element;
}

export function createIn(parent, tagName, classes, content) {
  const element = create(tagName, classes, content);

  parent.append(element);
  return element;
}

function addClasses(el, classes) {
  if (typeof classes == "string") {
    const oneClass = classes;
    classes = [oneClass];
  }

  classes.forEach((cls) => {
    el.classList.add(cls);
  });
}

function addContent(el, content) {
  if (typeof content == "string" || typeof content == "number") {
    el.textContent = content;
  }
}
