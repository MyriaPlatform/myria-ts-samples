import { Modules } from "myria-core-sdk";
import { ProjectResponse } from "myria-core-sdk/dist/types/src/types/ProjectTypes";

const name: string = "XXX Game";
const companyName: string = "Gaming Studio XXX";
const contactEmail: string = "xxx@google.com";

export async function createProject() {
  const projectModule: Modules.ProjectModule = new Modules.ProjectModule();

  console.log("Creating the project...");
  let newProjectResult: ProjectResponse | undefined;
  try {
    newProjectResult = await projectModule.createProject({
      name: name,
      companyName: companyName,
      contactEmail: contactEmail,
    });
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Created the project:");
  console.log(JSON.stringify(newProjectResult, null, 2));
  return newProjectResult;
}
