export interface Template {
  url: string;
  description: string;
  title: string;
};

const svggradients: Template = {
  url: "#_",
  description: "A small, focused tool by Arian.",
  title: "Arian Project"
};
const quicksetup: Template = {
  url: "#_",
  description: "A small, focused tool by Arian.",
  title: "Arian Project"
};
const vscodethemes: Template = {
  url: "#_",
  description: "A small, focused tool by Arian.",
  title: "Arian Project"
};

export const byName = {

  svggradients,
  quicksetup,
  vscodethemes,


};
export const otherprojects = Object.values(byName);
