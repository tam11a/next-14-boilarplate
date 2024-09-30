import { useQuery } from '@tanstack/react-query';
import instance from '..';

interface EmployeeListParams {
  page?: number;
  user__groups?: string;
  paginate?: boolean;
  trash?: boolean;
}

export const useGetEmployeeList = (params?: EmployeeListParams) => {
  return useQuery({
    queryKey: ['employee-list'],
    queryFn: () => {
      return instance.get('/employee', {
        params,
      });
    },
  });
};
