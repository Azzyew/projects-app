import { useQuery } from '@tanstack/react-query';

import { ProjectsService } from '@/services/projects.service';

export const useProjectsQuery = () => {
  const getAll = () => {
    return useQuery({
      queryKey: ['get-projects'],
      queryFn: () => {
        return ProjectsService.getAllProjects();
      },
    })
  };

  const getOneById = (id) => {
    return useQuery({
      queryKey: ['get-project-by-id'],
      queryFn: () => {
        return ProjectsService.getProjectById(id);
      },
    })
  };

  const remove = (id) => {
    return useMutation({
      mutationFn: () => {
        return ProjectsService.deleteProject(id);
      },
    });
  };

  return { getAll, getOneById, remove };
};