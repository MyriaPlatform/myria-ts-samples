import { ProjectManager } from "myria-core-sdk/dist/cjs/src/modules";
import { ProjectResponse } from "myria-core-sdk/dist/types/src/types/ProjectTypes";

(async (): Promise<void> => {
  const projectManager: ProjectManager = new ProjectManager();
  const projectId: string = "233";

  let projectDetailResponse: ProjectResponse | undefined;
  try {
    console.log(`Retrieving details of the ${projectId} project...`);
    projectDetailResponse = await projectManager.getProjectDetail(projectId);
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Requested project response:");
  console.log(JSON.stringify(projectDetailResponse, null, 2));
})();
