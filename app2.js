const changeProjectHeadingTitle = (title) => {
  const projectTitle = document.querySelector("#project-title");
  
  if (typeof title === 'string') {
    projectTitle.innerHTML = title;
  } else {
    console.error("Your argument is not a string!")
  }

}

changeProjectHeadingTitle("Javascript is Cool")