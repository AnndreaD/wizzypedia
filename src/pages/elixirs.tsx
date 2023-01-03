import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Select,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { ElixirDifficulty, ElixirResponse } from "../types";
import { useQuery } from "react-query";
import { getElixirs } from "../api-client/routes";
import { useState } from "react";
import { ElixirList } from "./elixir-list";

export const Elixirs = () => {
  const [params, setParams] = useState<Record<string, string>>();
  const { isLoading, error, data } = useQuery("elixirData", () =>
    getElixirs(params)
  );

  if (isLoading)
    return (
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    );

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
        <Box w={400} mt={4}>
          <Text fontWeight={"bold"}>Pick your Poison</Text>
          <FormControl onChange={() => console.log("lol")}>
            <FormLabel>Elixir difficulty</FormLabel>
            <Select placeholder='Select elixir difficulty'>
              {Object.keys(ElixirDifficulty).map((key, value) => (
                <option>{key}</option>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box w={400} mt={4}>
          <ElixirList elixirs={data} />
        </Box>
      </Flex>
    </>
  );
};
