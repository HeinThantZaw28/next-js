import axios, { AxiosResponse } from "axios";
import { useState } from "react";

export interface FetchApiProps {
  url: string;
  method: string;
  params?: string | number;
  body?: any;
}

const useFetcher = () => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getCall = async (url: string, params?: string | number) => {
    try {
      const response: AxiosResponse = await axios.get(`${url}/${params || ""}`);
      setData(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const postCall = async (url: string, body?: any) => {
    try {
      const response: AxiosResponse = await axios.post(
        url,
        JSON.stringify(body || {}),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setData(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteCall = async (url?: string, params?: string) => {
    try {
      const response = await axios.delete(`${url}/${params}`, {
        headers: { "Content-Type": "application/json" },
      });
      setData(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchApi = async ({ url, method, params, body }: FetchApiProps) => {
    setLoading(true);
    setError(null);

    if (method === "POST") {
      await postCall(url, body);
    } else if (method === "DELETE") {
      await deleteCall(url, params as string);
    } else {
      await getCall(url, params);
    }
  };

  return {
    data,
    error,
    loading,
    fetchApi,
  };
};

export default useFetcher;
