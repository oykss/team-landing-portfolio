import data from '/public/data.json';
import { generationContentList } from './render-projects';

generationContentList(0, 2);

let count = 3;
const btnLoadMore = document.querySelector('.load-more');
const projectList = document.querySelector('.project-list');
btnLoadMore.addEventListener('click', addProjects);

function addProjects() {
  let temp = count + 2;

  if (temp >= data.projects.length - 1) {
    btnLoadMore.style.display = 'none';
    btnLoadMore.removeEventListener('click', addProjects);
    generationContentList(count, data.projects.length - 1);
  } else {
    generationContentList(count, temp);
    count = temp + 1;
  }
  const rectToShow = projectList.lastElementChild.getBoundingClientRect();
  window.scrollBy({
    top: rectToShow.height * 3,
    behavior: 'smooth',
  });
}
