import { Modules } from "myria-core-sdk";
import { ProjectResponse } from "myria-core-sdk/dist/types/src/types/ProjectTypes";

export async function getProjectList() {
  const projectModule: Modules.ProjectModule = new Modules.ProjectModule();

  let projectListResult: ProjectResponse | undefined;
  try {
    console.log("Retrieving the project list...");
    projectListResult = await projectModule.getProjectList();
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }
  console.log("Project list result:");
  console.log(JSON.stringify(projectListResult, null, 2));
  return projectListResult;
}

getProjectList();
