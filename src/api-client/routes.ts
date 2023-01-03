import { ElixirResponse } from "../types";
import { request } from "./base-api-client";

export const baseUrl = "https://wizard-world-api.herokuapp.com/";

export function getElixirs(
  params?: Record<string, string>
): Promise<ElixirResponse[]> {
  return request({
    method: "GET",
    url: `Elixirs`,
    params,
  });
}
