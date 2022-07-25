import { Modules } from "myria-core-sdk";
import { ProjectResponse } from "myria-core-sdk/dist/types/src/types/ProjectTypes";
import config from "../config";

const name: string = "Secret Game";
const companyName: string = "Secret Studio";
const contactEmail: string = "secret@google.com";

(async (): Promise<void> => {
  const projectModule: Modules.ProjectModule = new Modules.ProjectModule();

  let newProjectResponse: ProjectResponse | undefined;
  try {
    console.log("Creating the project...");
    newProjectResponse = await projectModule.createProject({
      name: name,
      companyName: companyName,
      contactEmail: contactEmail,
      starkKey: config.stark_key
    });
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }

  console.log("Created the project:");
  console.log(JSON.stringify(newProjectResponse, null, 2));
})();