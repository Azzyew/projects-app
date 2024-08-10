import axios from 'axios';

export class ProjectsService {
  static client = axios.create({
    baseURL: `${process.env.EXPO_PUBLIC_API_URL}/projects/`,
  });

  static async createProject(project) {
    await ProjectsService.client.post('', project);
  };

  static async editProject(id, project) {
    await ProjectsService.client.patch(`${id}`, project);
  };

  static async getAllProjects() {
    const response = await ProjectsService.client.get('');

    return response.data;
  };

  static async getProjectById(id) {
    const response = await ProjectsService.client.get(id);

    return response.data;
  };

  static async deleteProject(id) {
    await ProjectsService.client.delete(`${id}`);
  };
}