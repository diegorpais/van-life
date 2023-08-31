import HostDash from '../models/host-dash.model';
import MyVansModel from '../models/host-my-vans.model';
import IncomeModel from '../models/income.model';
import ReviewsModel from '../models/reviews.model';
import Van from '../models/van.model';
import { api } from './api'

export const getDashboardData = async (): Promise<HostDash> => {
  try {
    const res = await api.get('dash');
    return res.data;
  } catch (e) {
    console.log('getDashboardData error api: ', e);
    throw (e);
  }
}

export const getMyVansData = async (): Promise<Array<MyVansModel>> => {
  try {
    const res = await api.get('my-vans');
    return res.data;
  } catch (e) {
    console.log('getMyVansData error api: ', e);
    throw (e);
  }
}

export const getMyVanDeail = async (id: string): Promise<MyVansModel> => {
  try {
    const res = await api.get(`my-vans/${id}`);
    return res.data;
  } catch (e) {
    console.log('getMyVansData error api: ', e);
    throw (e);
  }
}

export const getIncomeData = async (): Promise<IncomeModel> => {
  try {
    const res = await api.get('income');
    return res.data;
  } catch (e) {
    console.log('getIncomeData error api: ', e);
    throw (e);
  }
}

export const getReviewsData = async (): Promise<ReviewsModel> => {
  try {
    const res = await api.get('reviews');
    const reviews = res.data;
    return reviews;
  } catch (e) {
    console.log('getReviewsData error api: ', e);
    throw (e);
  }
}

export const getVans = async (): Promise<Array<Van>> => {
  try {
    const res = await api.get('vans');
    return res.data;
  } catch (e) {
    console.log('getVans error api: ', e);
    throw (e);
  }
}

export const getVanFilteredVanList = async (url: string): Promise<Array<Van>> => {
  try {
    const res = await api.get(`vans?${url}`);
    return res.data;
  } catch (e) {
    console.log('getVanFilteredVanList error api: ', e);
    throw (e);
  }
}

export const getVanDetail = async (id: string): Promise<Van> => {
  try {
    const res = await api.get(`vans/${id}`);
    return res.data;
  } catch (e) {
    console.log('getMyVansData error api: ', e);
    throw (e);
  }
}


