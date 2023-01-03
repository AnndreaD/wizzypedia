import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { ElixirResponse } from "../types";

type ElixirListProps = {
  elixirs: ElixirResponse[] | undefined;
};

export const ElixirList = ({ elixirs }: ElixirListProps) => {
  if (!elixirs) return <Text> "...nothing to show, try searching"</Text>;
  return (
    <>
      <Text fontWeight={"bold"}>Elixirs</Text>
      <Accordion allowMultiple>
        {elixirs.map((elixir) => (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                  {elixir.name}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid columns={1} spacing={2}>
                {elixir.characteristics && (
                  <Box>
                    <Text fontWeight={"bold"}>Characteristics: </Text>
                    <Text>{elixir.characteristics}</Text>
                  </Box>
                )}
                {elixir.difficulty && (
                  <Box>
                    <Text fontWeight={"bold"}>Difficulty: </Text>
                    <Text>{elixir.difficulty}</Text>
                  </Box>
                )}
                {elixir.effect && (
                  <Box>
                    <Text fontWeight={"bold"}>Effect: </Text>
                    <Text>{elixir.effect}</Text>
                  </Box>
                )}
                {elixir.ingredients.length > 0 && (
                  <Box>
                    <Text fontWeight={"bold"}>Ingredients: </Text>
                    <Text>
                      <UnorderedList>
                        {elixir.ingredients.map((i) => (
                          <ListItem>{i.name}</ListItem>
                        ))}
                      </UnorderedList>
                    </Text>
                  </Box>
                )}
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
