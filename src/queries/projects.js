import { useQuery, useMutation } from '@tanstack/react-query';
import { ProjectsService } from '../services/projects.service';

export const useProjectsQuery = () => {
  const getAllProjects = useQuery({
    queryKey: ['get-projects'],
    queryFn: ProjectsService.getAllProjects,
  });

  const getProjectById = (id) => {
    return useQuery({
      queryKey: ['get-project-by-id', id],
      queryFn: () => ProjectsService.getProjectById(id),
    });
  };

  const removeProject = () => {
    return useMutation({
      mutationFn: (id) => ProjectsService.deleteProject(id),
    });
  };

  const createProject = () => {
    return useMutation({
      mutationFn: (project) => ProjectsService.createProject(project),
    });
  };

  const editProject = () => {
    return useMutation({
      mutationFn: (project) => ProjectsService.editProject(project),
    });
  };

  return { getAllProjects, getProjectById, removeProject, createProject, editProject };
};
