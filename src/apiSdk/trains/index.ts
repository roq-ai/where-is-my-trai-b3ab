import axios from 'axios';
import queryString from 'query-string';
import { TrainInterface, TrainGetQueryInterface } from 'interfaces/train';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTrains = async (query?: TrainGetQueryInterface): Promise<PaginatedInterface<TrainInterface>> => {
  const response = await axios.get('/api/trains', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTrain = async (train: TrainInterface) => {
  const response = await axios.post('/api/trains', train);
  return response.data;
};

export const updateTrainById = async (id: string, train: TrainInterface) => {
  const response = await axios.put(`/api/trains/${id}`, train);
  return response.data;
};

export const getTrainById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/trains/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTrainById = async (id: string) => {
  const response = await axios.delete(`/api/trains/${id}`);
  return response.data;
};
