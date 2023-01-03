import { baseUrl } from "./routes";
import qs from "query-string";

type Options = {
  url: string;
  params?: Record<string, string | undefined>;
  signal?: AbortSignal;
  token?: string;
} & (
  | {
      method: "GET";
      body?: undefined;
    }
  | {
      method: "POST";
      body: unknown;
    }
  | {
      method: "PUT";
      body: unknown;
    }
  | {
      method: "DELETE";
      body?: undefined;
    }
  | {
      method: "PATCH";
      body?: unknown;
    }
);

export async function request<ResponseType>(
  options: Options
): Promise<ResponseType> {
  const url =
    baseUrl +
    (
      options.url + (options.params ? "?" + qs.stringify(options.params) : "")
    ).replace(/\/\//g, "/");
  const response = await fetch(url, {
    method: options.method,
    body: options.body
      ? options.body instanceof FormData
        ? options.body
        : JSON.stringify(options.body)
      : undefined,
    signal: options.signal,
    headers: {
      Accept: "application/json",
      ...(options.body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }),
    },
  });
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw error;
  }

  //incase endpoint does not returning anything
  const text = await response.text();
  return text.length ? JSON.parse(text) : null;
}
