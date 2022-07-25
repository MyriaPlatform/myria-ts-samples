import { Modules } from "myria-core-sdk";
import { ProjectResponse } from "myria-core-sdk/dist/types/src/types/ProjectTypes";
import config from "../config";

(async (): Promise<void> => {
  const projectModule: Modules.ProjectModule = new Modules.ProjectModule();
  const starkKey: string = config.user_stark_key;

  let newProjectResponse: ProjectResponse | undefined;
  try {
    console.log("Creating the project...");
    newProjectResponse = await projectModule.createProject({
      name: "PROJECT_NAME",
      companyName: "COMPANY_NAME",
      contactEmail: "COMPANY_EMAIL",
      starkKey: starkKey,
    });
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Created project response:");
  console.log(JSON.stringify(newProjectResponse, null, 2));
})();
