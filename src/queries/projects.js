import { useQuery, useMutation } from '@tanstack/react-query';

import { ProjectsService } from '../services/projects.service';

export const useProjectsQuery = () => {
  const getAllProjects = () => {
    return useQuery({
      queryKey: ['get-projects'],
      queryFn: () => {
        return ProjectsService.getAllProjects();
      },
    })
  };

  const getProjectById = (id) => {
    return useQuery({
      queryKey: ['get-project-by-id'],
      queryFn: () => {
        return ProjectsService.getProjectById(id);
      },
    })
  };

  const removeProject = (id) => {
    return useMutation({
      mutationFn: () => {
        return ProjectsService.deleteProject(id);
      },
    });
  };

  const createProject = (project) => {
    return useMutation({
      mutationFn: () => {
        return ProjectsService.createProject(project);
      },
    });
  };

  const editProject = (project) => {
    return useMutation({
      mutationFn: () => {
        return ProjectsService.editProject(project);
      },
    });
  };

  return { getAllProjects, getProjectById, removeProject, createProject, editProject };
};