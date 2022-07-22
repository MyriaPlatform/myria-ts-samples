import { Modules } from "myria-core-sdk";
import { ProjectResponse } from "myria-core-sdk/dist/types/src/types/ProjectTypes";

const id: string = "10";

export async function getProjectDetail() {
  const projectModule: Modules.ProjectModule = new Modules.ProjectModule();

  let projectDetailResult: ProjectResponse | undefined;
  try {
    console.log(`Retrieving details of the project #${id}...`);
    projectDetailResult = await projectModule.getProjectDetail(id);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Requested project result:");
  console.log(JSON.stringify(projectDetailResult, null, 2));
  return projectDetailResult;
}

getProjectDetail();