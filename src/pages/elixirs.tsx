import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { ElixirDifficulty } from "../types";
import { useQuery } from "react-query";
import { getElixirs } from "../api-client/routes";
import { useState } from "react";
import { ElixirList } from "./elixir-list";

export const Elixirs = () => {
  const [params, setParams] = useState<Record<string, string>>();

  const { isLoading, error, data } = useQuery({
    queryKey: ["elixirData", params],
    queryFn: () => getElixirs(params),
    //  enabled: false, // disable this query from automatically running on mount
  });

  return (
    <>
      {error && (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Oh no!</AlertTitle>
          <AlertDescription>something went wrong</AlertDescription>
        </Alert>
      )}
      <Flex direction={{ base: "column", sm: "row" }}>
        <Box w={400} m={4}>
          <Text fontWeight={"bold"}>Pick your Poison</Text>
          <FormControl>
            <FormLabel>Elixir difficulty</FormLabel>
            <Select
              placeholder='Select elixir difficulty'
              onChange={(e) => setParams({ Difficulty: e.target.value })}
            >
              {Object.keys(ElixirDifficulty).map((key, value) => (
                <option>{key}</option>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box w={400} m={4}>
          {isLoading ? (
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
            />
          ) : (
            <ElixirList elixirs={data} />
          )}
        </Box>
      </Flex>
    </>
  );
};
