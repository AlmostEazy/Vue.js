import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/MainPage";
import Project from "../views/ProjectPage";
import ProjectDetails from "../views/ProjectDetailsPage";
import Blog from "../views/ArticlesPage";
import BlogDetails from "../views/BlogPage";
import NotFound from "../views/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
  },
  {
    path: "/project-details/:id?",
    name: "ProjectDetails",
    component: ProjectDetails,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog-details/:id?",
    name: "BlogDetails",
    component: BlogDetails,
  },
  {
    path: "/:CatchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
