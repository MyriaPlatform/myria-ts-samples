import { Modules } from "myria-core-sdk";
import { ProjectResponse } from "myria-core-sdk/dist/types/src/types/ProjectTypes";

(async (): Promise<void> => {
  const projectModule: Modules.ProjectModule = new Modules.ProjectModule();

  let projectListResponse: ProjectResponse | undefined;
  try {
    console.log("Retrieving the project list...");
    projectListResponse = await projectModule.getProjectList();
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }
  console.log("Project list response:");
  console.log(JSON.stringify(projectListResponse, null, 2));
})();
