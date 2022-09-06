import { ProjectManager, ProjectResponse } from "myria-core-sdk";
import config from "../config";

(async (): Promise<void> => {
  const env = config.environment;
  const projectManager: ProjectManager = new ProjectManager(env);
  const projectId: string = "2";

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
