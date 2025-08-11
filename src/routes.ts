import { rootRoute, route } from "@tanstack/virtual-file-routes";

export const routes = rootRoute("HomeLayout.tsx", [
  route("/about", "About.tsx"),
  route("/blog", "Blog.tsx"),
  route("/contact", "Contact.tsx"),
  route("/portfolio", "Portfolio.tsx"),
  route("/qualifications", "Qualifications.tsx"),
]);
