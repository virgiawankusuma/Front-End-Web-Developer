import "./article-item.js";
import article from "./article.js";

const containerElement = document.querySelector(".container");

const articleItemElement = document.createElement("article-item");
articleItemElement.article = article;

containerElement.appendChild(articleItemElement);