import { Modules } from "myria-core-sdk";
import { ProjectResponse } from "myria-core-sdk/dist/types/src/types/ProjectTypes";

(async (): Promise<void> => {
  const projectModule: Modules.ProjectModule = new Modules.ProjectModule();
  const projectId: string = "5";

  let projectDetailResponse: ProjectResponse | undefined;
  try {
    console.log(`Retrieving details of the ${projectId} project...`);
    projectDetailResponse = await projectModule.getProjectDetail(projectId);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Requested project response:");
  console.log(JSON.stringify(projectDetailResponse, null, 2));
})();
